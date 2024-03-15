// import { componentCtrl, deviceType } from "../../../scripts";
// import $, { data } from "jquery";
// import { createPagination } from "../../common/pagination";
// import Handlebars, { log } from "handlebars";
// import { filteringCoursesFacetsData } from "./filteringCourseFacets";
// import Select2 from 'select2';
// if (
//   document.querySelectorAll(".teaser__page-banner .cmp-teaser__title")[0] !=
//   null
// ) {
//   var typeOfPage = document.querySelectorAll(
//     ".teaser__page-banner .cmp-teaser__title"
//   )[0].innerText;
// }

// const selectors = {
//   self: ".course-listing-comp",
// };

// componentCtrl((prop) => {
//   const $ele = $(prop.element),
//     $showMoreText = $ele.find(".course-card").attr("data-showmore-text")
//       ? $ele.find(".course-card").attr("data-showmore-text")
//       : "Show more",
//     $coursefilter = $ele.find(".dropdown .btn"),
//     $sortNewsListingDropdown = $ele.find("select[name=sortNewsListing]"),
//     $hitsContainer = $ele.find("#courseListingResultsContainer"),
//     rawResultsHandleBarTemplate = $ele.find("#resultsCardTemplate").html(),
//     filtersHandlerbarTemplate = $ele.find("#courseListingFilter").html(),
//     $hitsFilterGenerate = $ele.find("#courseListingFilterHits"),
//     $checkboxList = $ele.find(".parent-checkbox"),
//     $subCheckboxList = $ele.find(".child-checkbox"),
//     $dropdownToggle = $ele.find(".dropdown-toggle"),
//     $clearFilters = $ele.find(".clearFilters"),
//     $filterHeader = $ele.find(".filter-header"),
//     $filterCancel = $ele.find(".filter-cancel"),
//     resultTemplate = $ele.find("#openDaysListTemplate").html(),
// 		filterResultsTemplate = $ele.find("#openDaysListingFilterTemplate").html(),
// 		$hitsContainerOpenDays = $ele.find("#openDaysListContainer"),
// 		$openDaysFilterListingContainer = $ele.find("#openDaysDropdownFilters"),
// 		$emptyResultContainer = $ele.find("#emptyResultsContainer"),
// 		$errorMsgContainer = $ele.find("#errorResultsContainer"),
// 		$dropdown = $ele.find(".dropdown"),
// 		$boodNow = $ele.find("page-button"),
// 		bookNowBtnUrl = $ele.find(".open-days-List-Comp").attr("data-bookNowLink"),
//     openDaysLink = $ele.find(".open-days-List-Comp").attr("data-upcomingOpenDaysLink"),
//     openDayLinkUrl = $ele.find(".open-days-List-Comp").find(".list-heading"),
// 		searchPath = $ele.find(".main-heading").attr("data-searchpath"),
// 		subHubName =  $ele.data("subhub") ? $ele.data("subhub") : "";
//     let checkedData ;

//   let isMobileViewSize = (deviceType() === 'tablet' || deviceType() === 'mobile');
//   // const showMoreText = $relatedNewsList.data("showmore-text") ? $relatedNewsList.data("showmore-text") : "Show More";
//   let debounceTimeout;
//   let showMoreButton =
//     `<div class="d-flex justify-content-center"><div class='col-12 col-lg-4 show-more d-flex justify-content-center' id="showMoreNews"><span class="cmp-button__text show-more__text">` +
//     $showMoreText +
//     `</span><span class="cmp-button__icon icon-arrow-right show-more__icon" aria-hidden="true" hidden></span></div></div>`;
//   let limit = isMobileViewSize ? 6 : 12;
//   let cardLimit;
//   let cards;
//   let pageUrl;
//   let initialData;
//   var themeName;
//   let offsetValue = 1;
//   let sortingOrderVal="asc";
//   const formPath = $(".filter-container").attr("data-formlink");
//   let totalPages;
//   let pageNumber;
//   let obj = {};
//   sessionStorage.removeItem("object");
//   let pageTypeArr;
//   let filterChecked = "false";
//   let clearFilter="";
//   let subHub = subHubName;
//   let params = new URLSearchParams(location.search);
//   let payloadObj={};
//   let isfilterParam=false;


//   // if(sessionColorCode){
//   //   getColorCode = window.atob(sessionStorage.getItem("colorCodeObj"));
//   // }

//       //function to read URL on load
//       function readURL(){
//         if(params.size>0){
//           let hubValue;
//           let subHubValue = [];
//           let studyAreaValue = [];
//           const studyAreaObject = {}
//           for (const [key, value] of params.entries()) {
            
//             if(key.includes("f_")){
//                 let splitedURL = value.includes("|")?value.split("|"):[value]; 
//                 payloadObj[key.replace("f_","")]=splitedURL;    
//             }
//           }
//           if(payloadObj.hasOwnProperty("studyArea")){
//             payloadObj.studyArea.forEach((e,i)=>{
//               if(e.includes("h_")){
//                 hubValue =e.replace("h_","");
//               }
//               else if(e.includes("s_")){
//                 subHubValue.push(e.replace("s_",""));
//               }
//             })
//             studyAreaObject["hub"]="holmesglen:hub/" + hubValue;
//             subHubValue.forEach((data)=>{
//               studyAreaValue.push("holmesglen:hub/"+ hubValue +"/"+ data);
//             })
//             studyAreaObject["subHubs"]= studyAreaValue
//             payloadObj["studyArea"] = [studyAreaObject]
          
//           }
//         }   
//       }
    
//       readURL();

//   function isMobileView() {
//     isMobileViewSize = deviceType() === "mobile";
//     limit = isMobileViewSize ? 6 : 12;
//   }

//   let prevWidth = $(window).width();
//   $(window).on("resize", function () {
//     const newWidth = $(window).width();
//         if (newWidth !== prevWidth ) {   
//             prevWidth = newWidth;
//     clearTimeout(debounceTimeout);

//     debounceTimeout = setTimeout(function () {
//       isMobileView();
//       const cardData = JSON.parse(sessionStorage.getItem("courseData"));
//       if (cardData) {
//         // cardLimitShow(cardData);
//       }
//       if (isMobileViewSize) {
//         limit = 6;
//         // $(".sort-by").addClass("d-none"); // Hide the "Sort By" div
//         // $(".facets").addClass("d-none"); // Hide the "Facets" div
//         // $(".filter-header").addClass("closed");
//         // $(".filter-header").removeClass("open");
//         location.reload(true);
//       } else {
//         limit = 12;
//         // $(".sort-by").removeClass("d-none");
//         // $(".facets").removeClass("d-none");
//         // $(".filter-header").removeClass("closed");
//         location.reload(true);
//       }
//       fetchResults(sortingOrderVal, offsetValue, limit);
//     }, 400);
//         }
//   });


// new Select2($sortNewsListingDropdown, {
//   minimumResultsForSearch: -1
// });

// $('.sort-by .select2-container .select2-selection--single').attr('aria-labelledby', "Ascending");
// $sortNewsListingDropdown.on('change',function(){
//   sortingOrderVal = $sortNewsListingDropdown[0].value;
//   let sortAriaLabel = sortingOrderVal === "asc" ? "Ascending" : sortingOrderVal === "desc" ? "Descending" : "";
//         // Set aria-label attribute
//         $('.sort-by .select2-container .select2-selection--single').attr('aria-labelledby', sortAriaLabel);
//   fetchResults(sortingOrderVal, 1, limit);
// })

