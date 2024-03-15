// import {
//     componentCtrl,
//     RegexTypes,
//     Config,
//     debounce,
//     queryParams
// } from "../../scripts";
// import $ from 'jquery';
// import Select2 from 'select2';


// const selectors = {
//     self: '.find-course-search',
// };

// const urlParams = new URLSearchParams(window.location.search);
// const searchKeyword = urlParams.get('searchKeyword');
// const campusLocation = urlParams.get('campusLocation');
// const courseType = urlParams.get('courseType');

// componentCtrl((prop) => {
//     const $ele = $(prop.element);
//     const $searchInput = $ele.find('.searchCourseInput');
//     const $searchBtn = $ele.find('.button__search-course > button');
//     const $errorMessage = $ele.find('.search_error_msg');
//     // const $campusSelect = $ele.find('.find-course-search-comp__campusLocation .campusLocation');
//     const $coursesSelect = $ele.find('.find-course-search-comp__courseType .courseType');
//     const $autoSugestionList = $ele.find(".find-course-search-comp__autosuggestions");
//     const $findAcourseSumbitForm = $ele.find('#findAcourseSumbitForm');
//     const findCourseSearchBtn = "findCourseSearchBtn";
//     const searchPageUrl = $('.header button.btn[type="submit"][data-searchpageurl]').attr('data-searchpageurl');
//     const resultPageUrl = $ele.find('.submit-btn').attr('data-resultPageUrl') ? $ele.find('.submit-btn').attr('data-resultPageUrl') : "";
//     const searchParamsPredict = {
//         type: 'predict',
//         searchPageUrl: searchPageUrl + '/courses'
//     };
//     let searchQuery = "Courses";
//     const isInternational = $ele.find('.submit-btn').attr('data-international') ? $ele.find('.submit-btn').attr('data-international') : "false";
//     const isCoursePage = "true";
    
//     function predictiveSearch() {
//         const url = '/bin/searchResults'
//         const predictiveSearchUrl = $findAcourseSumbitForm.find("input[name=searchResultUrl]").val();

//         $searchInput.keyup(async function () {

//             let input = $searchInput.val();
//             if (input.length > 3) {

//                 const requestData = {
//                     q: input,
//                     searchType: "predict",
//                     searchPath: predictiveSearchUrl,
//                     isInternational:isInternational
//                 };

//                 // Send the POST request
//                 await fetch(url, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(requestData) // Convert the object to a JSON string and use it as the request body
//                 })
//                     .then((response) => response.json())
//                     .then((data) => {
//                         //-------------------check if stringify or not make logic for that -----------------------//
//                         let result = data;
//                         displayPredict(result);
//                         if (!result.length) {
//                             $autoSugestionList.html("");
//                         }

//                         function displayPredict(result) {
//                             result = Array.from(new Set(result));
//                             const content = result.map((list) => {
//                                 return `<li>${list}</li>`;
//                             })
//                             $autoSugestionList.html(`<ul>${content.join('')}</ul>`)
//                         }
//                     })
//                     .catch((error) => {
//                         $(".page-loader").hide();
//                         $("#loading-success").html("Page successfully loaded");
//                     });

//             }else{
//                 $autoSugestionList.html("");
//               }
//             });
          
//             $(document).on("click", ".find-course-search-comp__searchInput .find-course-search-comp__autosuggestions li", function (event) {
//               $searchInput.val($(this).html().replace(/&amp;/g, '&'));
//               $autoSugestionList.html("");
//             });

//         $(document).on("click", function (e) {
//             e.stopPropagation();
//             if ($findAcourseSumbitForm.find(".find-course-search-comp__searchInput").has(e.target).length === 0) {
//                 $autoSugestionList.html("");
//             }
//         });

//     }
//     predictiveSearch();
    

//     function moveUp() {
//         if ($autoSugestionList.find('.selected').prev("li").length > 0) {
//             $autoSugestionList.find('.selected')
//                 .removeClass("selected")
//                 .prev("li")
//                 .addClass("selected")
//         }
//     }
//     function moveDown() {
//         if ($autoSugestionList.find(".selected").next('li').length > 0) {
//             $autoSugestionList.find('.selected')
//                 .removeClass("selected")
//                 .next("li")
//                 .addClass("selected");
//         }
//         else {
//             $autoSugestionList.find('.selected').removeClass("selected");
//             $autoSugestionList.find("li").first().addClass("selected");
//         }
//     }
//     $searchInput.on('keyup', debounce(function (e) {
//         switch (e.keyCode) {
//             case 38:
//                 moveUp();
//                 break;
//             case 40:
//                 moveDown();
//                 break;
//         }
//     }));

//     window.addEventListener('load', (e) => {
//         $searchInput.val(searchKeyword || '');
//         // $campusSelect.val(campusLocation || 'All');
//        // $coursesSelect.val(courseType || 'All course types');

//         // new Select2($campusSelect, {
//         //     minimumResultsForSearch: -1
//         // });

//         // new Select2($coursesSelect, {
//             // minimumResultsForSearch: -1
//         // });
//     });

//     window.addEventListener('beforeunload', () => {
//     //     $campusSelect.get(0).selectedIndex = 0;
//         return true;
//     });

//     $findAcourseSumbitForm.on('submit', (e) => {
//         const data = new FormData(e.target);
//         const searchKeyword = data.get('searchKeyword');
//         const campusLocation = data.get('campusLocation');
//         const courseType = data.get('courseType');
//         const $inputSearchValue = $findAcourseSumbitForm.find(".searchCourseInput").val()?$findAcourseSumbitForm.find(".searchCourseInput").val():"";

//         window.adobeDataLayer?.push({
//                 "destinationLink": e.target.action || '', 
//                 "searchTerm": searchKeyword || '',
//                 "searchFilter": `${campusLocation || ''} | ${courseType || ''}`,
//                 "dc:title": "Find Course Search Button",
//                 "parentId": Object.keys(window.adobeDataLayer?.getState()?.page || {})[0]
//             });
//         window.adobeDataLayer.push({
//             "event": "cmp:customClick",
//             "eventInfo": {
//                 "path": findCourseSearchBtn
//             }
//         });

//         const obj = {};
//         const keyName = "campus";
//         if (!obj[keyName]) {
//             obj[keyName] = []; // Create a new array if key doesn't exist
//         }
//         obj[keyName].push(campusLocation)
//         sessionStorage.setItem("courseObject",JSON.stringify(obj))
//         e.preventDefault();
//         window.location.href = `${resultPageUrl}?q=${$inputSearchValue}&searchFilter=${searchQuery}&isInternational=${isInternational}&isCoursePage=${isCoursePage}`;
    
//     });

// }, selectors);

