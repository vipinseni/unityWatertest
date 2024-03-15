// import { componentCtrl ,deviceType} from "../../../scripts";
// import $ from "jquery";
// const selectors = {
//     self: '[data-cmp-is="courseTeaserCard"]'
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element),
//         $relatedNewsList = $ele.find(".course_teaser__card");
//         let relatedNewsItems = $('.course_teaser__card .teaser__related-course');
//         let isMobileViewSize = (deviceType() === 'tablet' || deviceType() === 'mobile');
//         const limit = $relatedNewsList.data("limit") ? $relatedNewsList.data("limit"):"5";
//         const showMoreText = $relatedNewsList.data("showmore-text") ? $relatedNewsList.data("showmore-text") : "Show More";
//         const showLessText = $relatedNewsList.data("showless-text") ? $relatedNewsList.data("showless-text") : "Show Less";
//         let debounceTimeout;
//         let showMoreButton = `<div class='show-more d-flex justify-content-start align-items-center d-none' id="showMoreNews"><span class="cmp-button__text show-more__text">${showMoreText}</span><span class="cmp-button__icon icon-arrow-right show-more__icon" aria-hidden="true"></span></div>`;
//         let showLessButton = `<div class='show-less d-flex justify-content-start align-items-center d-none' id="showLessNews"><span class="cmp-button__text show-more__text">${showLessText}</span><span class="cmp-button__icon icon-arrow-right show-more__icon" aria-hidden="true"></span></div>`;
//         if ($ele.children().length == 0){
//             $ele.closest(".container__full-width").addClass("d-none");
//        }
//         function isMobileView() {
//             isMobileViewSize = (deviceType() === 'tablet' || deviceType() === 'mobile');
//             return isMobileViewSize;
//         }
//         $(document).on("click", "#showMoreNews", function() {
//             relatedNewsItems.show(); // Show all hidden news items
//             $(this).addClass("d-none"); // Remove the "Show More" button after click  
//             $("#showLessNews").removeClass("d-none");
//             if(!isMobileViewSize){
//                 relatedNewsItems.addClass("mobile");
//                 relatedNewsItems.each(function() {
//                     $(this).removeAttr('style');
//                 });
//             }
//         });   
//         $(document).on("click", "#showLessNews", function() {
//             relatedNewsItems.show(); // Show all hidden news items
//             $(this).addClass("d-none"); // Remove the "Show Less" button after click  
//             $("#showMoreNews").removeClass("d-none");
//             if(!isMobileViewSize){
//                 relatedNewsItems.removeClass("mobile");
//                 relatedNewsItems.slice(3).hide();
//             }
//             else{
//                 relatedNewsItems.slice(2).hide();
//             }
//         }); 
//         $(window).on("load resize" ,function() {
//             clearTimeout(debounceTimeout);
//             // Set a new timeout to execute the event handler after 400 milliseconds of inactivity
//             debounceTimeout = setTimeout(function() {
//             isMobileView();
//             relatedNewsItems.removeClass("mobile");
//             $("#showMoreNews").removeClass("d-none");
//             $("#showLessNews").addClass("d-none");
//             relatedNewsItems.show();
//             if(limit > 3 && !isMobileViewSize){
//                 relatedNewsItems.slice(3).hide();
//                 if($relatedNewsList.find('.show-more').length == 0 && relatedNewsItems.length > 3){
//                     relatedNewsItems.slice(3).hide();
//                     $relatedNewsList.find('.teaser__related-course:last').after(showMoreButton,showLessButton);
//                     $("#showMoreNews").removeClass("d-none");
//                 }
//                 else if($relatedNewsList.find('.show-less').length == 1 && $("#showMoreNews").hasClass("d-none")){
//                     $("#showLessNews").removeClass("d-none");
//                     relatedNewsItems.addClass("mobile");
//                 }
//                 else{
//                     $relatedNewsList.find('.show-more').removeClass("d-none");
//                 }
//             }
//             else if(limit > 2 && isMobileViewSize){
//                 relatedNewsItems.slice(2).hide();
//                 if($relatedNewsList.find('.show-more').length == 0 && relatedNewsItems.length > 2){
//                     $relatedNewsList.find('.teaser__related-course:last').after(showMoreButton,showLessButton);
//                     $("#showMoreNews").removeClass("d-none");
//                 }
//                 else if($relatedNewsList.find('.show-less').length == 1){
//                     if($("#showMoreNews").hasClass("d-none")){
//                         $("#showLessNews").removeClass("d-none");
//                     }
//                     else if($("#showLessNews").hasClass("d-none")){
//                         $("#showMoreNews").removeClass("d-none");
//                     }
//                 }
//                 else{
//                     $relatedNewsList.find('.show-more').removeClass("d-none");
//                 }
//             }
//             else{
//                 relatedNewsItems.show();
//                 $relatedNewsList.find(".show-more").addClass("d-none");
//             }
//         },400);

//         });

// }, selectors);