// const desktopFilterHeader = () => {
//   const listHeading = document.querySelector(".filter-header__text");
//   const firstCourseListHeader = document.querySelector(".courseList_header__heading");
//   const courseListHeaders = document.querySelectorAll(".courseList_header__heading");
//   let courseListBody = document.querySelectorAll(".facets-container__body.search-filter-list");
//   const courseList = document.querySelector(".tab-courses-list");
//   const check = document.querySelectorAll(".form-check-input");    
       
//         listHeading.addEventListener("click", () => {
//           if (firstCourseListHeader.classList.contains("open")) {
//             courseListBody.forEach((header, index) => {
//               header.classList.add("d-none");
//               const filHeader = $(header).closest(".facets-container").find(".courseList_header__heading");
//               filHeader.addClass("closed");
//               filHeader.removeClass("open");                    
//           })
//             firstCourseListHeader.classList.remove("open");
//             firstCourseListHeader.classList.add("closed");
//             listHeading.classList.remove("open");
//             listHeading.classList.add("closed");
//             listHeading.setAttribute("aria-expanded", "false");
//             courseListBody[0].classList.add("d-none");

//             check.forEach((checkbox, index)=>{
//               if(checkbox.checked){
//             const filterBody =  $(checkbox).closest(".facets-container__body");
//             const filterHeader = $(checkbox).closest(".facets-container").find(".courseList_header__heading");
//             filterBody.addClass("d-none");
//             filterHeader.removeClass("open");
//             filterHeader.addClass("closed");
//             listHeading.setAttribute("aria-expanded", "true");
//               }
    
//             })


//           } else {
//             courseListBody.forEach((header, index) => {
//               header.classList.add("d-none");
//               const filHeader = $(header).closest(".facets-container").find(".courseList_header__heading");
//               filHeader.addClass("closed");
//               filHeader.removeClass("open");                    
//           })
//             firstCourseListHeader.classList.add("open");
//             firstCourseListHeader.classList.remove("closed");
//             listHeading.classList.remove("closed");
//             listHeading.classList.add("open");
//             listHeading.setAttribute("aria-expanded", "true");
//             courseListBody[0].classList.remove("d-none");

//             check.forEach((checkbox, index)=>{
//               if(checkbox.checked){
//             const filterBody =  $(checkbox).closest(".facets-container__body");
//             const filterHeader = $(checkbox).closest(".facets-container").find(".courseList_header__heading");
//             filterBody.removeClass("d-none");
//             filterHeader.removeClass("closed");
//             filterHeader.addClass("open");
//             listHeading.setAttribute("aria-expanded", "true");
//               }
    
//             })

//           }

//         //   if(listHeading.classList.contains("closed")){

//         // }

//         });

//         $(listHeading).keypress(function (e) {
//           var key = e.which;
//           if(key == 13)  // the enter key code
//            {
//             $(listHeading).click();
//              return false;  
//            }
//          });
         
//         courseListHeaders.forEach((header, index) => {
//           if (index === 0) {
//             header.classList.add("open");
//             header.classList.remove("closed");
//             header.setAttribute("aria-expanded", "true");
//             courseListBody[index].classList.remove("d-none");
//           } else {
//             header.classList.add("closed");
//             header.classList.remove("open");
//             header.setAttribute("aria-expanded", "false");
//             courseListBody[index].classList.add("d-none");
//           }
          
//           header.addEventListener("click", () => {
//             if (courseListBody[index].classList.contains("d-none")) {
             
//               courseListBody[index].classList.remove("d-none");
//               header.classList.add("open");
//               header.classList.remove("closed");
//               header.setAttribute("aria-expanded", "true");
//             } else {
//               courseListBody[index].classList.add("d-none");
//               header.classList.add("closed");
//               header.classList.remove("open");
//               header.setAttribute("aria-expanded", "false");
//             }
//           });

//           $(header).keypress(function (e) {
//             var key = e.which;
//             if(key == 13)  // the enter key code
//              {
//                $(header).click();
//                return false;  
//              }
//            });
//         });
        

//         check.forEach((checkbox, index)=>{
            
//           if(checkbox.checked){
//               console.log("Checkbox checked")
//         const filterBody =  document.querySelectorAll(".form-check-input")[index].closest(".facets-container__body");
//         filterBody.classList.remove("d-none");
//         console.log("Filter body", filterBody.previousElementSibling.children[0]);
//          const filterHeading =  filterBody.previousElementSibling.children[0];
//          console.log(filterHeading, "checkbox heading=---");
//          filterHeading.classList.remove("closed");
//          filterHeading.classList.add("open");
//           }

//         })
// };

// const mobileFilterHeader = () => {
//   const listHeading = document.querySelector(".filter-header__text");
//   const courseListHeaders = document.querySelectorAll(".courseList_header__heading");
//   let courseListBody = document.querySelectorAll(".facets-container__body.search-filter-list");
//   const facetsList = document.querySelector(".facets");
//   const check = document.querySelectorAll(".form-check-input");
//   listHeading.classList.add("closed");
//   facetsList.style.display='none';
  
//       if (listHeading.classList.contains("open")) {
//           listHeading.classList.remove("open");
//           listHeading.classList.add("closed");
//           listHeading.setAttribute("aria-expanded", "false");
//       }
   
//       listHeading.onclick = function() {
//         if (listHeading.classList.contains("closed")) {
//           listHeading.classList.remove("closed");
//           listHeading.classList.add("open");
//           listHeading.setAttribute("aria-expanded", "true");
//           facetsList.style.display='block';
//        } 
//         else {
//           listHeading.classList.remove("open");
//           listHeading.classList.add("closed");
//           listHeading.setAttribute("aria-expanded", "false");
//           facetsList.style.display='none';
//         }
//       };

//       courseListHeaders.forEach((header, index) => {
//           header.classList.add("closed");
//           header.classList.remove("open");
//           courseListBody[index].classList.add("d-none");
//       header.addEventListener("click", () => {
//         if (courseListBody[index].classList.contains("d-none") ) {           
//           courseListBody[index].classList.remove("d-none");
//           header.classList.add("open");
//           header.classList.remove("closed");
         
//         } else {
//           courseListBody[index].classList.add("d-none");
//           header.classList.add("closed");
//           header.classList.remove("open");
//         }
//       });
//     });

//     check.forEach((checkbox, index)=>{        
//       if(checkbox.checked){
//           const filterBody =  document.querySelectorAll(".form-check-input")[index].closest(".facets-container__body");
//           filterBody.classList.remove("d-none");
//           const filterHeading =  filterBody.previousElementSibling.children[0];
//           filterHeading.classList.remove("closed");
//           filterHeading.classList.add("open");
//           listHeading.classList.remove("closed");
//           listHeading.classList.add("open");  
//           listHeading.setAttribute("aria-expanded", "true");
//           facetsList.style.display='block';
//       }
//     })
// };


