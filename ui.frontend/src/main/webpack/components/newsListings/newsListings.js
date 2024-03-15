// import { componentCtrl ,deviceType} from "../../scripts";
// import $ from "jquery";
// import Select2 from 'select2';
// import Handlebars from "handlebars";
// import flatpickr from "flatpickr"
// import { createPagination } from "../common/pagination";
// import { convertDateYYYYMMDD } from "../common/convertDate";
// import { filteringNewsFacetsData } from "./filteringNewsFacets";
// const selectors = {
//     self: '[data-cmp-is="newsListingComp"]'
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element),
//         $courseParentCheckboxList = $ele.find("input[name=newsListingCourseCheckbox]"),
//         $subCourseCheckboxList = $ele.find("input[name=newsListingSubCourseSubCheckbox]"),
//         $sortNewsListingDropdown = $ele.find("select[name=sortNewsListing]"),
//         $checkboxList = $ele.find(".parent-checkbox"),
//         $subCheckboxList = $ele.find(".child-checkbox"),
//         $hitsContainer = $ele.find("#newsListingResultsContainer"),
//         $paginationContainer = $ele.find("#newsListingPaginationContainer"),
//         $filterHeader=$ele.find(".filter-header__icon"),
//         $clearFilters = $ele.find(".clearFilters"),
//         $newsFilterContainer = $ele.find("#searchNewsResultFilterContainer"),
//         newsFilterResultsHandleBarTemplate = $ele.find("#newsSearchFilterTemplate").html(),
//         $clearDateFilter = $ele.find(".clearDate"),
//         rawResultsHandleBarTemplate = $ele.find("#resultsCardTemplate").html();
//         let isMobileViewSize = deviceType() === 'mobile';
//         let limit = isMobileViewSize ? 6 : 12;
//         let offsetValue = 1;
//         let sortingOrderVal;
//         let totalPages;
//         let toDate;
//         let fromDate;
//         let pageNumber;
//         let debounceTimeout;
//         let themeName;
//         let obj = {};
//         let isNewsFilterHtmlCreated = false;
//         sessionStorage.removeItem("object");
//         let checkedData ;
//         let filterChecked = "false";
//         let clearFilter="";

//         function getThemeName(){
//             if($("body").hasClass("futuretech-theme")){
//             themeName = "FUT";
//             }else if($("body").hasClass("holmesglen-theme")){
//                 themeName = "holmesglen";
//             }
//         }
//         getThemeName();
//         // to check viewport of device
//         function isMobileView() {
//             isMobileViewSize = (deviceType() === 'tablet' || deviceType() === 'mobile');
//         }

//         $().ready(function () {
//             const floatElement = document.querySelector(".container__full-width");
//             const courseElement = document.querySelector(".news-listing-comp__filter").closest('.container__full-width');
//             if (floatElement && courseElement) {
//                 floatElement.style.overflow = 'visible';
//                 courseElement.style.overflow = 'visible';
//             }

//             if(isMobileViewSize){
//                 $(".filter-header__icon").addClass("icon-nav-arrow-down").removeClass("icon-nav-arrow-up");
//                 $(".facets").addClass("d-none"); 
//             }
//             else {
//                 $(".filter-header__icon").addClass("icon-nav-arrow-up").removeClass("icon-nav-arrow-down");
//                 $(".facets").removeClass("d-none"); 
//             }
//         });
        
        
//         $filterHeader.on("click", function (event) {  
//             if(!isMobileViewSize) {
//                 if (
//                     $(".facets-container__body").hasClass("d-none")) {
//                         $(".facets-container__body").removeClass("d-none");
//                         $(".filter-header").addClass("open");
//                         $(".filter-header").removeClass("closed");
//                         $(".filter-header").attr("aria-expanded", "true");
//                         $(".filter-header__icon").addClass("icon-nav-arrow-up").removeClass("icon-nav-arrow-down");
//                         $(".facets-container__header").addClass("open");
//                         $(".facets-container__header").removeClass("closed");
//                         $(".facets-container__header").attr("aria-expanded", "true");
//                         $(".courselist-header__icon").addClass("icon-nav-arrow-up").removeClass("icon-nav-arrow-down");
//                     } else {
//                         $(".facets-container__body").addClass("d-none");
//                         $(".filter-header").addClass("closed");
//                         $(".filter-header").removeClass("open");
//                         $(".filter-header").attr("aria-expanded", "false");
//                         $(".filter-header__icon").removeClass("icon-nav-arrow-up").addClass("icon-nav-arrow-down");
//                         $(".facets-container__header").addClass("closed");
//                         $(".facets-container__header").removeClass("open");
//                         $(".facets-container__header").attr("aria-expanded", "false");
//                         $(".courselist-header__icon").removeClass("icon-nav-arrow-up").addClass("icon-nav-arrow-down");
//                     }
//             }        

