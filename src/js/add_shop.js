// $(document).ready(function() {
// // add_shop
//   function goToNext() {
//     event.preventDefault();
//     var self = $(this);
//     var id = self.attr('data-id');
//     var pageId = "[data-page='" + id + "']";
//     var page = $(pageId);
//     Out($("#add_shop"), page);
//   }


//   var section = $("[data-id]");
//   var pages = $("[data-page]");

//   $('#footer-nav-save .nav-link').on('click', function(event) {
//     event.preventDefault();
//     console.log("i go home!!" + "current_page:" + $(".now").length + ", next_page:" + $("#add_shop").length);
//     Out($('.now'), $('#add_shop'));
//   });


//   // section.each(function(index, el) {
//   //   var self = $(this);
//   //   if (self.attr("data-id") === "shop_main") {
//   //     console.log("it's shop_main!" + self.html());
//   //     self.on('click', function(event) {
//   //       event.preventDefault();
//   //       console.log("in here");
//   //       actionSheet_main();
//   //       addClassBtn();
//   //     })
//   //   } else {
//   //     self.on('click', self, function(event) {
//   //       event.preventDefault();
//   //       var id = self.attr('data-id');
//   //       var pageId = "[data-page='" + id + "']";
//   //       var page = $(pageId);
//   //       console.log("i'm home !!!" + "next_page:" + page.length);
//   //       Out($("#add_shop"), page);
//   //     });
//   //   }
//   // });


//   /*
//     var _toggle_main = $("#shop_main");
//     console.log(_toggle_main.html());
//     _toggle_main.on('click', function(event) {
//       event.preventDefault();
//       actionSheet_main();
//     });
//   */
// });

// function Out(current_page, next_page) {
//   current_page.addClass('slideOut').on('animationstart', function(event) {
//     event.preventDefault();
//     next_page.show().addClass('slideIn');
//   }).on('animationend', function(event) {
//     event.preventDefault();
//     $(this).removeClass('slideOut').removeClass('now').hide();
//     changeNav();
//     next_page.addClass('now').removeClass('slideIn');
//   });
// }

// function changeNav() {
//   var homeNav = $("#footer-nav");
//   var changeNav = $('#footer-nav-save');
//   var isHomeHide = $("#add_shop").is(' :hidden ');
//   var isHomeNavHide = homeNav.is(' :hidden ');
//   if (isHomeHide && !isHomeNavHide) {
//     homeNav.hide();
//     changeNav.show();
//   } else if (!isHomeHide && isHomeNavHide) {
//     changeNav.hide();
//     homeNav.show();
//   }
// }


// function actionSheet_main() {
//   var mask = $('#mask');
//   var weuiActionsheet = $('#weui_actionsheet');
//   weuiActionsheet.addClass('weui_actionsheet_toggle');
//   mask.show().addClass('weui_fade_toggle').one('click', function() {
//     hideActionSheet(weuiActionsheet, mask);
//   });
//   $('#actionsheet_cancel').one('click', function() {
//     hideActionSheet(weuiActionsheet, mask);
//   });
//   weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

//   function hideActionSheet(weuiActionsheet, mask) {
//     weuiActionsheet.removeClass('weui_actionsheet_toggle');
//     mask.removeClass('weui_fade_toggle');
//     weuiActionsheet.on('transitionend', function() {
//       mask.hide();
//     }).on('webkitTransitionEnd', function() {
//       mask.hide();
//     });
//   }
// }

// function addClassBtn() {
//   var _btn = $("#actionSheet_wrap .add_class_btn");
//   _btn.on('click', function(event) {
//     event.preventDefault();
//     Out($("#add_shop"), $("#select_shopMain"));
//   });
// }