// // checkbox function start
// $checkboxList.on("change", (e) => {
//   const currentTarget = e.currentTarget;
//   const subCheckBoxes = currentTarget.closest(".checkbox-parent-container").querySelectorAll(".child-checkbox");
//   currentTarget.classList.remove("selectedPartial");
//   if (currentTarget.checked === true) {
//       currentTarget.closest(".checkbox-parent-container").classList.add("selected");
//       if (subCheckBoxes.length > 0) {
//           subCheckBoxes.forEach(element => {
//               element.checked = true
//           })
//       }
//   } else {
//       currentTarget.closest(".checkbox-parent-container").classList.remove("selected");
//       if (subCheckBoxes.length > 0) {
//           subCheckBoxes.forEach(element => {
//               element.checked = false
//           })
//       }
//   }
//   fetchResults(q, sortingOrderVal, offsetValue, limit, searchQuery);
// });

// $subCheckboxList.on("change", (e) => {
//   let partialSelected = false;
//   const currentTarget = e.currentTarget;
//   const subChildOfCourseList = currentTarget.closest(".checkbox-parent-container").querySelectorAll(".child-checkbox");
//   subChildOfCourseList.forEach(element => {
//       if (element.checked == false) {
//           partialSelected = true;
//       }
//   });

//   if (partialSelected == true) {
//       currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").checked = false;
//       if (currentTarget.closest(".checkbox-parent-container").querySelectorAll(".child-checkbox:checked").length > 0) {
//           currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.add("selectedPartial")
//       } else {
//           currentTarget.closest(".checkbox-parent-container").classList.remove("selected");
//           currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.remove("selectedPartial")
//       }
//   } else {
//       currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").checked = true;
//       currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.remove("selectedPartial");
//   }
//   fetchResults(q, sortingOrderVal, offsetValue, limit, searchQuery);
// });

//   // get theme
//   function getThemeName() {
//     if ($("body").hasClass("futuretech-theme")) {
//       themeName = "FUT";
//     } else if ($("body").hasClass("holmesglen-theme")) {
//       themeName = "holmesglen";
//     }
//   }
//   getThemeName();
//   document.addEventListener('click', function (event) {
//     if(event.target.classList.contains("book-now-btn")){
//       sessionStorage.removeItem("description");
//       const description = event.target.getAttribute('data-description');
//       sessionStorage.setItem("description",description);
//     }
// });

//   function fetchResults(sortingOrderVal, offsetValue, limit) {
//     let obj= {};
//     getThemeName();
//     var listingSearchPath = $ele.find(".filter-container").attr("data-listing-searchPath");
//     var listingPageType = $ele.find(".filter-container").attr("data-listing-pageType");
//     var listingIntCheck = $ele.find(".filter-container").attr("data-listing-international");
//     var pageUrl = listingSearchPath ? listingSearchPath : "";
//     var themeCheck = themeName;
//     pageTypeArr = listingPageType?listingPageType.split(","):"";
//     const pageTypefilteredData = pageTypeArr?pageTypeArr.filter(value => value !== ''):null;

//     $(".page-loader").show();
//     $("#loading-success").empty();

//     if(sessionStorage.getItem("object")){
//       obj = JSON.parse(sessionStorage.getItem("object"));
//     }else{
//       obj = payloadObj;
//     }

//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         "searchPath": pageUrl ? pageUrl : "",
//         "pageType": pageTypefilteredData,
//         "theme": themeName,
//         "pageNo":offsetValue,
//         "international": listingIntCheck,
//         "limit":limit,
//         "sortBy":sortingOrderVal,
//         "openDayBookNowURL":bookNowBtnUrl?bookNowBtnUrl:"",
//         "upcomingOpenDays":openDaysLink?openDaysLink:"",
//         "applicationFormUrl":formPath?formPath:"",
//         ...obj
//       }),
//     };
//     fetch("/bin/courseList", requestOptions)
//       .then((response) => response.json())
//       .then((data) => {
//         $(".page-loader").hide();
//         $("#loading-success").html("Course listing page successfully loaded");
//         const floatElement = document.querySelector(".container__full-width");
//         const courseElement = document.querySelector(".search-facets-main__filter").closest('.container__full-width');
//         if (floatElement && courseElement) {
//             floatElement.style.overflow = 'visible';
//             courseElement.style.overflow = 'visible';
//         }
//         if (data.courseData.length > 0) {
//           const { applicationFormUrl, courseData } = data;
//           courseData.forEach(item => {
//             item.applicationFormUrl = applicationFormUrl;
//             item.listingPageType = listingPageType;
//           });
//           $("#courseResultsContainer")
//             .removeClass("d-none")
//             .addClass("d-block");
//           $("#emptyNewsResultsContainer")
//             .removeClass("d-block")
//             .addClass("d-none");
//             $("#courseListingFilterHits").removeClass("d-none")
//             openDayLinkUrl.attr("href",data.opendaysData.upcomingOpenDays);
//           filterChecked == "true"?previousFilterCheck():"";
//           createFilterHtml(data);
//           filterCheck();
//           if (isMobileViewSize) {
//             mobileFilterHeader();
//           } else {
//             desktopFilterHeader();
//           }
//           createResultCardsHtml(data);
//           // generateOpenDaysFilters(data);
//           limitDesc();
//         } else {
//           $("#courseResultsContainer")
//             .addClass("d-none")
//             .removeClass("d-block");
//           $("#emptyNewsResultsContainer")
//             .addClass("d-block")
//             .removeClass("d-none");
//             if(!isMobileViewSize) {
//               $("#courseListingFilterHits").addClass("d-none")
//             }
//         }
//         if(data.opendaysData.openDays.length > 0){
//           $(".open-days-List-Comp.thirtyPercent-container .card").removeClass("d-none");
//           let openDaysArray = data.opendaysData.openDays.sort((a,b)=>{
//             if (a.eventShortDesc < b.eventShortDesc) {
//             return -1;
//             }
//             if (a.eventShortDesc > b.eventShortDesc) {
//             return 1;
//             }
//             return 0;
//           });
//           generateCard(openDaysArray);
//         }
//         else{
//           $(".open-days-List-Comp.thirtyPercent-container .card").addClass("d-none");
//         }
//         if (offsetValue == 1 && data.totalCount > 0) {
//           totalPages = Math.ceil(data.totalCount / limit);
//           createPagination(limit, data.totalCount, 1, 1);
//           $("#prev-btn").addClass("pe-none btn-disabled");
//           $("#prev-btn").removeAttr("role");
//           $("#prev-btn").removeAttr("tabindex");
//       }
//       else {
//           $("#prev-btn").removeClass("pe-none btn-disabled");
//           $("#prev-btn").attr("role", "link");
//           $("#prev-btn").attr("tabindex", "0");
//       }
//       })
//       .catch((error) => {
//         $(".page-loader").hide();
//         $("#loading-success").html("Course listing page successfully loaded");
//         document
//           .getElementById("errorNewsResultsContainer")
//           .classList.remove("d-none");
//       });
//   }
//   // function to create cards
//   function createResultCardsHtml(data) {
//     Handlebars.registerHelper("freeTafeFlagBoolean", function (freeTafeFlag) {
//       freeTafeFlag =
//         freeTafeFlag === "Y" || freeTafeFlag === "y" ? true : false;
//       return freeTafeFlag;
//     });
//     const compiledTemplate = Handlebars.compile(rawResultsHandleBarTemplate);
//     const ourGeneratedHtml = compiledTemplate(data);
//     $hitsContainer.html(ourGeneratedHtml);
//     limitDesc();
//   }

