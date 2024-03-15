// import { componentCtrl } from "../../scripts";
// import $ from "jquery";
// import "slick-carousel";
// const selectors = {
//     self: '[data-cmp-is="slick-multi-item"]'
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element),
//         autoplaySpeed = $ele.attr("data-cmp-delay"),
//         enableBullets = $ele.find(".multi-item-carousel").attr("data-dots"),
//         enableArrows = $ele.find(".multi-item-carousel").attr("data-arrows"),
//         enableCenterMode = $ele.find(".multi-item-carousel").attr("data-centerMode"),
//         enableAutoPlay = $ele.find(".multi-item-carousel").attr("data-autoplay"),
//         enableInfiniteScroll = $ele.find(".multi-item-carousel").attr("data-infiniteScroll"),
//         enableVariableWidth = $ele.find(".multi-item-carousel").attr("data-variableWidth"),
//         slideToShowXl = parseInt($ele.find(".multi-item-carousel").attr("data-slideToShowXl")),
//         slideToScrollXl = parseInt($ele.find(".multi-item-carousel").attr("data-slideToScrollXl")),
//         slideToShowLG = parseInt($ele.find(".multi-item-carousel").attr("data-slideToShowLG")),
//         slideToScrollLG = parseInt($ele.find(".multi-item-carousel").attr("data-slideToScrollLG")),
//         slideToShowMD = parseInt($ele.find(".multi-item-carousel").attr("data-slideToShowMD")),
//         slideToScrollMD = parseInt($ele.find(".multi-item-carousel").attr("data-slideToScrollMD")),
//         slideToShowSM = parseInt($ele.find(".multi-item-carousel").attr("data-slideToShowSM")),
//         slideToScrollSM = parseInt($ele.find(".multi-item-carousel").attr("data-slideToScrollSM")),
//         $pagingInfo = $ele.find(".multiItemPagingInfo");

//     $ele.find(".multi-item-carousel").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $pagingInfo.text(i + ' / ' + slick.slideCount);

//     });

//     $ele.find(".multi-item-carousel").slick({
//         dots: enableBullets == "true" ? true : false,
//         arrows: enableArrows == "true" ? true : false,
//         centerMode: enableCenterMode == "true" ? true: false,
//         autoplay: enableAutoPlay == "true" ? true : false,
//         infinite: enableInfiniteScroll == "true" ? true : false,
//         variableWidth: enableVariableWidth == "true" ? true : false,
//         autoplaySpeed: autoplaySpeed ? autoplaySpeed : 2000,
//         speed: 800,
//         slidesToShow: slideToShowXl || 4,
//         slidesToScroll: slideToScrollXl || 4,
//         responsive: [
//             {
//                 breakpoint: 1366,
//                 settings: {
//                     slidesToShow: slideToShowXl || 4,
//                     slidesToScroll: slideToScrollXl || 4,
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: slideToShowLG || 3,
//                     slidesToScroll: slideToScrollLG || 3,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: slideToShowMD || 2,
//                     slidesToScroll: slideToScrollMD || 2,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: slideToShowSM || 1,
//                     slidesToScroll: slideToScrollSM || 1,
//                 }
//             }
//         ]
//     });
// }, selectors);