//             if(isMobileViewSize){
//                 const check = document.querySelector(".form-check-input");
//                 if ($(".facets").hasClass("d-none")) {
//                     $(".facets").removeClass("d-none");
//                      $(".filter-header").addClass("closed");
//                      $(".filter-header").removeClass("open");
//                      $(".filter-header").attr("aria-expanded", "false");
//                     $(".facets-container__body").addClass("d-none");
//                      $(".filter-header__icon").addClass("icon-nav-arrow-up");
//                      $(".filter-header__icon").removeClass("icon-nav-arrow-down");
//                 $(".courselist-header__icon").removeClass("icon-nav-arrow-up").addClass("icon-nav-arrow-down");

//                   } else {
//                     $(".facets").addClass("d-none");
//                      $(".filter-header").addClass("open");
//                      $(".filter-header").removeClass("closed");
//                      $(".filter-header").attr("aria-expanded", "true");
//                     $(".facets-container__body").removeClass("d-none");
//                    $(".filter-header__icon").removeClass("icon-nav-arrow-up").addClass("icon-nav-arrow-down");
//                 $(".courselist-header__icon").addClass("icon-nav-arrow-up").removeClass("icon-nav-arrow-down");
//                   }
                 
//                   if (check.checked) {
//                     $(".facets-container__body").removeClass("d-none"); 
//                     $(".facets-container__header").addClass("open");
//                     $(".facets-container__header").removeClass("closed");
//                     $(".facets-container__header").attr("aria-expanded", "true");
//                     $(".courselist-header__icon").addClass("icon-nav-arrow-up").removeClass("icon-nav-arrow-down");
                    
//                     if($(".filter-header").hasClass("open")){
//                       $(".filter-header").removeClass("open").addClass("closed");
//                       $(".filter-header").attr("aria-expanded", "false");
//                       $(".filter-header__icon").removeClass("icon-nav-arrow-up").addClass("icon-nav-arrow-down");
//                     }
//                     else {
//                       $(".filter-header").removeClass("closed").addClass("open");
//                       $(".filter-header").attr("aria-expanded", "true");
//                       $(".filter-header__icon").removeClass("icon-nav-arrow-down").addClass("icon-nav-arrow-up");
//                     }
//                 }
//               }
//         });

//         $filterHeader.keypress(function (e) {
//             var key = e.which;
//             if(key == 13)  // the enter key code
//              {
//                 $filterHeader.click();
//                return false;  
//              }
//            });
        

//         //courselist header
//         $(document).on("click keypress", ".facets-container__header", function (e) {

//             if (e.type === "keypress" && e.which !== 13) {
//                 return; // Skip if keypress is not Enter key
//             }

//             if (
//             $(".facets-container__body").hasClass("d-none")) {
//                 $(".facets-container__body").removeClass("d-none");
//                 $(".facets-container__header").addClass("open");
//                 $(".facets-container__header").removeClass("closed");
//                 $(".facets-container__header").attr("aria-expanded", "true");
//                 $(".courselist-header__icon").addClass("icon-nav-arrow-up").removeClass("icon-nav-arrow-down");
//               } else {
//                 $(".facets-container__body").addClass("d-none"); 
//                 $(".facets-container__header").addClass("closed");
//                 $(".facets-container__header").removeClass("open");
//                 $(".facets-container__header").attr("aria-expanded", "false");
//                 $(".courselist-header__icon").removeClass("icon-nav-arrow-up").addClass("icon-nav-arrow-down");
//               }
//         });
          