//   // function to create filters
//   function createFilterHtml(data) {
//     const compiledTemplate = Handlebars.compile(filtersHandlerbarTemplate);
//     const ourGeneratedHtmls = compiledTemplate(data);
//     $hitsFilterGenerate.html(ourGeneratedHtmls);
// }

// function checkIfFilterSelected(){
//   const openDaysCheckedInputs = $(".facets-container__body input");
//     openDaysCheckedInputs.each((i,ele)=>{
//       if (ele.checked){
//         checkedData = "true"
//         return false;
//       }
//       else{
//         checkedData = "false"
//       }
//   })
// }

//   $clearFilters.on("click", function(){
//     checkIfFilterSelected();
//     if(checkedData == "true"){
//       filterChecked = "false";
//       clearFilter = "clear";
//       sessionStorage.removeItem("object");
//       if (obj) {
//         for (const key in obj) {
//           delete obj[key];
//         }
//       }
//       if (payloadObj) {
//         for (const key in payloadObj) {
//           delete payloadObj[key];
//         }
//       }

//       $(this).css({
//         "border-color": "var(--gray-500)",
//         color: "var(--gray-500)",
//       });
//       $(this).addClass("pe-none");
//       const searchParams = new URLSearchParams(location.search);

//       // Create an array of keys to remove
//       const keysToRemove = [];

//       // Iterate through the search parameters and add keys starting with "filter_" to the keysToRemove array
//       searchParams.forEach((value, key) => {
//         if (key.startsWith("f_")) {
//           keysToRemove.push(key);
//         }
//       });

//       // Remove the keys from the search parameters
//       keysToRemove.forEach(key => {
//         searchParams.delete(key);
//       });

//       const refresh = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();
//       window.history.pushState({ path: refresh }, '', refresh);
//       fetchResults(sortingOrderVal, 1, limit);
//     }
// });

// $clearFilters.keypress(function (e) {
//   var key = e.which;
//   if(key == 13)  // the enter key code
//    {
//     $clearFilters.click();
//      return false;  
//    }
//  });

//   const checkedInputs = [];
//     function previousFilterCheck(){
//       const UrlCheckedInputs = [];
//       const params = new URLSearchParams(location.search);
//         checkedInputs.length = 0;
//         const openDaysInputs = $(".facets-container__body input");
//         openDaysInputs.each((i,ele)=>{
//             if (ele.checked){
//                 checkedInputs.push(ele.id)
//             }
//         })
//         for (const [key, value] of params.entries()) {
            
//           if(key.includes("f_")){
//               let splitedURL = value.includes("|")?value.split("|"):[value]; 
//               splitedURL.forEach((e)=>{
//                 if(e.includes("h_")){
//                   UrlCheckedInputs.push(e.replace("h_","").toLowerCase())
//                 }
//                 else if(e.includes("s_")){
//                   UrlCheckedInputs.push(e.replace("s_","").toLowerCase())
//                 }
//                 else{
//                   UrlCheckedInputs.push(e.replace(/\s+/g, "-").toLowerCase())
//                 }
//               })  
              
//           }
//         }
//         for (const element of [...new Set(UrlCheckedInputs)]) {
//           if (!checkedInputs.includes(element)) {
//             checkedInputs.push(element);
//           }
//         }
//     }
//     function filterCheck(){
//       const allInput = $ele.find(".facets-container__body input");
//       if (filterChecked == "true") {
//         allInput.each((currIndex, currEle) => {
//           $(checkedInputs).each((prevIndex, prevEle) => {
//             if (currEle.id === prevEle) {
//               $(currEle).prop("checked", true);
//               $(`#${currEle.id}`).closest(".news-listing-comp__course-sub-filter").css({ display: "block" });
//               const childCheckboxValue = $(`#${currEle.id}`).closest(".checkbox-parent-container").find(".checkbox-child-container");
//               if(childCheckboxValue.length > 0){
//                 childCheckboxValue.css({display:"block"});
//               }
            
//             }
//           });
//         });
//       } else {
//         //code for check true checkbox

//         if (clearFilter != "clear") {
//           for (const value of params.values()) {
//             let splitedURL = value.includes("|") ? value.split("|") : [value];
//             splitedURL.forEach(ele => {
//               if(ele.includes("h_")){
//                 checkedInputs.push(ele.replace("h_", "").toLowerCase());
//               }
//               else if(ele.includes("s_")){
//                 checkedInputs.push(ele.replace("s_", "").toLowerCase());
//               }
//               else{
//                 checkedInputs.push(ele.replace(/\s+/g, "-").toLowerCase());
//               }
//             });
//           }

//           allInput.each((currIndex, currEle) => {
//             $(checkedInputs).each((prevIndex, prevEle) => {
//               if (currEle.id === prevEle) {
//                 $(currEle).prop("checked", true);
//                 $(`#${currEle.id}`)
//                   .closest(".search-filter-list")
//                   .find(".news-listing-comp__course-sub-filter")
//                   .css({ display: "block" });
//                 $ele
//                   .find(`#${currEle.id}`)
//                   .closest(".facets-container__body")
//                   .removeClass("d-none");
//                 $ele
//                   .find(`#${currEle.id}`)
//                   .closest(
//                     ".facets-container__header .courseList_header__heading"
//                   )
//                   .removeClass("closed")
//                   .addClass("open");
//               }
//             });
//           });
//           if(checkedInputs && checkedInputs.length > 0){
//             if($("body").hasClass("futuretech-theme")){
//               $clearFilters.css({"border-color":"var(--greenishyellow)","color":"var(--greenishyellow)"});
//               }else {
//                 $clearFilters.css({"border-color":"var(--primary)","color":"var(--primary)"});
//               }
//             $clearFilters.removeClass("pe-none");
//           }
//         }
//       }
//     }

//   function filterOnChange(){
//     $(document).on('click','.search-facets-main__filter .form-check-input' ,function () {
    
//         const checkboxValue = $(this).val();
//         let keyName = $(this).closest('.facets-container').find('h6').text();
//         keyName = keyName.replace(/\s+/g, '').replace(/(^|-)(\w)/g, (match, p1, p2) => p2.toLowerCase());
//          const childValues = [];


