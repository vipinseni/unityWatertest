// import { componentCtrl } from "../../scripts";
// import $ from "jquery";
// const selectors = {
//     self: '[data-cmp-is="scroll-to-top-button"]'
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element);

//     window.onscroll = function () {
//         scrollFunction();
//     };

//     function scrollFunction() {
//         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//             $ele.addClass("show");
//         } else {
//             $ele.removeClass("show");
//         }
//     }

//     $ele.click(function(){
//         backToTop();        
//     });

//     function backToTop() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//         $('.header-comp-logo .cmp-image__link').focus();

//     }

// }, selectors);