//         // Update the limit when the window is resized
//         let prevWidth = $(window).width();
//         $(window).on("resize" ,function() {
//             const newWidth = $(window).width();
//             if (newWidth !== prevWidth ) {   
//                 prevWidth = newWidth; 
//             clearTimeout(debounceTimeout);

//             // Set a new timeout to execute the event handler after 200 milliseconds of inactivity
//             debounceTimeout = setTimeout(function() {
//             isMobileView()
//            // make dropdown in mobile/tablet viewport 
//             if(isMobileViewSize){
//                 limit = 6
//                 location.reload(true);
//                 // $(".sort-by").addClass("d-none"); // Hide the "Sort By" div
//                 $(".facets").addClass("d-none"); 
//                 $(".filter-header").addClass("closed");
//                 $(".filter-header").removeClass("open"); 
//                 $(".filter-header__icon").addClass("icon-nav-arrow-down");
//             }
//             else{
//                 limit = 12;
//                 location.reload(true);
//                 // $(".sort-by").removeClass("d-none");
//                     $(".facets").removeClass("d-none");
//                     $(".filter-header").removeClass("closed");
//                     $(".filter-header__icon").removeClass("icon-nav-arrow-down");
//             }
//             fetchResults(sortingOrderVal, offsetValue, limit);
//         },400);
//         }
//         });    

//     // News Listing Start Date
//     let startNewsListingDatePicker = flatpickr("#fromDate", {
//         dateFormat: "d M Y",
//         locale: {
//             firstDayOfWeek: 1
//         },
//         maxDate: "today"
//     });
//     // News Listing End Date
//     let endNewsListingDatePicker = flatpickr("#toDate", {
//         dateFormat: "d M Y",
//         locale: {
//             firstDayOfWeek: 1
//         },
//         maxDate: "today"
//     });
//     function fromDateFunction(){
//         startNewsListingDatePicker.config.onChange.push(function(element) {
//             fromDate = element[0];
//             fromDate = convertDateYYYYMMDD(startNewsListingDatePicker.input.value);
//             if (fromDate) {
//                 if($("body").hasClass("futuretech-theme")){
//                     $clearFilters.css({"border-color":"var(--greenishyellow)","color":"var(--greenishyellow)"});
//                     }else {
//                       $clearFilters.css({"border-color":"var(--primary)","color":"var(--primary)"});
//                     }
//                 $clearFilters.removeClass("pe-none");
//                 const minToDate = new Date(fromDate);
//                 minToDate.setDate(minToDate.getDate() + 1);
//                 endNewsListingDatePicker.set("minDate", minToDate);
//             }
//             if (!toDate =="" && toDate < fromDate) {
//                 endNewsListingDatePicker.clear(); // Clear the datepicker selection
//                 $("#infoMssgFromDate").removeClass("d-none");
//                 $("#infoMssgFromDate").addClass("d-block");
//             }
//             else{
//                 $("#infoMssgFromDate").addClass("d-none");
//                 $("#infoMssgToDate").addClass("d-none");
//             }
//             element.length > 0 ?fetchResults(sortingOrderVal, 1, limit):"";
//         });
//     }
    
//     function toDateFunction(){
//         endNewsListingDatePicker.config.onChange.push(function(element) {
//             toDate = element[0];
//             toDate = convertDateYYYYMMDD(endNewsListingDatePicker.input.value);
//             if (toDate) {
//                 if($("body").hasClass("futuretech-theme")){
//                     $clearFilters.css({"border-color":"var(--greenishyellow)","color":"var(--greenishyellow)"});
//                     }else {
//                       $clearFilters.css({"border-color":"var(--primary)","color":"var(--primary)"});
//                     }
//                 $clearFilters.removeClass("pe-none");
//                 const maxFromDate = new Date(toDate);
//                 maxFromDate.setDate(maxFromDate.getDate() - 1);
//                 startNewsListingDatePicker.set("maxDate", maxFromDate);
//             }
//             if (!fromDate =="" && fromDate > toDate) {
//                 startNewsListingDatePicker.clear(); // Clear the datepicker selection
//                 $("#infoMssgToDate").removeClass("d-none");
//                 $("#infoMssgToDate").addClass("d-block");
//             }
//             else{
//                 $("#infoMssgToDate").addClass("d-none");
//                 $("#infoMssgFromDate").addClass("d-none");
//             }
//             element.length > 0 ?fetchResults(sortingOrderVal, 1, limit):"";
//         });
//     }

