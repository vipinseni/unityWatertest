// import { componentCtrl, deviceType } from "../../scripts";
// import $ from "jquery";
// $(window).on("load resize", function () {
//   const $breadcrumbCoursepage = $(".container__course-pagebanner").find(
//     ".breadcrumb"
//   );
//   $breadcrumbCoursepage.addClass("container");
//   $(".container-teaser__iconNoDescription").each((i, ele) => {
//     const allTeaserEle = ele.querySelectorAll(
//       ".teaser__v2--icon-center-aligned"
//     );
//     const teaserLength = allTeaserEle.length;
//     allTeaserEle.forEach((eleT) => {
//       if (deviceType() === "tablet" || deviceType() === "desktop") {
//         if (teaserLength >= 7) {
//           eleT.classList.add("width-lg-4");
//           eleT.classList.remove(
//             "width-lg-3",
//             "width-lg-item-4",
//             "width-lg-item-3",
//             "width-lg-item-5"
//           );
//         } else if (teaserLength == 6) {
//           eleT.classList.add("width-lg-3");
//           eleT.classList.remove(
//             "width-lg-4",
//             "width-lg-item-4",
//             "width-lg-item-3",
//             "width-lg-item-5"
//           );
//         } else if (teaserLength == 5) {
//           eleT.classList.add("width-lg-item-5");
//           eleT.classList.remove(
//             "width-lg-3",
//             "width-lg-4",
//             "width-lg-item-3",
//             "width-lg-item-4"
//           );
//         } else if (teaserLength == 4) {
//           eleT.classList.add("width-lg-item-4");
//           eleT.classList.remove(
//             "width-lg-3",
//             "width-lg-4",
//             "width-lg-item-3",
//             "width-lg-item-5"
//           );
//         } else if (teaserLength <= 3) {
//           eleT.classList.add("width-lg-item-3");
//           eleT.classList.remove(
//             "width-lg-3",
//             "width-lg-4",
//             "width-lg-item-4",
//             "width-lg-item-5"
//           );
//         }
//       } else {
//         eleT.classList.remove(
//           "width-lg-item-3",
//           "width-lg-3",
//           "width-lg-4",
//           "width-lg-item-4",
//           "width-lg-item-5"
//         );
//       }
//     });
//   });
// });

// let themeName;
// function getThemeName() {
//   if ($("body").hasClass("futuretech-theme")) {
//     themeName = "futuretech";
//   } else if ($("body").hasClass("holmesglen-theme")) {
//     themeName = "holmesglen";
//   }
// }
// getThemeName();

// function setTeaserHeight() {
//   $(".container-teaser__nodescription_leftaligned").each(function () {
//     let teaserMaxHeigh = 1;
//     $(this)
//       .find(".teaser .cmp-teaser .cmp-teaser__content")
//       .each(function () {
//         if ($(this).height() > teaserMaxHeigh) {
//           teaserMaxHeigh = $(this).height();
//         }
//       });
//     if (deviceType() === "desktop") {
//       $(this)
//         .find(".teaser .cmp-teaser .cmp-teaser__content")
//         .height(teaserMaxHeigh);
//     }
//   });
// }
// $(document).ready(() => {
//   setTimeout(() => {
//     setTeaserHeight();
//   }, 3000);
//   const subHubEnquiryButton = $(".container__stickyBtnContainer .cmp-container .button__enquireBtn .cmp-button");
//   let subHubEnquiryButtonSection = $(".container__stickyBtnContainer .cmp-container"),
//     enquiryFormHub = subHubEnquiryButtonSection.attr("data-hub"),
//     enquiryFormSubHub = subHubEnquiryButtonSection.attr("data-subHub");
//   enquiryFormSubHub = enquiryFormSubHub ? enquiryFormSubHub.replace(/&/g, "%26") : enquiryFormSubHub;

//   if (subHubEnquiryButton.length > 0) {
//     let _href = subHubEnquiryButton.attr("href");
//     if (_href.indexOf('?') != -1) {
//       subHubEnquiryButton.attr("href", _href);
//     }
//     else {
//       subHubEnquiryButton.attr("href", _href + '?hub=' + enquiryFormHub + '&subHub=' + enquiryFormSubHub + '&studentType=local');
//     }
//   }
// });

// window.addEventListener(
//   "resize",
//   function (event) {
//     setTimeout(() => {
//       setTeaserHeight();
//     }, 3000);
//   },
//   true
// );
// // container null check function
// // LowerBanner Button
// $(".lowerBannerLink")
//   .off("click")
//   .on("click", function (e) {
//     e.preventDefault();
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget)
//           .find(".cmp-teaser__action-link-text")
//           .text(),
//         linkPageName: $(e.currentTarget).attr("href"),
//       },
//     });
//     // _satellite.track("generic-click");
//     window.location.href = $(e.currentTarget).attr("href");
//   });

