// import { componentCtrl2 } from "../../scripts";
// import $ from "jquery";
// const selectors = {
//     self: '[data-cmp-is2="accordion"]'
// };

// componentCtrl2((prop) => {
//     const $ele = $(prop.element),
//         $expandCollapseBtn = $ele.find(".expandCollapseBtn"),
//         expandAllLabel = $expandCollapseBtn.find('.cmp-text').attr("data-expandLabel"),
//         collapseAllLabel = $expandCollapseBtn.find('.cmp-text').attr("data-collapseLabel"),
//         $cmpAccordionItems = $ele.find(".cmp-accordion__item");

//     $expandCollapseBtn.click(function(){
//         if ($expandCollapseBtn.hasClass('active')) {
//             $expandCollapseBtn.removeClass('active');
//             $expandCollapseBtn.find('.cmp-text').html(expandAllLabel);
//         } else {
//             $expandCollapseBtn.addClass('active');
//             $expandCollapseBtn.find('.cmp-text').html(collapseAllLabel);
//         }

//         for(let index = 0; index < $cmpAccordionItems.length; index++) {
//             const element = $cmpAccordionItems[index];
//             if ($expandCollapseBtn.hasClass("active")) {
//                 element.querySelector(".cmp-accordion__button").classList.add("cmp-accordion__button--expanded");
//                 element.querySelector(".cmp-accordion__button").setAttribute("aria-expanded", "true");
//                 element.querySelector(".cmp-accordion__panel").classList.add("cmp-accordion__panel--expanded");
//                 element.querySelector(".cmp-accordion__panel").setAttribute("aria-hidden", "false");
//             } else {
//                 element.querySelector(".cmp-accordion__button").classList.remove("cmp-accordion__button--expanded");
//                 element.querySelector(".cmp-accordion__button").setAttribute("aria-expanded", "false");
//                 element.querySelector(".cmp-accordion__panel").classList.remove("cmp-accordion__panel--expanded");
//                 element.querySelector(".cmp-accordion__panel").classList.add("cmp-accordion__panel--hidden");
//                 element.querySelector(".cmp-accordion__panel").setAttribute("aria-hidden", "true");
//             }
//         }
//     })

// }, selectors);