//     fromDateFunction();
//     toDateFunction();

//     new Select2($sortNewsListingDropdown, {
//         minimumResultsForSearch: -1
//     });
//     $('.sort-by .select2-container .select2-selection--single').attr('aria-labelledby', "Descending");
//     $sortNewsListingDropdown.on('change',function(){
//         sortingOrderVal = $sortNewsListingDropdown[0].value;
//         let sortAriaLabel = sortingOrderVal === "asc" ? "Ascending" : sortingOrderVal === "desc" ? "Descending" : "";
//         // Set aria-label attribute
//         $('.sort-by .select2-container .select2-selection--single').attr('aria-labelledby', sortAriaLabel);
//         fetchResults(sortingOrderVal, 1, limit);
//     })

//     $checkboxList.on("change", (e)=> {
//         const currentTarget = e.currentTarget;
//         const subCheckBoxes = currentTarget.closest(".checkbox-parent-container").querySelectorAll(".child-checkbox");
//         currentTarget.classList.remove("selectedPartial");
//         if(currentTarget.checked === true) {
//             currentTarget.closest(".checkbox-parent-container").classList.add("selected");
//             if(subCheckBoxes.length > 0) {
//                 subCheckBoxes.forEach(element => {
//                     element.checked = true
//                 })
//             }
//         } else {
//             currentTarget.closest(".checkbox-parent-container").classList.remove("selected");
//             if(subCheckBoxes.length > 0) {
//                 subCheckBoxes.forEach(element => {
//                     element.checked = false
//                 })
//             }
//         }
//         fetchResults(sortingOrderVal, 1, limit);
//     });

//     $subCheckboxList.on("change", (e)=> {
//         let partialSelected = false;
//         const currentTarget = e.currentTarget;
//         const subChildOfCourseList = currentTarget.closest(".checkbox-parent-container").querySelectorAll(".child-checkbox");
//         subChildOfCourseList.forEach(element => {
//             if(element.checked == false) {
//                 partialSelected = true;
//             }
//         });
//         if(partialSelected == true) {
//             currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").checked = false;
//             if(currentTarget.closest(".checkbox-parent-container").querySelectorAll(".child-checkbox:checked").length > 0) {
//                 currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.add("selectedPartial")
//             } else {
//                 currentTarget.closest(".checkbox-parent-container").classList.remove("selected");
//                 currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.remove("selectedPartial")
//             }
//         } else {
//             currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").checked = true;
//             currentTarget.closest(".checkbox-parent-container").querySelector(".parent-checkbox").classList.remove("selectedPartial");
//         }
//         fetchResults(sortingOrderVal, 1, limit);
//     });

//     //Label conversion ampersand to and
//     Handlebars.registerHelper('ampersandToAnd', function (data) {
//     if (typeof (data) == "string") {
//             return data.replace(/&/g, 'and');
//         }
//     });

//     Handlebars.registerHelper("dateTransformation", function (date) {
//         const m = ["January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"];
//         const newMonth = [];
//         m.forEach(e => {
//             newMonth.push(e.substring(0, 3));
//         });
//         var modifiedDate = new Date(date).getDate() + ' ' + newMonth[new Date(date).getMonth()] + ' ' + new Date(date).getFullYear();
//         return modifiedDate;
//     });

