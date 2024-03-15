// import { componentCtrl } from "../../scripts";
// import $ from "jquery";
// import "slick-carousel";
// const selectors = {
//     self: '[data-cmp-is="slick-single-item"]'
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element),
//         autoplaySpeed = $ele.attr("data-cmp-delay"),
//         enableBullets = $ele.find(".single-item-carousel").attr("data-dots"),
//         enableArrows = $ele.find(".single-item-carousel").attr("data-arrows"),
//         enableAutoPlay = $ele.find(".single-item-carousel").attr("data-autoplay"),
//         $pagingInfo = $ele.find(".singleItemPagingInfo");

//     $ele.find(".single-item-carousel").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $pagingInfo.text(i + ' / ' + slick.slideCount);
//     });

//     $ele.find(".single-item-carousel").slick({
//         dots: enableBullets == "true" ? true : false,
//         arrows: enableArrows == "true" ? true : false,
//         autoplay: enableAutoPlay == "true" ? true : false,
//         autoplaySpeed: autoplaySpeed ? autoplaySpeed : 2000,
//         speed: 1000,
//     })

// }, selectors);