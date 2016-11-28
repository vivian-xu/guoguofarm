var gulp = require('gulp'),
    minimist = require('minimist'), // 环境变量
    sass = require('gulp-sass'),
    rubySass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),

    jsmin = require('gulp-uglify'),

    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),

    htmlmin = require('gulp-htmlmin'),

    concat = require('gulp-concat'), // 合并文件
    rename = require('gulp-rename'), //重命名文件
    connect = require('gulp-connect'),

    gulpif = require('gulp-if'),

    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    handleErrors = require('./gulp/handleErrors');

    // 环境变量设置
    var knownOptions = {
      string: 'env',
      default: { env: process.env.NODE_ENV || 'development' }
    };

    var options = minimist(process.argv.slice(2), knownOptions);

    var isProduct = options.env === 'production';

    // 环境变量设置 完

    var outputDir = 'dist/development';

    var config = {};

    if ( !isProduct ) {
        config.map = 'sourcemaps.write()';
        config.outputStyle= '';
        config.outputdir = 'dist/development';
    } else {
        config.map = '';
        config.outputStyle = '{outputStyle: "compressed"}';
        config.outputdir = 'dist/production';
    }

    config.autoprefixer = {
      browsers: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
      ],
      cascade: true
    };


    gulp.task('html', function() {
        return gulp.src('src/templates/*.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(rename( function( path ) {
                path.basename += '.min';
            }))
            .pipe(gulp.dest(config.outputdir+'/html'))
            // .pipe(connect.reload());
            .pipe(gulpif( !isProduct, connect.reload()));
    })

    gulp.task('js', function() {

        if ( !isProduct ) {
            return gulp.src('src/js/*.js')
                .pipe(plumber( { errorHandler: handleErrors() }))
                .pipe(concat('main.js'))
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(sourcemaps.write('./'))
                .pipe(rename( function( path ) {
                    path.basename += '.min';
                }))
                .pipe(gulp.dest(config.outputdir+'/js'))
                .pipe(connect.reload());

        } else {
            console.log("js in production");
            return gulp.src('src/js/*.js')
                .pipe(concat('main.js'))
                .pipe (jsmin())
                .pipe(rename( function( path ) {
                    path.basename += '.min';
                }))
                .pipe(gulp.dest(config.outputdir+'/js'))
        }
    });

    gulp.task('sass', function() {

        if ( !isProduct ) {

            return gulp.src('src/sass/*.scss')
            // .pipe(sourcemaps.init())
            .pipe(sass(config.outputStyle).on("error", sass.logError))
            .pipe(autoprefixer(config.autoprefixer))
            .pipe(gulp.dest(config.outputdir+ '/css'))
            .pipe(connect.reload());

        } else {

            return gulp.src('src/sass/*.scss')
                // .pipe(sourcemaps.init())
                .pipe(sass(config.outputStyle).on("error", sass.logError))
                .pipe(autoprefixer(config.autoprefixer))
                .pipe(rename( function( path ) {
                    path.basename += ".min"
                }))
                .pipe(gulp.dest(config.outputdir+ '/css'));
        }
    });

     gulp.task('rubySass', function() {

         if ( !isProduct ) {

            return rubySass('src/sass/*.scss', { sourcemap: true,
                        })
                .on('error', rubySass.logError)
                .pipe(sourcemaps.write('maps', {
                    includeContent: false,
                    sourceRoot: 'source'
                }))
                .pipe(autoprefixer(config.autoprefixer))
                .pipe(gulp.dest(config.outputdir+ '/css'))
                .pipe(connect.reload());
         } else {

            return rubySass('src/sass/*.scss', { sourcemap: false ,
                        compass: true})
                .pipe(autoprefixer(config.autoprefixer))
                .pipe(rename( function( path ) {
                    path.basename += ".min"
                }))
                .pipe(gulp.dest(config.outputdir+ '/css'));
         }
     });

    gulp.task('image',function() {
        return gulp.src('src/images/*.{png,jpg,gif,ico}')
            .pipe(imagemin({
                progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
                svgoPlugins: [{removeViewBox: false}], //不要移除svg的viewbox属性
                use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
            }))
            .pipe(gulp.dest(config.outputdir+'/images'))
            .pipe(gulpif( !isProduct, connect.reload()));
    });

//  只压缩修改的图片,没有修改的图片直接从缓存文件读取
// .pipe(cache(imagemin({
//      progressive: true,
//      svgoPlugins: [{removeViewBox: false}],
//      use: [pngquant()]
//     })))
//

    gulp.task('watch', function() {
        if( !isProduct ) {
            gulp.watch('src/templates/*.html', ['html']);
            gulp.watch('src/js/*.js', ['js']);
            // gulp.watch('src/sass/*.scss', ['rubySass']);
            gulp.watch('src/sass/*.scss', ['sass']);
        } else {
            return;
        }
    });

    gulp.task('connect', function() {
        if( !isProduct ) {
            return connect.server({
                root: [outputDir],
                port: 8080,
                livereload: true
            });
        } else {
            return;
        }
    });

    gulp.task('default', ['html', 'js', 'sass', 'image', 'watch', 'connect']);