//     function fetchResults(sortingOrderVal, offsetValue, limit) {
//         let obj = {};
//         const selectedCourses = filteringNewsFacetsData();
//         obj = JSON.parse(sessionStorage.getItem("object"));
//         $(".page-loader").show();
//         $("#loading-success").empty();
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ 
//                 sortBy: sortingOrderVal, //default value 'desc'
//                 pageNo: offsetValue,
//                 limit: limit,
//                 // courseAreas : selectedCourses,
//                 fromDate: fromDate,
//                 toDate: toDate,
//                 theme: themeName,
//                 ...obj
//             })
//         };
//         fetch("/bin/newsList",requestOptions)
//         .then((response) => response.json())
//         .then((data) => {
//             $(".page-loader").hide();
//             $("#loading-success").html("News listing page successfully loaded");
//             // if (!isNewsFilterHtmlCreated) {
//                 // isNewsFilterHtmlCreated = true;
//                 filterChecked == "true"?previousFilterCheck():"";
//                 createFilterHtml(data.courseAreas);
//                 filterCheck();
//             // }
//             document.getElementById("errorNewsResultsContainer").classList.add("d-none");
//             if(data.newsResults.length > 0) {
//                 document.getElementById("newsResultsContainer").classList.remove("d-none");
//                 document.getElementById("newsResultsContainer").classList.add("d-block");
//                 document.getElementById("emptyNewsResultsContainer").classList.remove("d-block");
//                 document.getElementById("emptyNewsResultsContainer").classList.add("d-none");
//                 if(!isMobileViewSize) {
//                     document.getElementById("searchNewsResultFilterContainer").classList.remove("d-none");
//                 }
//                 document.querySelector(".filter-header__text").classList.remove("d-none");
//                 document.querySelector(".filter-header__icon").classList.remove("d-none");
//                 document.querySelector(".sort-by").classList.remove("d-none");
//                 $(".filter-header").css({ "border-bottom":"0.063rem solid hsla(0,0%,55%,.3)" });
//                 createResultCardsHtml(data);
//                 if(offsetValue == 1){
//                     totalPages = Math.ceil(data.resultCount / data.newsResults.length);
//                     createPagination(data.newsResults.length, data.resultCount, 1, 1);
//                     $("#prev-btn").addClass("pe-none btn-disabled");
//                     $("#prev-btn").removeAttr("role");
//                     $("#prev-btn").removeAttr("tabindex");
//                 }
//                 else{
//                     $("#prev-btn").removeClass("pe-none btn-disabled");
//                     $("#prev-btn").attr("role", "link");
//                     $("#prev-btn").attr("tabindex", "0");
//                 }
//             } else {
//                 document.getElementById("newsResultsContainer").classList.remove("d-block");
//                 document.getElementById("newsResultsContainer").classList.add("d-none");
//                 document.getElementById("emptyNewsResultsContainer").classList.remove("d-none");
//                 document.getElementById("emptyNewsResultsContainer").classList.add("d-block");
//                 document.getElementById("searchNewsResultFilterContainer").classList.add("d-none");
//                 document.querySelector(".filter-header__text").classList.add("d-none");
//                 document.querySelector(".sort-by").classList.add("d-none");
//                 document.querySelector(".filter-header__icon").classList.add("d-none");
//                 $(".filter-header").css({"border-bottom":"unset" });
                

//             }
//         })
//         .catch((error) => {
//             $(".page-loader").hide();
//             document.getElementById("errorNewsResultsContainer").classList.remove("d-none");
//             $("#loading-success").html("News listing page successfully loaded");
//           });
//     }
//     function checkIfFilterSelected(){
//         const openDaysCheckedInputs = $(".facets-container__body input");
//         const toDate = $("#toDate").val();
//         const fromDate = $("#fromDate").val();
//           openDaysCheckedInputs.each((i,ele)=>{
//             if (ele.checked){
//               checkedData = "true"
//               return false;
//             }
//             else{
//                 checkedData = "false"
//               }
//         })
//         if(toDate || fromDate){
//             checkedData = "true"
//         }
//       }

