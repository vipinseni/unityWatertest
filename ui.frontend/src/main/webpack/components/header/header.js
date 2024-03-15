// import { componentCtrl, deviceType } from "../../scripts";
// import $ from "jquery";
// const selectors = {
//   self: ".header-comp",
// };
// componentCtrl((prop) => {
//   const $ele = $(prop.element);
//   const $body = $("body");
//   const suffix = "_container";
//   const $loginButtons = $(".header-comp-topbar-dropdown > .cmp-button");
//   const $searchButtons = $(
//     ".header-comp-bottombar-dropdown > .cmp-button, .header-comp-toggle-wrapper-cmp-button.btn-mob-search"
//   );
//   const $callButton = $(".header-comp-topbar-callCta > a.cmp-button");
//   const $toggler = $("#header-nav-toggle");
//   const $toggleButtons = $ele.find(".header__flyout-button > .cmp-button");
//   const $activeContainer = $ele.find(".header__flyout-container");
//   const $quickLinks = $(".header-comp-topbar .cmp-list__item-link");
//   const $formCheck  = $ele.find(".header-comp-bottombar__search-form-container-lookingfor .form-check");     
//   const $inputSearchContainer = $ele.find(".input-search-containter");
//   const $searchBoxContainer = $ele.find(".header-comp-bottombar__search-form-container");
//   let themeName;

//   let searchQuery = "All";

//   function getThemeName() {
//     if ($("body").hasClass("futuretech-theme")) {
//         themeName = "futuretech";
//     } else if ($("body").hasClass("holmesglen-theme")) {
//         themeName = "holmesglen";
//     }
// }
// getThemeName();

//    function predictSearch(){
//       const searchInput =  $inputSearchContainer.find("#search-input");
//       const predictiveResultBox = $searchBoxContainer.find("#predictive-result");
//       const pageUrl = window.location.pathname.replace(".html", "");
//       const url = '/bin/searchResults'
//       searchInput.keyup(async function(){
//         let input = searchInput.val();
//         if(input.length>3){
//         const requestData = {
//             q: input,
//             searchType:"predict",
//             searchPath: `/content/holmesglen/${themeName}/au/en/${
//               searchQuery.toLowerCase() == "courses" ? "explore-courses"
//             : searchQuery.toLowerCase() == "news" ? "about-us/news"
//             : searchQuery.toLowerCase().includes("business") ? "get-business-support"
//             : searchQuery.toLowerCase().includes("student") ? "current-students"
//             : ""}`
//         };
//         // Send the POST request
//         await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(requestData) // Convert the object to a JSON string and use it as the request body
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 //-------------------check if stringify or not make logic for that -----------------------//
//                 let result = data;
//                 displayPredict(result);
//                 if(!result.length){
//                   predictiveResultBox.html("");
//                 }
//               function displayPredict(result){
//                 result = Array.from(new Set(result));
//                 const content = result.map((list)=>{
//                   return `<li tabindex="0" aria-label="${list}">${list}</li>`;
//                 })
//                 predictiveResultBox.html(`<ul>${content.join('')}</ul>`)
//               }
//             })
//             .catch((error) => {
//                 $(".page-loader").hide();
//                 $("#loading-success").html("Course listing page successfully loaded");
//             });
//           }else{
//             predictiveResultBox.html("");
//           }
//           });
//           $(document).on("click keypress", ".header-comp-bottombar__search-form-container #predictive-result li", function (event) {
//             if (event.type === "keypress" && event.which !== 13) {
//               return; // Skip if keypress is not Enter key
//           }
//             searchInput.val($(this).html());
//             searchInput.focus();
//             predictiveResultBox.html("");
//           });

//           $(document).on("click", function (e) {
//             e.stopPropagation();
//             if ($searchBoxContainer.find(".input-search-containter, #predictive-result").has(e.target).length === 0) {
//                 predictiveResultBox.html("");
//             }
//         });
//     }
//    predictSearch();

//   $inputSearchContainer.find(".btn-search-icon, .icon-search").on("click", (e) => {
//     const $inputSearchValue = $inputSearchContainer.find("#search-input").val()?$inputSearchContainer.find("#search-input").val():"";
//     e.preventDefault();
//     window.adobeDataLayer?.push({
//           event: "cmp:customClick",
//           data: {
//             linkName: $(e.currentTarget).text().trim(),
//             linkPageName: `/search?q=${$inputSearchValue}&searchFilter=${searchQuery}`,
//           },
//     });
//     //for dev/prod
//     window.location.href = `/search?q=${$inputSearchValue}&searchFilter=${searchQuery}`;
//     // //for local server
//     // if(window.location.href.includes("en.html")){
//     //   window.location.href = window.location.href.split('?')[0].replace("en.html",`en/search.html?q=${$inputSearchValue}&searchFilter=${searchQuery}`)//for local
//     //   }
//   });

