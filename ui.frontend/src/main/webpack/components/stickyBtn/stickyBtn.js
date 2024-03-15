// import { componentCtrl, deviceType } from "../../scripts";
// import $ from "jquery";

// const selectors = {
//   self: ".container__stickyBtnContainer",
// };

// componentCtrl((prop) => {
//   const $ele = $(prop.element);
//   const $phoneButton = $ele.find(".button__phone");

//     const containerOffsetTop = $ele[0].offsetTop;

//     const stickyTop = 100; 
//     const stickyLeftDesktop = 0;
//     const stickyLeftTablet = 50;
//     const stickyLeftMobile = 0;
//     const stickyTopDesktop = 0;
//     const stickyTopMobile = 60;
  
//     function stickyPositionUpdate() {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > containerOffsetTop) {
//         $ele.css('position', 'fixed');
//         if (deviceType() === "desktop") {
//           $ele.css('top', stickyTopDesktop + 'px');
//           $ele.css('left', stickyLeftDesktop + 'px');
//       }
//         else if(deviceType() === "tablet") {
//           $ele.css('top', stickyTopMobile + 'px');
//           $ele.css('left', stickyLeftTablet + 'px');
//         }
//         else {
//           $ele.css('top', stickyTopMobile + 'px');
//           $ele.css('left', stickyLeftMobile + 'px');
//           $ele.css('padding-left', '1.25rem');
//           $ele.css('padding-right', '1.75rem');
//           $ele.css('z-index', '2');
//         }
//         $ele.addClass('sticky');
//       }
//       else {
//         $ele.removeClass('sticky');
//         $ele.css('position', 'static');
//         $ele.css('top', stickyTop + 'px');
//         $ele.css('z-index', '1');
//       }
//     }
//     window.addEventListener('scroll', stickyPositionUpdate);
//     window.addEventListener('resize', stickyPositionUpdate);
//     const mobileNumber = $phoneButton.children()[0].textContent.replace(/\s+/g, '');
//     $phoneButton.children().attr("href", `tel:${mobileNumber}`);
// }, selectors);