// import { componentCtrl, deviceType } from "../../scripts";
// import $ from "jquery";

// const selectors = {
//   self: '[data-cmp-is="courseStickyNavComp"]',
// };

// componentCtrl((prop) => {
//   const $ele = $(prop.element),
//     $courseStikcyMobBtn = $ele.find(".sticky-mob-btn .cmp-button"),
//     $courseDetailStickyTab = $ele.find(
//       ".course-sticky-nav__comp-btns-container"
//     ),
//     courseDetailStickyTablink = document.querySelectorAll(
//       ".course-sticky-nav__comp-btns-container .button__course-sticky-link .cmp-button"
//     ),
//     courseDetailStickyTabs = document.querySelectorAll(
//       ".container__course-sticky-nav .container__scroller>.cmp-container[id]"
//     ),
//     applyButton = $ele.find(".course-details .button__apply .cmp-button"),
//     enquiryButton = $ele.find(".course-details .button__enquiry .cmp-button");
//     const bannerCourseCode = $(".teaser__coursepagebanner .cmp-teaser__courseDesc").attr("data-coursecodeValue")|| "";
//   const bannerCricosCode = $(".teaser__coursepagebanner .cmp-teaser__courseDesc").attr("data-cricosCodeValue") || "";
//   const bannerAreaStudy = $(".teaser__coursepagebanner .cmp-teaser__courseDesc").attr("data-areaStudy") ||"";
//   const bannerStreamSubHeading = $(".teaser__coursepagebanner .cmp-teaser__courseDesc").attr("data-streamSubHeading") || "";
//   let formValueIdent = $(".coursePageLowerBanner .student-type-container"),
//     formSubHub = formValueIdent.attr("data-subHub"),
//     formStreamId = formValueIdent.attr("data-streamId"),
//     formStreamdesc = formValueIdent.attr("data-streamDescription"),
//     formStreamName = formValueIdent.attr("data-streamName"),
//     formLocation = formValueIdent.attr("data-location"),
//     formIntake = formValueIdent.attr("data-preferredIntake"),
//     formStudyMode = formValueIdent.attr("data-studyMode"),
//     formStudentType = formValueIdent.attr("data-studentType"),
//     formQualification = formValueIdent.attr("data-qualification");
//     const isMobileScreen = window.innerWidth < 992;
//   $(document).ready(function () {
//        if (isMobileScreen) { 
//       courseDetailStickyTablink.forEach((element) => {
//         $(element).attr("href", `${$(element).attr("href")}-mobile`);
//         $(element).click(function (event) {
//           event.preventDefault();
//           const sectionToScrollTo = $(`${$(element).attr("href").split("-")[0]}`);
//           const selectedId = `${$(element).attr("href").split("-")[0]}`.replace(/#/g, "");
//           const activeLabelMobile = document.querySelector( ".course-sticky-nav__comp-btns-container a[href*=" + selectedId + "]").innerText;
//           document.querySelector(".sticky-mob-btn").querySelector(".cmp-text").innerText = activeLabelMobile.replace(/\n\s*/g,"");
//           if (sectionToScrollTo.length) {
//             const windowHeight = $(window).height();
//             const sectionHeight = $('.thirtyPercent-container').height() + $('.header').height() ;
//              const desiredScrollTop = sectionToScrollTo.offset().top  - sectionHeight - 20
//                $('html, body').animate({scrollTop: desiredScrollTop, behavior: "smooth",});
//           }
//         });
//       });
//     }
//   });
//   if (applyButton.length > 0) {
//     let _href = applyButton.attr("href");
//     applyButton.attr(
//       "href",
//       _href +
//         "?location=" +
//         formLocation +
//         "&studyMode=" +
//         formStudyMode +
//         "&streamId=" +
//         formStreamId +
//         "&streamName=" +
//         formStreamName +
//         "&streamDescription=" + 
//         formStreamdesc +
//         "&subHub=" +
//         formSubHub +
//         "&preferredIntake=" +
//         formIntake +
//         "&studentType=" +
//         formStudentType
//         + '&courseCode=' + 
//         bannerCourseCode 
//         + '&areaStudy=' + 
//         bannerAreaStudy  
//         + '&streamSubHeading=' + 
//         bannerStreamSubHeading + '&qualification=' + formQualification
//     );
//   }
//   if (enquiryButton.length > 0) {
//     let _href = enquiryButton.attr("href");
//     enquiryButton.attr(
//       "href",
//       _href +
//         "?streamId=" +
//         formStreamId +
//         "&streamName=" +
//         formStreamName +
//         "&studentType=" +
//         formStudentType + 
//         '&courseCode=' + 
//         bannerCourseCode + 
//         '&cricosCode=' + 
//         bannerCricosCode
//         + '&areaStudy=' + 
//         bannerAreaStudy
//         + '&streamSubHeading=' + 
//         bannerStreamSubHeading + '&qualification=' + formQualification
//     );
//   }
//   let isMobileViewSize = deviceType() === "tablet" || deviceType() === "mobile";
//   let debounceTimeout;
//    window.addEventListener("scroll",navHighlighter);
//   function isMobileView() {
//     isMobileViewSize = deviceType() === "tablet" || deviceType() === "mobile";
//   }
//   function navHighlighter() {
//     let scrollY = window.pageYOffset;
//     courseDetailStickyTabs.forEach((current) => {
//       const sectionHeight = current.offsetHeight;
//       const sectionTop = isMobileScreen ? current.getBoundingClientRect().top + window.pageYOffset -  $('.thirtyPercent-container').height() + $('.header').height() - 200 : current.getBoundingClientRect().top + window.pageYOffset - 50 ,
//       sectionId = current.getAttribute("id");
//       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//         document.querySelector(".course-sticky-nav__comp-btns-container a[href*=" + sectionId + "]").classList.add("active");
//         const activeLabel = document.querySelector( ".course-sticky-nav__comp-btns-container a[href*=" + sectionId + "]").innerText;
//         document.querySelector(".sticky-mob-btn").querySelector(".cmp-text").innerText = activeLabel.replace(/\n\s*/g,"");
//       } else {
//         document.querySelector(".course-sticky-nav__comp-btns-container a[href*=" + sectionId + "]").classList.remove("active");
//       }
//     });
//   }
//   function stickyNavTogglerfunc() {
//     if (isMobileViewSize) {
//       $courseDetailStickyTab.addClass("d-none").parent().find(".sticky-mob-btn").attr("aria-expanded", "false");
//       $courseDetailStickyTab.click(function () {
//         $courseDetailStickyTab.addClass("d-none").parent().find(".sticky-mob-btn").attr("aria-expanded", "false");
//       });
//       $courseStikcyMobBtn.click(function () {
//         $courseDetailStickyTab.toggleClass("d-none");
//         if ($courseDetailStickyTab.hasClass('d-none')) {
//           $courseDetailStickyTab.parent().find(".sticky-mob-btn").attr("aria-expanded", "false");
//         }
//         else {
//           $courseDetailStickyTab.parent().find(".sticky-mob-btn").attr("aria-expanded", "true");
//         }
//       });
//     } else {
//       $courseDetailStickyTab.removeClass("d-none").parent().find(".sticky-mob-btn").attr("aria-expanded", "true");
//       $courseDetailStickyTab.click(function () {
//         $courseDetailStickyTab.removeClass("d-none").parent().find(".sticky-mob-btn").attr("aria-expanded", "true");
//       });
//     }
//   }

//   stickyNavTogglerfunc();
//   $(window).on("resize", function () {
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(function () {
//       isMobileView();
//       stickyNavTogglerfunc();
//     }, 400);
//   });
// }, selectors);