//         if (!obj[keyName]) {
//             obj[keyName] = []; // Create a new array if key doesn't exist
//         }
//         if (this.checked) {
//             if (!$(this).closest(".checkbox-parent-container").find(".child-checkbox").length > 0 && !$(this).hasClass("hub")) {
//                 obj[keyName].push(checkboxValue);
//                const thisChilds = $(this).closest(".facets-container__body").children();
//                thisChilds.each(function(i,e){
//                 const inputVal = $(e).find("input");
//                if(inputVal.hasClass("checked")){
//                 obj[keyName].push(inputVal.val());
//                 inputVal.removeClass("checked");
//                 }
//                })
//             }
//             if (this.classList.contains("child-checkbox")) {
//                 let partialSelected = false;
//                 // const currentTarget = e.currentTarget;
//                 const subChildOfCourseList = this.closest(
//                     ".checkbox-parent-container"
//                 ).querySelectorAll(".child-checkbox");
//                 subChildOfCourseList.forEach(element => {
//                     if (element.checked == false) {
//                         partialSelected = true;
//                     }
//                 });
//                 if (partialSelected == true) {
//                     this.closest(".checkbox-parent-container").querySelector(
//                         ".parent-checkbox"
//                     ).checked = true;
//                     if (
//                         this.closest(
//                             ".checkbox-parent-container"
//                         ).querySelectorAll(".child-checkbox:checked").length > 0
//                     ) {
//                         this.closest(".checkbox-parent-container")
//                             .querySelector(".parent-checkbox")
//                             .classList.add("selectedPartial");
//                     } else {
//                         this.closest(
//                             ".checkbox-parent-container"
//                         ).classList.remove("selected");
//                         this.closest(".checkbox-parent-container")
//                             .querySelector(".parent-checkbox")
//                             .classList.remove("selectedPartial");
//                     }
//                 } else {
//                     this.closest(".checkbox-parent-container").querySelector(
//                         ".parent-checkbox"
//                     ).checked = true;
//                     this.closest(".checkbox-parent-container")
//                         .querySelector(".parent-checkbox")
//                         .classList.remove("selectedPartial");
//                 }
//                 const parentCheckboxValue = this.closest(
//                     ".checkbox-parent-container"
//                 ).querySelector(".parent-checkbox").value;
//                 // if (!obj[keyName][0].hub.includes(parentCheckboxValue)) {
//                 //     obj[keyName].push(parentCheckboxValue);
//                 // }
//                 const targetValue = this.value;
//                 const childVal = obj[keyName];

//                 for (let i = 0; i < childVal.length; i++) {
//                     const subHubs = childVal[i].subHubs;
//                     const hub = childVal[i].hub;
//                     // if (!subHubs) {
//                     //   childVal[i].subHubs = []; // Create subHubs array if it doesn't exist
//                     // }
//                     if (hub == parentCheckboxValue && !subHubs.includes(targetValue)) {
//                         subHubs.push(targetValue);
//                     }
//                 }

//             } else if (this.classList.contains("parent-checkbox")) {
//                 const childCheckbox = $(this)
//                     .closest(".checkbox-parent-container")
//                     .find(".child-checkbox");
//                 this.classList.remove("selectedPartial");
//                 if (this.checked === true) {
//                     this.closest(".checkbox-parent-container").classList.add(
//                         "selected"
//                     );
//                     // if (childCheckbox.length > 0) {
//                     //     childCheckbox.each((i, e) => {
//                     //         $(e).prop("checked", true);
//                     //     });
//                     // }
//                 } else {
//                     this.closest(".checkbox-parent-container").classList.remove(
//                         "selected"
//                     );
//                     if (childCheckbox.length > 0) {
//                         childCheckbox.each((i, e) => {
//                             $(e).prop("checked", false);
//                         });
//                     }
//                 }
//                 // let childValues = [];
//                 // childCheckbox.each(function () {
//                 //     childValues.push($(this).val());
//                 // });
//                 if (childValues.length >= 0 && this.classList.contains("hub")) {
//                     const selectedCourse = {
//                         hub: checkboxValue,
//                         subHubs: childValues,
//                     };
//                     obj[keyName].push(selectedCourse);
//                 }
//                 if (((this.classList.contains("hub")) && childCheckbox.length == 0)) {
//                     const selectedCourse = {
//                         hub: checkboxValue
//                     };
//                     obj[keyName].push(selectedCourse);
//                 }
//             }
//         } else {
//             const index = obj[keyName].indexOf(checkboxValue);
//             if (this.classList.contains("child-checkbox")) {
//                 let partialSelected = false;
//                 const subChildOfCourseList = this.closest(".checkbox-parent-container").querySelectorAll(".child-checkbox");
//                 let checkedChildCount = 0;
//                 subChildOfCourseList.forEach(element => {
//                     if (element.checked === true) {
//                         partialSelected = true;
//                         checkedChildCount++;
//                     }
//                 });

//                 if (partialSelected === true) {
//                     this.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.add("selectedPartial");
//                 } else {
//                     this.closest(".checkbox-parent-container").classList.remove("selected");
//                     // this.closest(".checkbox-parent-container").querySelector(".parent-checkbox").checked = false;
//                     this.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.remove("selectedPartial");
//                 }


//                 if (checkedChildCount >= 0) {

//                     const targetValue = checkboxValue;
//                     const childVal = obj[keyName]

//                     for (let i = 0; i < childVal.length; i++) {
//                         const subHubs = childVal[i].subHubs;
//                         if (subHubs && subHubs.includes(targetValue)) {
//                             const index = subHubs.indexOf(targetValue);
//                             if (index !== -1) {
//                                 subHubs.splice(index, 1);
//                             }
//                         }
//                     }

//                 } else if (checkedChildCount == 0) {
//                     if (this.classList.contains("subHub")) {
//                         const targetValue = checkboxValue;
//                         const childVal = obj[keyName]

//                         for (let i = 0; i < childVal.length; i++) {
//                             const subHubs = childVal[i].subHubs;
//                             if (subHubs && subHubs.length > 0 && subHubs[0] === targetValue) {
//                                 childVal.splice(i, 1); // Remove the entire object at index i
//                                 break; // Exit the loop after removal
//                             }
//                         }
//                     }
//                     else {
//                         delete obj[keyName];
//                     }
//                 }
//             } else if (this.classList.contains("parent-checkbox")) {
//                 const childCheckbox = $(this).closest(".checkbox-parent-container").find(".child-checkbox");
//                 this.closest(".checkbox-parent-container").classList.remove("selected");
//                 if(this.classList.contains("checked")){
//                     this.classList.remove("checked")
//                 }
//                 if (childCheckbox.length > 0) {
//                     childCheckbox.each((i, e) => {
//                         $(e).prop('checked', false);
//                     });
//                 }
//                 if (this.classList.contains("hub")) {
//                     const targetValue = checkboxValue;
//                     const childVal = obj[keyName]

//                     for (let i = 0; i < childVal.length; i++) {
//                         if (childVal[i].hub === targetValue) {
//                             childVal.splice(i, 1); // Remove the entire object at index i
//                             break; // Exit the loop after removal
//                         }
//                     }
//                 }
//                 else if ($(this).closest(".facets-container__body").find(".checkbox-parent-container").length > 0) {
//                     const targetValue = checkboxValue;
//                     const childVal = obj[keyName]

//                     for (let i = 0; i < childVal.length; i++) {
//                         if (childVal[i] === targetValue) {
//                             childVal.splice(i, 1); // Remove the entire object at index i
//                             break; // Exit the loop after removal
//                         }
//                     }
//                 }
//                 else {
//                     delete obj[keyName];
//                 }
//             }