// // Sticky button

// $(".button__course-sticky-link")
//   .off("click")
//   .on("click", function (e) {
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget).find(".cmp-button__text").text(),
//         linkPageName: $(e.currentTarget).find(".cmp-button").attr("href"),
//       },
//     });
//     // _satellite.track("generic-click");
//     window.location.href = $(e.currentTarget).find(".cmp-button").attr("href");
//   });

// // Color button

// $(".coloredButton")
//   .off("click")
//   .on("click", function (e) {
//     e.preventDefault();
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget).find(".cmp-button__text").text(),
//         linkPageName: $(e.currentTarget).find(".cmp-button").attr("href"),
//       },
//     });
//     // _satellite.track("generic-click");
//     window.location.href = $(e.currentTarget).find(".cmp-button").attr("href");
//   });

// // stickyNav Buttons
// $(".stickyNavButtons")
//   .off("click")
//   .on("click", function (e) {
//     e.preventDefault();
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget).find(".cmp-button__text").text(),
//         linkPageName: $(e.currentTarget).find(".cmp-button").attr("href"),
//       },
//     });
//     // _satellite.track("generic-click");
//     window.location.href = $(e.currentTarget).find(".cmp-button").attr("href");
//   });

// // Header nav link
// $(".header-comp-content").find('.cmp-list__item')
//   .off("click")
//   .on("click", function (e) {
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget).find(".cmp-list__item-title").text(),
//         linkPageName: $(e.currentTarget).find(".cmp-list__item-link").attr("href").trim(),
//       },
//     });
//     // _satellite.track("generic-click"); 
//     window.location.href = $(e.currentTarget).find(".cmp-list__item-link").attr("href").trim();
//   });

// // End

// // Footer nav link
// $(".footer-comp").find('.cmp-list__item')
//   .off("click")
//   .on("click", function (e) {
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget).find(".cmp-list__item-title").text(),
//         linkPageName: $(e.currentTarget).find(".cmp-list__item-link").attr("href").trim(),
//       },
//     });
//     // _satellite.track("generic-click"); 
//     window.location.href = $(e.currentTarget).find(".cmp-list__item-link").attr("href").trim();
//   });
// $(".button__social-links")
//   .off("click")
//   .on("click", function (e) {
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget).find(".cmp-button").attr("title"),
//         linkPageName: $(e.currentTarget).find(".cmp-button").attr("href").trim(),
//       },
//     });
//     // _satellite.track("generic-click"); 
//     const urlPath = $(e.currentTarget).find(".cmp-button").attr("href").trim();
//     window.open(urlPath, '_blank');
//   });


// // End

// // breadcrumb nav link
// $(".cmp-breadcrumb__item-link")
//   .off("click")
//   .on("click", function (e) {
//     e.preventDefault();
//     window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//         linkName: $(e.currentTarget).find(".cmp-breadcrumb__link-text").text().trim(),
//         linkPageName: $(e.currentTarget).attr("href"),
//       },
//     });
//     // _satellite.track("generic-click");
//     window.location.href = $(e.currentTarget).attr("href");
//   });
// // End

// var $container = $(
//   ".container__null-value-check .responsivegrid .cmp-container"
// );

// if ($container.children().length == 0) {
//   $(".container__null-value-check").remove();
// }

// async function fetchResults() {

//   const requestOptions = {
//     method: 'Get',
//     headers: { 'Content-Type': 'application/json' },
//   };

//   const params = new URLSearchParams({
//     theme: themeName.toLowerCase().includes("futuretech") ? "FUT" : "holmesglen",
//   });

//   await fetch(`/bin/getStudyAreaColorCodes?${params}`, requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       if (typeof data == 'object') {
//         if (Object.keys(data).length > 0) {
//           sessionStorage.setItem("colorCodeObj", window.btoa(JSON.stringify(data)));
//         } else {
//           sessionStorage.setItem("colorCodeObj", window.btoa("empty"));
//         }
//       } else {
//         sessionStorage.setItem("colorCodeObj", window.btoa("error"));
//       }
//     })
//     .catch((error) => {
//       $(".page-loader").hide();
//       $("#loading-success").html("Page successfully loaded");
//       sessionStorage.setItem("colorCodeObj", window.btoa("error"));
//     });
// }

// if (!sessionStorage.getItem("colorCodeObj")) {
//   fetchResults();
// }