//     $clearFilters.on("click", function(){
//         checkIfFilterSelected();
//         if(checkedData == "true"){
//           filterChecked = "false"
//           clearFilter = "clear";
//           sessionStorage.removeItem("object");
//           if(obj){
//             for (const key in obj) {
//                 delete obj[key];
//             }
//           }
//           $(this).css({"border-color":"var(--gray-500)","color":"var(--gray-500)"})
//           $(this).addClass("pe-none");
//           // Example usage: Clear the input
//         //   clearDateInput();
//           $("#fromDate").val("");
//         $("#toDate").val("");
//         fromDate = ""; 
//         toDate = "";
//         startNewsListingDatePicker.clear();
//         endNewsListingDatePicker.clear();
//         endNewsListingDatePicker = flatpickr("#toDate", {
//             dateFormat: "d M Y",
//             locale: {
//                 firstDayOfWeek: 1
//             },
//             maxDate: "today"
//         });
//         startNewsListingDatePicker =  flatpickr("#fromDate", {
//             dateFormat: "d M Y",
//             locale: {
//                 firstDayOfWeek: 1
//             },
//             maxDate: "today"
//         });
//         fromDateFunction();
//     toDateFunction();
//           fetchResults(sortingOrderVal, 1, limit);
//         }
//     });

//     $clearFilters.keypress(function (e) {
//         var key = e.which;
//         if(key == 13)  // the enter key code
//          {
//             $clearFilters.click();
//            return false;  
//          }
//        });

    
//     const checkedInputs = [];
//     function previousFilterCheck(){
//         checkedInputs.length = 0;
//         const openDaysInputs = $(".facets-container__body input");
//         openDaysInputs.each((i,ele)=>{
//             if (ele.checked){
//                 checkedInputs.push(ele.id)
//             }
//         })
//     }
//     function filterCheck(){
//         if(filterChecked == "true"){
//            const allInput = $(".facets-container__body input");
//            allInput.each((currIndex,currEle)=>{
//             $(checkedInputs).each((prevIndex,prevEle)=>{
//                 if(currEle.id === prevEle){
//                     $(currEle).prop("checked", true);
//                     $(`#${currEle.id}`).closest(".news-listing-comp__course-sub-filter").css({display:"block"});
//               const childCheckboxValue = $(`#${currEle.id}`).closest(".checkbox-parent-container").find(".checkbox-child-container");
//               if(childCheckboxValue.length > 0){
//                 childCheckboxValue.css({display:"block"});
//               }
//                   }
                 
//             })
//            })
//     }
//     }
//     function filterOnChange(){
//     $(document).on('change','.news-listing-comp__course-filter .form-check-input' ,function () {
//         const checkboxValue = $(this).val();
//         let keyName = "courseAreas";
//         const childValues = [];
//         // keyName = keyName.replace(/\s+/g, '').replace(/(^|-)(\w)/g, (match, p1, p2) => p2.toLowerCase());

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
//                 const childValuesTest = [];
//                     childCheckbox.each(function () {
//                         childValuesTest.push($(this).val());
//                     });
//                 if (childValuesTest.length > 0 && this.classList.contains("hub")) {
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
//         for (const key in obj) {
//             if (Array.isArray(obj[key])) {
//                 const uniqueValues = [...new Set(obj[key])];
//                 obj[key] = uniqueValues;
//             }
//         }
//         sessionStorage.setItem("object", JSON.stringify(obj))
//         checkIfFilterSelected()
//         if(checkedData=="true"){
//             if($("body").hasClass("futuretech-theme")){
//             $clearFilters.css({"border-color":"var(--greenishyellow)","color":"var(--greenishyellow)"});
//             }else {
//               $clearFilters.css({"border-color":"var(--primary)","color":"var(--primary)"});
//             }
//           $clearFilters.removeClass("pe-none");
//         }
//         else if(checkedData=="false"){
//             $clearFilters.css({"border-color":"var(--gray-500)","color":"var(--gray-500)"});
//             $clearFilters.addClass("pe-none");
//           }
      
//         filterChecked = "true";
//           clearFilter="";