//         }
//         //to remove duplicate value from the array
//         for (const key in obj) {
//             if (Array.isArray(obj[key])) {
//                 const uniqueValues = [...new Set(obj[key])];
//                 obj[key] = uniqueValues;
//             }
//         }
//         const studentType = "studentType";
//         if(obj.hasOwnProperty('studentType') && keyName == "studentType"){
//             for (const key in obj) {
//                 if (key !== studentType) {
//                   delete obj[key];
//                 }
//               }
//         }
//         if(!sessionStorage.hasOwnProperty("object")){
//           for (const key in payloadObj) {
//               if (key == keyName) {
//                 const studyAreaValues = []
//                 if(keyName == "studyArea"){
//                 for(let i = 0; i<payloadObj[key].length; i++){
//                   studyAreaValues.push(payloadObj[key][i].hub)
//                   for(let j = 0; j<payloadObj[key][i].subHubs.length; j++){
//                     studyAreaValues.push(payloadObj[key][i].subHubs[j])
//                   }
//                 }

//                 studyAreaValues.forEach((element , i)=>{
//                   if(element == checkboxValue){
//                     delete payloadObj[key].splice(i,1);
//                     i--;
//                   } 
//                   if(element.split("/").length > 2){
//                     if(payloadObj[key].length > 0){
//                       if(payloadObj[key][0].subHubs){
//                         payloadObj[key][0].subHubs.forEach((element, index)=>{
//                           if(element == checkboxValue){
//                             delete payloadObj[key][0].subHubs.splice(index,1);
//                             index--;
//                           }
//                         })
//                       }
//                   }
//                   }
//                 })

//                 }
//                 else{
//                   for (let i = 0; i < payloadObj[key].length; i++) {
//                     const element = payloadObj[key][i];
//                     if(element == checkboxValue){
//                       delete payloadObj[key].splice(i,1);
//                       i--;
//                     } 
//                   }
//                 }
//               }
//             }
//       }

//         if(sessionStorage.hasOwnProperty("object")){
//           sessionStorage.setItem("object", JSON.stringify(obj))
//         }
//         else if(Object.entries(payloadObj).length > 0){
//           if(Object.entries(obj).length > 0){
//             let mergedObj ={};
//             function mergeObjects(obj1, obj2) {
//               mergedObj = { ...obj1 };
//               for (const key in obj2) {
//                 if (mergedObj.hasOwnProperty(key)) {
//                   if (Array.isArray(mergedObj[key]) && Array.isArray(obj2[key])) {
//                     mergedObj[key] = mergedObj[key].concat(obj2[key]);
//                   } else if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
//                     mergedObj[key] = mergeObjects(mergedObj[key], obj2[key]);
//                   } else {
//                     mergedObj[key] = obj2[key];
//                   }
//                 } else {
//                   mergedObj[key] = obj2[key];
//                 }
//               }
            
//               obj = mergedObj;
//             }
//             mergeObjects(obj, payloadObj);
//             sessionStorage.setItem("object", JSON.stringify(obj))
//           }
//           else{
//             obj = payloadObj
//             sessionStorage.setItem("object", JSON.stringify(obj))
//           }
//         }
//         else{
//           sessionStorage.setItem("object", JSON.stringify(obj))
//         }
        
//         checkIfFilterSelected()
//       if(checkedData=="true"){
//         if($("body").hasClass("futuretech-theme")){
//           $clearFilters.css({"border-color":"var(--greenishyellow)","color":"var(--greenishyellow)"});
//           }else {
//             $clearFilters.css({"border-color":"var(--primary)","color":"var(--primary)"});
//           }
//         $clearFilters.removeClass("pe-none");
//       }
//       else if(checkedData=="false"){
//         $clearFilters.css({"border-color":"var(--gray-500)","color":"var(--gray-500)"});
//         $clearFilters.addClass("pe-none");
//       }

//       const searchParams = new URLSearchParams();

//       let values ;
//         let studyAreaValues = [];
//       for (const key in obj) {     
//         if (Array.isArray(obj[key])) {
//           if(key == "studyArea"){
//             for (let i = 0; i < obj[key].length; i++) {
//               const hubName = obj[key][i].hub.split("/")[1]
//               studyAreaValues.push("h_"+hubName);
//               for (let j = 0; j < obj[key][i].subHubs.length; j++) {
//                 const subHubName = obj[key][i].subHubs[j].split("/")[2]
//                 studyAreaValues.push("s_"+subHubName);
//               }
//             }
//              if(studyAreaValues){
//                 if(studyAreaValues.length > 0){
//                   searchParams.append("f_"+key,studyAreaValues.join("|"))
//                 }
//               }
//           }
//           else{
//             values = []
//             for (let i = 0; i < obj[key].length; i++) {
//               values.push(obj[key][i]);
//             }
//             if(values){
//               if(values.length > 0){
//                 searchParams.append("f_"+key,values.join("|"))
//               }
//             }
//           }
//         }
//       }
//       const searchParamsString = searchParams.toString();
//       const refresh = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParamsString;
//       window.history.pushState({ path: refresh }, '', refresh);

//       filterChecked = "true";
//       clearFilter="";
//         fetchResults(sortingOrderVal, 1, limit);
//     });
// }
// filterOnChange();


//     Handlebars.registerHelper("studyModeCheck", function (listingPageType) {
//       if(listingPageType){
//         const courseLevels = ["shortCourses", "apprenticeship", "secondarySchools", "VCEVM", "VETDSS"];
//         const courseLevelCheck = courseLevels.some(courseLevel => listingPageType.includes(courseLevel));
//         if(courseLevelCheck){
//           return false;
//         }
//         else{
//           return true;
//         }
//       }
//     });

//     Handlebars.registerHelper("deliveryCheck", function (listingPageType) {
//       if(listingPageType){
//         if(listingPageType.includes("apprenticeship")){
//           return false;
//         }
//         else{
//           return true;
//         }
//       }
//     });

//   //Book now button function
//   Handlebars.registerHelper("pageRedirectUrl", function (applicationFormUrl, streamId, subHub, campus, studyMode, courseCode, intakes,streamName, streamDescription, studentType, hub, streamSubHeading, qualification, context, options) {
//     if (!streamId || !subHub) {
//         return "#";
//     }
//     return applicationFormUrl + "?streamId="+streamId+"&subHub="+subHub+"&location=" + campus + "&studyMode=" + studyMode + "&courseCode=" + courseCode + "&preferredIntake=" + intakes + "&streamName=" + streamName + "&streamDescription=" + streamDescription + "&studentType=" + studentType + "&areaStudy=" + hub + "&streamSubHeading=" + streamSubHeading + "&qualification=" + qualification;
// });

//   Handlebars.registerHelper("hasData", function (obj) {
//     if (obj) {
//       var obj = Object.keys(obj).length > 0;
//     }
//     return obj;
//   });

//   Handlebars.registerHelper("removeArrayobject", function (lab) {
//     if (lab) {
//       if (lab !== "allResult") {
//         return lab;
//       }
//     }
//   });

//   Handlebars.registerHelper("formateLabel", function (label) {
//     if (label) {
//       let result = "";
//       for (let i = 0; i < label.length; i++) {
//         const currentChar = label[i];
//         if (i > 0 && currentChar === currentChar.toUpperCase()) {
//           result += " ";
//         }
//         result += currentChar;
//       }
//       return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
//     }
//   });

//   // Helper function for duration key value pair
//   Handlebars.registerHelper("eachDurationPair", function (array) {
//     let pairs = [];
//     for (let i = 0; i < array.length; i += 2) {
//       pairs.push([array[i], array[i + 1]]);
//     }