//   $formCheck.on("click keypress", (e) => {
//     if (e.type === "keypress" && e.which !== 13) {
//       return; // Skip if keypress is not Enter key
//   } 
//     e.preventDefault();
//       getThemeName();
//       $formCheck.each((i,ele) => {
//       const $checkedForm = $(ele);
//       if(e.currentTarget.innerHTML==$checkedForm.html()){
//       if($checkedForm.hasClass("button-checked")){
//           $checkedForm.removeClass("button-checked");
//           $checkedForm.find("input").removeAttr("aria-label");
//           searchQuery = "All";
//         }
//         else {
//         const inputVal= $checkedForm.find("input").val();
//         $checkedForm.addClass("button-checked");
//         $checkedForm.find("input").attr("aria-label",inputVal);
//         searchQuery = inputVal?inputVal:"";
//         }
//         searchQuery = searchQuery;
//       }else{
//         $checkedForm.removeClass("button-checked");
//         $checkedForm.find("input").removeAttr("aria-label");
//       }
//     });
//   });
//   const $navBarContainer = $ele.find(
//     ".header__flyout-containers > .cmp-container"
//   );
//   const $searchIcon = $(".btn-mob-search .ntt-icons");
//   const execNavBar = (e) => {
//     const $toggleSections = $ele.find(
//       ".header__flyout-button > .cmp-button, .header__flyout-container > .cmp-container"
//     );

// $('.experiencefragment').next().addClass("main-container");

//     $toggleSections.off("mouseenter mouseleave");
//     $toggleButtons.off("click");
   
//     if (deviceType() === "desktop") { 
//       $toggleSections.on("mouseenter mouseleave focus blur select", (e) => {
        
//         const currentId = $(e.currentTarget).attr("id");
//         if (currentId) {
//           const currentViewId = currentId.includes(suffix)
//             ? currentId.replace(suffix, "")
//             : currentId;
//           const containerId = currentId.includes(suffix)
//             ? currentId
//             : currentId + suffix;
//           $toggleSections.each((i, ele) => {
//             const $element = $(ele);
//             if (
//               $element.attr("id") === containerId ||
//               $element.attr("id") === currentViewId
//             ) {
//               switch (e.type) {
//                 case "mouseenter": 
//                   $element.addClass("active");
//                   $element.parent().addClass("active");
//                   $element.attr("aria-expanded", "true")
//                   $element.find(".cmp-button__icon").attr("aria-hidden", "false")
//                   if ($element.parent().hasClass("header__flyout-container")) {
//                     $element.parent().addClass("active");
//                     $element.parent().prev().addClass("active");
//                   } else 
//                   {
//                     if ( $element.parent().next().find(".list.header-list-items").length > 0) {
//                       $element.parent().next().addClass("active");
//                       }else{
//                         $element.parent().next().removeClass("active");
//                         }
//                   }
//                   break;
//                   case "focus": 
//                   $element.addClass("active");
//                   $element.parent().addClass("active");
//                   $element.attr("aria-expanded", "false")
//                   $element.find(".cmp-button__icon").attr("aria-hidden", "false");
//                   $element.parent().prev().prev().find(".active").removeClass("active");
//                   $element.parent().prev().prev().removeClass("active");
//                   $element.parent().prev().removeClass("active");
//                   if ($element.parent().hasClass("header__flyout-container")) {
//                     $element.parent().addClass("active");
//                     $element.parent().prev().addClass("active");
//                   } else 
//                   {
//                     if ( $element.parent().next().find(".list.header-list-items").length > 0) {
//                       $element.parent().next().addClass("active");
//                       }else{
//                         $element.parent().next().removeClass("active");
//                         }
//                   }
//                   break;
//                 case "mouseleave":
//                   $element.removeClass("active");
//                   $element.parent().removeClass("active");
//                   $element.attr("aria-expanded", "false")
//                   $element.find(".cmp-button__icon").attr("aria-hidden", "true")
//                   if ($element.parent().hasClass("header__flyout-container")) {
//                     $element.parent().removeClass("active");
//                     $element.parent().prev().removeClass("active");
//                   } else {
//                     $element.parent().next().removeClass("active");
//                   }
//                   break;
//                   case "blur":
//                   $element.attr("aria-expanded", "false")
//                   $element.find(".cmp-button__icon").attr("aria-hidden", "true");
//                   $element.parent().prev().prev().find(".active").removeClass("active");
//                   $element.parent().prev().prev().removeClass("active");
//                   $element.parent().prev().removeClass("active");
//                   break;
//               }
//             }
//           });
//         }
//       });

      
//      $(".header-comp-bottombar-dropdown .btn-secondary").focus(function(){
//       $(".header-comp-bottombar-navigation").find(".active").each(function(){
//         $(this).removeClass("active");
//       });
//       });
//     } else { 
//       $ele.removeClass("active");
//       $toggler.removeClass("active");
//       $toggleButtons.removeClass("active");
//       $toggleButtons.on("click", (e) => {
//         e.preventDefault();
//         const $element = $(e.currentTarget);
//         const wasOpened = $element.hasClass("active");

