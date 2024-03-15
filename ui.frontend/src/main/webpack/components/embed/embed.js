// import { componentCtrl } from "../../scripts";
// import $ from "jquery";
// const selectors = {
//     self: '[data-cmp-is="embed"]'
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element),
//         $openEmbedModalBtn = $ele.find(".playVideoBtn"),
//         $embedModal = $(".embed__modal"),
//         $body = $("body"),
//         $closeEmbedModalBtn = $embedModal.find(".embed__modal-btnClose"),
//         videoUrl = $ele.find("iframe").attr("src");
    
//     $openEmbedModalBtn.click(()=> {
//         $embedModal.addClass("active");
//         $embedModal.find("iframe").attr("src", videoUrl);
//         if(!$body.hasClass("overflow-hidden")) {
//             $body.addClass("overflow-hidden")
//         }
//     });

//     $closeEmbedModalBtn.click(()=> {
//         $embedModal.removeClass("active");
//         $embedModal.find("iframe").attr("src", '');
//         $body.removeClass("overflow-hidden");
//     });

// }, selectors);