//     const formattedData = pairs.map((arr) => {
//       const formattedString = `${arr[0].replace(/ /g, "-")} ${arr[1].replace(
//         / /g,
//         " "
//       )}`;
//       return formattedString;
//     });

//     // Join the formatted strings with " / " separator
//     const result = formattedData.join(" / ");

//     return result;
//   });

//   // Helper function for all key value pair
//   Handlebars.registerHelper("eachPair", function (array) {
//     const formattedData = array.map((e) => {
//       const formattedString = e.replace(/ /g, " ");
//       return formattedString;
//     });

//     // Join the formatted strings with " / " separator
//     const result = formattedData.join(" / ");

//     return result;
//   });

//   // Helper function for all key value pair
//   Handlebars.registerHelper("eachSpacePair", function (array) {
//     const formattedData = array.map((e) => {
//       // const formattedString = `${arr[0].replace(/ /g,'-')} ${arr[1].replace(/ /g,' ')}`;
//       const formattedString = e.replace(/ /g, " ");
//       return formattedString;
//     });

//     // Join the formatted strings with " , " separator
//     const result = formattedData.join(", ");

//     return result;
//   });

//   Handlebars.registerHelper("formatIntake", function (array) {
//     let splitedMonth ="";
//     let monthString = "january february march april may june july august september october november december january february march april may june july august september october ";
//     const intakeData = array.map((e,i) => {
//       if(i<7){
//         splitedMonth += e.split("-")[0].toLowerCase() + " "
//       }
//       const intakesValue = e.split("-");
//       if(i==0){
//         return intakesValue[0];
//       }
//       return " "+ intakesValue[0];
//     });
//     if (monthString.includes(splitedMonth) && intakeData.length >= 7) {
//       return "Monthly";
//     }
//     else if(intakeData.length >= 4){
//       let intakeSplitData = []
//       for(let i=0; i<4;i++){
//         intakeSplitData.push(intakeData[i])
//       }
//       return intakeSplitData;
//     }
//      else {
//       return intakeData;
//     }
//   });

//   Handlebars.registerHelper('lengthCheck', function (value) {
//     if(value){
//     if(Object.keys(value).length > 0){
//         return value
//     }
//   }
// });

// Handlebars.registerHelper('isEqual', function(arg1, arg2, options) {
//   return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
// });

// Handlebars.registerHelper('toUpperCase', function (data) {
//   if (typeof (data) == "string") {
//       const updatedData = data.charAt(0).toUpperCase() + data.slice(1);
//       return updatedData.replace(/&/g, 'and').replace(/([a-z])([A-Z])/g, '$1 $2');
//   }
// });

// Handlebars.registerHelper('eachIntakesObject', function(context,options){
//   var output = '';
//   let arrayDate = Object.keys(context);
//   var contextSorted = arrayDate.sort((a,b)=>{
//               return new Date(a.split('-')[1])-new Date(b.split('-')[1]);
//              });
//   for(var i=0, j=contextSorted.length; i<j; i++) {
//       output += options.fn(contextSorted[i]);
//   }
//   return output;
// });

// Handlebars.registerHelper('sortDates', function (context, options) {
//   // Extract the keys from the context object
//   var keys = Object.keys(context);

//   // Sort the keys based on the date
//   keys.sort((a,b)=>{
//     return new Date(a.split('-')[1])-new Date(b.split('-')[1]);
//    });

//   var output = '';

//   for (var i = 0; i < keys.length; i++) {
//     var key = keys[i];
//     output += options.fn({ date: key, count: context[key] });
//   }

//   return output;
// });


// Handlebars.registerHelper('formatDate', (date) => {
//   const parts = date.split('-');  
//   return parts[1];
// });

// Handlebars.registerHelper('isObject', function (value, options) {
//   return typeof value === 'object' && !Array.isArray(value);
// });

// Handlebars.registerHelper('isArray', function (value) {
//   return Array.isArray(value);
// });

// Handlebars.registerHelper('idConversion', (value) => {
//   return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-');
// });


//   // function to create ellipsis if decription goes more than 230 character.
//   function limitDesc() {
//     const cardDesc = $(".course-listing-comp__card .description");
//     cardDesc.each(function () {
//       const maxLength = 230;
//       let content = $(this).text().trim();
//       if (content.length > maxLength) {
//         const lastSpaceIndex = content.lastIndexOf(" ", maxLength);
//         if (lastSpaceIndex !== -1) {
//           content = content.slice(0, lastSpaceIndex);
//         }
//         content += "...";
//       }
//       $(this).text(content);
//     });
//   }
//   // $(document).mouseup(function (e) {
//   //   var dropDownList = $(".dropdown-menu");
//   //   if (!dropDownList.is(e.target) && dropDownList.has(e.target).length === 0) {
//   //     dropDownList.hide();
//   //   }
//   // });

//   //pagination function
//   $(document).on("click keypress",".page_anchor",function(event){ 
//     if (event.type === "keypress" && event.which !== 13) {
//         return; // Skip if keypress is not Enter key
//     }
//     event.preventDefault();
    
//     let activePageNumber;
//     let activeClass = parseInt($(".page_anchor.active").attr("data-page"));
//     const $target = $(event.currentTarget);
//     const totalData = isMobileViewSize ? totalPages * 6 : totalPages * 12; // totalData changes on basis of viewport
//     const pageCount = isMobileViewSize ? 6 : 12;
//     pageNumber = parseInt(event.currentTarget.getAttribute("data-page")); //on click get page number 

//     const headerHeight = $(".header").height()  // get the height of header
//     const scrollOffset = headerHeight; // Adjust this value to control how much more you want to scroll
//     $(".course-listing-comp").get(0).scrollIntoView(); //scroll to first card
//     if(isMobileViewSize){
//     setTimeout(function() {
//         window.scrollBy(0, -scrollOffset);
//       }, 800);
//     }  

//     if(pageNumber <= 0){ //if pageNumber goes to negative or zero than pagenumber become 1
//         pageNumber = 1;
//     }
//     if ($target.hasClass("prev")) {  // action on click of previous button
//         activePageNumber = parseInt(activeClass);
//         pageNumber = activePageNumber - 1;
//     }
//     if ($target.hasClass("next")) {  // action on click of next button
//         activePageNumber = parseInt(activeClass);
//         pageNumber = activePageNumber + 1;
//     }
//         createPagination(pageCount, totalData, 1, pageNumber);
//     if(pageNumber == totalPages){ // action when reached to last page
//         $("#next-btn").addClass("pe-none btn-disabled");
//         $("#next-btn").removeAttr("role");
//         $("#next-btn").removeAttr("tabindex");
//     }
//     else{
//         $("#next-btn").removeClass("pe-none btn-disabled");
//         $("#next-btn").attr("role", "link");
//         $("#next-btn").attr("tabindex", "0");
//     }
//     offsetValue = pageNumber
//     if (offsetValue < 0 || offsetValue === null || typeof offsetValue === "undefined") {
//         offsetValue = 1;
//       }
//       $(".page_anchor").removeClass("active");
//       if (!$(`[data-page="${pageNumber}"]`).hasClass("prev") && !$(`[data-page="${pageNumber}"]`).hasClass("next")) {
//           // Add active class if it's not present
//           if (!$(`[data-page="${pageNumber}"]`).hasClass("active")) {
//             $(`[data-page="${pageNumber}"]`).addClass("active");
//           }
//       }
//       else if($(this).hasClass("prev")){ //on click of previous btn highlight previous page btn
//         $(`[data-page="${activeClass}"]`).prev(".page_anchor").addClass("active");
//       }
//       else if($(this).hasClass("next")){ //on click of next btn highlight next page btn
//         $(`[data-page="${activeClass}"]`).next(".page_anchor").addClass("active");
//       }