//         $toggleButtons.removeClass("active");
//         $element.parent().next().removeClass("active");
//         $element.parent().next().find(".nav-sm-icon").remove(); 
//         if (!wasOpened) {
//           $element.addClass("active"); 
//             $element
//               .parent()
//               .next()
//               .find(".cmp-list__item-link")
//               .append('<span class="icon-arrow-right nav-sm-icon"></span>'); 
//           $toggleSections.each((i, ele) => {
//             if ($($element).attr("id") != ele.id) {
//               ele.parentElement.nextElementSibling?.classList?.remove("active");
//             }
//           });
//           $element.parent().next().addClass("active");
//         }
//       });
//     }
//   };
//   $loginButtons.on("click", (e) => {
//     e.preventDefault();
//     const $loginelement = $(e.currentTarget);
//     $loginelement.toggleClass("active");
//     $loginelement.next(".dropdown-menu").toggleClass("active");
//   });
//   if ($callButton.length > 0) {
//   const mobileNumber = $callButton.children()[1].textContent;
//   $callButton.attr("href", `tel:${mobileNumber}`);
//   }

//   $(document).on("click", function (event) {
//     $(".header-comp-topbar-dropdown .cmp-button").attr("aria-expanded", "true")
//     $(".header-comp-topbar-dropdown .cmp-button .cmp-button__icon").attr("aria-hidden", "false")

//     var $div = $(".header-comp-topbar-dropdown .active");
//     if (!$div.is(event.target) && !$div.has(event.target).length) {
//       $(".header-comp-topbar-dropdown .active").removeClass("active");
//       $(".header-comp-topbar-dropdown .cmp-button").attr("aria-expanded", "false")
//       $(".header-comp-topbar-dropdown .cmp-button .cmp-button__icon").attr("aria-hidden", "true")
//     }
//   });

//   $searchButtons.on("click", (e) => {
//     e.preventDefault();
//     const $searchButtons = $(e.currentTarget); 
//     $ele.find(".header-comp-bottombar").toggleClass("active");
//     $ele.find(".header-comp-content-container").toggleClass("active");

//     $ele.find(".header-comp-bottombar__search").toggleClass("active");
//     $body.addClass("overflow-hidden");
//     $searchButtons.children().removeClass("icon-search");
//     $searchButtons.addClass("cancel-icon-size");
//     $searchButtons.attr("aria-expanded", "true");
//     $searchButtons.children().addClass("icon-cancel");
//     $ele.find(".header-comp-bottombar__search-form .input-search-containter .search-input").focus();
//     const wasOpened = $ele.find(".header-comp-bottombar__search").hasClass("active");
    
//     $toggler.children().removeClass("icon-cancel");
//     $toggler.children().addClass("icon-menu");

//     $(".header-comp").removeClass("active");
//     $(".header").removeClass("active");

//     if (!wasOpened) {
//       $ele.removeClass("active");
//       $ele.parent().removeClass("active");
//       $(".header-comp-content-container").removeClass("active");
//       $searchButtons.children().removeClass("icon-cancel");
//       $searchButtons.removeClass("cancel-icon-size");
//       $searchButtons.attr("aria-expanded", "false");
//       $searchButtons.children().addClass("icon-search");
//       $body.removeClass("overflow-hidden");
//       $inputSearchContainer.find("#search-input").val("");
//       $ele.find(".header-comp-bottombar__search").find('.form-check.button-checked').removeClass('button-checked');
//     }
//     else{
//       $body.addClass("overflow-hidden");
//       $ele.addClass("active");
//       $ele.parent().addClass("active");
//     }
//   });

//   $toggler.on("click", () => {
//     window.scrollTo(0, 0);
//     $ele.addClass("active");
//     $ele.parent().addClass("active");

//     $ele.find(".header-comp-content-container").toggleClass("active");
//     $toggler.addClass("active");
//     $body.toggleClass("overflow-hidden");

//     $toggleButtons.removeClass("active");
//     $searchButtons.children().removeClass("icon-cancel");
//     $searchButtons.children().addClass("icon-search");
//     $toggler.children().addClass("icon-menu");
//     $toggler.children().removeClass("icon-cancel");
//     $(".header-comp-bottombar__search").removeClass("active");
    
//     const wasOpened = $(".header-comp-content-container").hasClass("active");
//     if (wasOpened) {
//       $toggler.children().removeClass("icon-menu");
//       $toggler.children().addClass("icon-cancel");
//       $body.addClass("overflow-hidden");
      
//     }
//     else{
//       $body.removeClass("overflow-hidden");
//       $ele.removeClass("active");
//     $ele.parent().removeClass("active");
      
//     }
//     $searchIcon.removeClass("icon-add-circled-outline").addClass("icon-search");
//   });
//   if ($toggleButtons.length) {
//     $toggleButtons.each((i, ele) => {
//       const $element = $(ele);
//       const $container = $ele.find(`#${$element.attr("id")}${suffix}`);
//       $element.parent().append($container.parent());
//     });
//     $toggleButtons.attr("target", "_self");
//     $navBarContainer.append(
//       $quickLinks.clone().addClass("hide-on-desktop no-sub-links")
//     );
//     execNavBar();
//     $(window).on("resize", execNavBar);
//   }
// }, selectors);