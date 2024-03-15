// import { componentCtrl } from "../../scripts";
// import $ from 'jquery';

// const selectors = {
//     self: '.page-loader',
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element);
//     document.onreadystatechange = function() {
//       if (document.readyState !== "complete") {
//           $ele.show();
//           $("#loading-success").empty();
//       } else {
//           $ele.hide();
//           $("#loading-success").html("Page successfully loaded");
//       }
//   };

// //const targetDomain = 'holmesglen.edu.au';  // for local replace 'holmesglen.edu.au' with 'holmesglen'
// //const futTargetDomain = 'futuretech.edu.au';
// //const performanceEntries = performance.getEntries();
// //const holmesglenDomain = [];

// //performanceEntries.filter(entry => {
//     //if((entry.name.includes(futTargetDomain) || entry.name.includes(targetDomain)) && (entry.name.includes('min.js') || entry.name.includes('min.css'))){
//         //holmesglenDomain.push(entry);
//     //}
// //});
// //function checkResponse(){
// //const finalData = holmesglenDomain.every(element => element.responseStatus === 200);
//   //if(finalData){
//     //$ele.hide();
//     //$("#loading-success").html("Page successfully loaded");
//   //}
//   //else{
//     //$ele.show();
//     //$("#loading-success").empty();
//     //checkResponse();
//   //}
// //}
// //checkResponse();

//     // document.onreadystatechange = function() {
//     //     if (document.readyState !== "complete") {
//     //         $ele.show();
//     //     } else {
//     //         $ele.hide();
//     //     }
//     // };
// }, selectors);