//       fetchResults(sortingOrderVal,offsetValue,limit);
// });

// fetchResults(sortingOrderVal, 1, limit);

// function toggleDiv(thisElem) {
//   if (thisElem.hasClass("closed")) {
//     thisElem.addClass("open").removeClass("closed");
//     thisElem.parent().find(".dropdown-menu").show();
//   } else {
//     thisElem.addClass("closed").removeClass("open");
//     thisElem.parent().find(".dropdown-menu").hide();
//   }
// }


// $(document).on("click", "#openDaysDropdownFilters .dropdown .btn", function (e) {
//   var nextSibling = $(this).parent(".dropdown").siblings();
//   nextSibling.find(".dropdown-menu").hide();
//   nextSibling.find(".btn").addClass("closed");
//   toggleDiv($(this));
// });

// function selectfilter($thisSelectedFilter) {
//   const selectedFilterVal = $thisSelectedFilter.val();
//   $thisSelectedFilter
//     .closest(".dropdown")
//     .find(".selectedFilterContainer")
//     .append(
//       `<div class="selectedFilter">${selectedFilterVal}<span class="filter-cancel  icon-cancel" data-value="${selectedFilterVal}"></span></div>`
//     );
// }

// function filterOpenDays(){
//   let selectedCampuses = [];
//       Array.from(document.getElementsByClassName("upcomingOpenDaysFilterCheckbox")).forEach(element => {
//           if(element.checked === true) {
//               selectedCampuses.push(element.value);
//           }
//       })
//       let openDaysData = JSON.parse(sessionStorage.getItem("upcomingOpenDays"));
//       if(selectedCampuses.length > 0) {
//           let filteredOpenDaysData = openDaysData.filter(event => {
//               const campusParts = event.campus.split(','); // Split campus information by commas
//               const firstCampusValue = campusParts[0].trim(); // Get the first value and remove leading/trailing spaces
//               return selectedCampuses.includes(firstCampusValue); // Check if the first campus value is in selected campuses
//           });
//           generateCard(filteredOpenDaysData);
//       } else {
//           generateCard(openDaysData);
//       }
// }

// $(document).on("click", "#openDaysDropdownFilters .form-check-input", function () {
//   if (this.checked) {
//     selectfilter($(this));
//   } else {
//     $(this).closest('.dropdown').find(".selectedFilterContainer");
//     let thisFilterdValue = $(this).data("value");
//     $(this).closest('.dropdown').find(".selectedFilterContainer .selectedFilter .filter-cancel").each((i, e) => {
//       const filterValue = e.dataset.value;
//       if (thisFilterdValue == filterValue) {
//         e.parentNode.remove();
//       }
//     }); 
//   }

//   filterOpenDays();

// });

// $(document).on("click", "#openDaysDropdownFilters .selectedFilter .icon-cancel", function () {
//   const thisFilterdValue = $(this).data("value");
//   const thisSelectedFilter = $(this).parent();
//   $(this).closest('.dropdown').find(".form-check-input").each((i, e) => {
//     const filterValue = e.dataset.value;
//     if (thisFilterdValue == filterValue) {
//       e.checked = false;
//       thisSelectedFilter.remove();
//     }
//   });
//   filterOpenDays();
// });

// /* Anything that gets to the document
// will hide the dropdown */

// $(document).on("click", function (e) {
//   e.stopPropagation();
//       let $dropdowns = $(document.getElementById("openDaysDropdownFilters")).find(".dropdown");
//   if ($dropdowns.has(e.target).length === 0) {
//           $dropdowns.find(".dropdown-menu").hide();
//     $dropdowns.find(".btn").removeClass("open").addClass("closed");
//   }
// });


// /* Clicks within the dropdown won't make
//    it past the dropdown itself */


// // let themeName;

// // function getThemeName() {
// //   if ($("body").hasClass("futuretech-theme")) {
// //     themeName = "futuretech";
// //   } else if ($("body").hasClass("holmesglen-theme")) {
// //     themeName = "holmesglen";
// //   }
// // }

// getThemeName();

// function isCorrectDate(date) {
//   return isFinite(date instanceof Date ? date : new Date(date));
// }

// Handlebars.registerHelper("bookNowBtnUrlHelper", function (bookNowBtnUrl) {
//   if (bookNowBtnUrl) {
//       return bookNowBtnUrl;
//   }else{
//       return "#";
//   }
// });

// // date format function
//   Handlebars.registerHelper("dateFormat", function (getdate) {
//       if(isCorrectDate(getdate)){

//       const date = new Date(getdate);

//       // Define an array to map month numbers to month names
//       const monthNames =  [
//           "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//       ];

//       const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//       const dates = date.getDate();
//       const day = weekday[date.getDay()];
//       const month = monthNames[date.getMonth()];
  
//       return `${day} ${dates} ${month},`;
//   }else{
//       return "";
//   }
//   });



// //time format function
// Handlebars.registerHelper("timeFormat", function (gettime) {
//   if (isCorrectDate(gettime)) {
//     const date = new Date(gettime);
//     const options = {
//       timeZone: 'Australia/Sydney',
//       hour: 'numeric',
//       minute: 'numeric'
//     };
//     const time = date.toLocaleString('en-AU', options).replace(/ /g, "");
//     return time;
//   } else {
//     return "";
//   }
// });


// //time format function
// Handlebars.registerHelper("capmusTrim", function (capmus) {
//   return capmus.split(',')[0];
// });

// function generateCard(resultData) {

//   if (resultData.length > 0) {
//     $ele.removeClass("d-none");
//     $emptyResultContainer.addClass("d-none");
//     $ele.closest(".container__dropdownOpenList").removeClass("d-none");
//     if (!$("body").hasClass("coursepage")) {
//       $ele.closest(".container__full-width").removeClass("d-none");
//     }
    
//   } else {
//     $emptyResultContainer.removeClass("d-none");
//     $ele.addClass("d-none");
//     $ele.closest(".container__dropdownOpenList").addClass("d-none");
//     if (!$("body").hasClass("coursepage")) {
//       $ele.closest(".container__full-width").addClass("d-none");
//     }
//   }
//   const compiledTemplate = Handlebars.compile(resultTemplate);
//   const ourGeneratedHtmls = compiledTemplate({
//     data: resultData
//   });
//   $hitsContainerOpenDays.html(ourGeneratedHtmls);
// }


// $(document).on("click", '.book, .open-days-info .page-link', function (e) {
//   e.preventDefault();
//   window.adobeDataLayer?.push({
//       event: "cmp:customClick",
//       data: {
//       linkName: $(e.currentTarget).text().trim(),
//       linkPageName: $(e.currentTarget).attr("href"),
//       },
//   });
//   // _satellite.track("generic-click");
//    window.location.href = $(e.currentTarget).attr("href");
//   });
//   // fetchResultsOpenDays();
// }, selectors);