//         fetchResults(sortingOrderVal, 1, limit);
//     });
//     }
//     filterOnChange();
//     // function to create cards 
//     function createFilterHtml(data) {
//             const compiledTemplate = Handlebars.compile(newsFilterResultsHandleBarTemplate);
//             // const parsedData = JSON.parse(data)
//             const ourGeneratedHtml = compiledTemplate({ data });
//             $newsFilterContainer.html(ourGeneratedHtml);
//     }
//     function createResultCardsHtml(data) {
//         const compiledTemplate = Handlebars.compile(rawResultsHandleBarTemplate);
//         const ourGeneratedHtml = compiledTemplate(data);
//         $hitsContainer.html(ourGeneratedHtml);
//     }

//     Handlebars.registerHelper('idConversion', (value) => {
//         return value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//       });
//     fetchResults(sortingOrderVal, 1, limit);
//     //function triggered on click of pagination btn
//     $(document).on("click keypress",".page_anchor",function(event){ 
//         if (event.type === "keypress" && event.which !== 13) {
//             return; // Skip if keypress is not Enter key
//         }
//         event.preventDefault();
        
//         let activePageNumber;
//         let activeClass = parseInt($(".page_anchor.active").attr("data-page"));
//         const $target = $(event.currentTarget);
//         const totalData = isMobileViewSize ? totalPages * 6 : totalPages * 12; // totalData changes on basis of viewport
//         const pageCount = isMobileViewSize ? 6 : 12;
//         pageNumber = parseInt(event.currentTarget.getAttribute("data-page")); //on click get page number 

//         const headerHeight = $(".header").height()  // get the height of header
//         const scrollOffset = headerHeight; // Adjust this value to control how much more you want to scroll
//         $(".news-listing-comp").get(0).scrollIntoView(); //scroll to first card
//         // $('html, body').animate({
//         //     scrollTop: $(".filter-header").offset().top - 83
//         // }, 0);
//         if(isMobileViewSize){
//         setTimeout(function() {
//             window.scrollBy(0, -scrollOffset);
//           }, 800);
//         }  
  
//         if(pageNumber <= 0){ //if pageNumber goes to negative or zero than pagenumber become 1
//             pageNumber = 1;
//         }
//         if ($target.hasClass("prev")) {  // action on click of previous button
//             activePageNumber = parseInt(activeClass);
//             pageNumber = activePageNumber - 1;
//         }
//         if ($target.hasClass("next")) {  // action on click of next button
//             activePageNumber = parseInt(activeClass);
//             pageNumber = activePageNumber + 1;
//         }
//             createPagination(pageCount, totalData, 1, pageNumber);
//         if(pageNumber == totalPages){ // action when reached to last page
//             $("#next-btn").addClass("pe-none btn-disabled");
//             $("#next-btn").removeAttr("role");
//             $("#next-btn").removeAttr("tabindex");
//         }
//         else{
//             $("#next-btn").removeClass("pe-none btn-disabled");
//             $("#next-btn").attr("role", "link");
//             $("#next-btn").attr("tabindex", "0");
//         }
//         offsetValue = pageNumber;
//         if (offsetValue < 0 || offsetValue === null || typeof offsetValue === "undefined") {
//             offsetValue = 1;
//           }
//           $(".page_anchor").removeClass("active");
//           if (!$(`[data-page="${pageNumber}"]`).hasClass("prev") && !$(`[data-page="${pageNumber}"]`).hasClass("next")) {
//               // Add active class if it's not present
//               if (!$(`[data-page="${pageNumber}"]`).hasClass("active")) {
//                 $(`[data-page="${pageNumber}"]`).addClass("active");
//               }
//           }
//           else if($(this).hasClass("prev")){ //on click of previous btn highlight previous page btn
//             $(`[data-page="${activeClass}"]`).prev(".page_anchor").addClass("active");
//           }
//           else if($(this).hasClass("next")){ //on click of next btn highlight next page btn
//             $(`[data-page="${activeClass}"]`).next(".page_anchor").addClass("active");
//           }

//           fetchResults(sortingOrderVal,offsetValue,limit);
//     });

// }, selectors);
