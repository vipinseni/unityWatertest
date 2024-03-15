// import { componentCtrl ,deviceType} from "../../scripts";
// import $, { event } from "jquery";

// const selectors = {
//     self: ".container__browseByStudyArea"
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element),
//         $coloredButtons = $ele.find(".coloredButton__browseByStudyArea"),
//         $coloredButtonsCourseType = $(".container__browseByCourseType").find(".coloredButton__browseByStudyArea");
//         let isMobileViewSize = deviceType() === 'mobile';
//         let browseTitle = $(".container__browseByStudyArea .cmp-title__text");
//         let courseType = $(".container__browseByCourseType .cmp-title__text");
//         let arrowIcon = `<span class="cmp-button__icon icon-nav-arrow-down" aria-hidden="true"></span>`;

//       function isMobileView() {
//           isMobileViewSize = deviceType() === 'mobile';
//           if (browseTitle.length > 0) {
//             browseTitle.attr("tabindex", "0");
//           }
//           if (courseType.length > 0) {
//             courseType.attr("tabindex", "0");
//           }
//           return isMobileViewSize;
//       }
//       function toggleDiv($curElem){
//         if($curElem.parents().hasClass("container__browseByCourseType")){
//         if ($curElem.hasClass("closed")) {
//           $curElem.addClass("open").removeClass("closed").attr("aria-expanded", "true");
//           $coloredButtonsCourseType.show();
//         } else {
//           $curElem.addClass("closed").removeClass("open").attr("aria-expanded", "false");
//           $coloredButtonsCourseType.hide();
//         }
//       }
//       else{
//         if ($curElem.hasClass("closed")) {
//           $curElem.addClass("open").removeClass("closed").attr("aria-expanded", "true");
//           $coloredButtons.show();
//         } else {
//           $curElem.addClass("closed").removeClass("open").attr("aria-expanded", "false");
//           $coloredButtons.hide();
//         }
//       }
        
      
//     }
//       const titleText = $(".cmp-title__text");
//       titleText.on("click keypress", browseTitleClickHandler);
//       function browseTitleClickHandler(event) {
//           if (event.type === "keypress" && event.which !== 13) {
//             return; // Skip if keypress is not Enter key
//           }
//           if (isMobileView()) {
//             const $curElem = $(this);
      
//             // Check if it's a browseByStudyArea title
//             if ($curElem.parents(".container__browseByStudyArea").length > 0) {
//               toggleDiv($curElem);
//             }
      
//             // Check if it's a browseByCourseType title
//             if ($curElem.parents(".container__browseByCourseType").length > 0) {
            
//               toggleDiv($curElem);
//             }
      
//           }
//       }

//       $(window).on("resize",function(){
//         if(isMobileView()){
//           if(!browseTitle.has(".cmp-button__icon").length > 0){
//             browseTitle.append(arrowIcon);
//             courseType.append(arrowIcon);
//           }
//             browseTitle.addClass("closed").removeClass("open").attr("aria-expanded", "false");
//             courseType.addClass("closed").removeClass("open").attr("aria-expanded", "false");
//             browseTitle.children().addClass("icon-nav-arrow-down");
//             courseType.children().addClass("icon-nav-arrow-down");
//             $coloredButtons.hide();
//             $coloredButtonsCourseType.hide();
//         }
//         else{
//             $coloredButtons.show();
//             $coloredButtonsCourseType.show();
//             browseTitle.removeClass("closed").removeClass("open").attr("aria-expanded", "false");
//             courseType.removeClass("closed").removeClass("open").attr("aria-expanded", "false");
//             browseTitle.children().removeClass("icon-nav-arrow-down");
//             courseType.children().removeClass("icon-nav-arrow-down");
//         }
//       })
//       if(isMobileView()){
//         browseTitle.append(arrowIcon);
//         courseType.append(arrowIcon);
//         browseTitle.addClass("closed position-relative");
//         courseType.addClass("closed position-relative");
//         $coloredButtons.hide();
//         $coloredButtonsCourseType.hide();
//       }
//       else{
//         $coloredButtons.show();
//         $coloredButtonsCourseType.show();
//         browseTitle.removeClass("closed").removeClass("open");
//         courseType.removeClass("closed").removeClass("open");
//         browseTitle.children().removeClass("icon-nav-arrow-down");
//         courseType.children().removeClass("icon-nav-arrow-down");
//       }
// }, selectors);