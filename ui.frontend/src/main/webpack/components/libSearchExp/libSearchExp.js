// import { componentCtrl, deviceType } from "../../scripts";
// import $ from "jquery";
// // import Data from "./libData.json";

// const selectors = {
//   self: ".lib-search-comp",
// };

// componentCtrl((prop) => {
//   let jsonData;
//   async function fetchLibSearch() {
//     await fetch(
//       "/bin/getLibVariation?fragmentVariationPath=/content/experience-fragments/holmesglen/holmesglen/en/library-search/master"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         jsonData = data;
//         let uniqueDataL1 = [];
//         data.filter(function (entry) {
//           let level1Value = entry.level1;
//           if (
//             !uniqueDataL1.some(function (uniqueEntry) {
//               return uniqueEntry.level1 === level1Value;
//             })
//           ) {
//             uniqueDataL1.push(entry);
//           }
//         });
//         console.log(uniqueDataL1);
//         uniqueDataL1.forEach((element) => {
//           $("#searchResultL1").append(
//             `<option  class="lavel1" value="${element.level1}">${element.level1}</option>}`
//           );
//         });

//         console.log(data);
//       })
//       .catch((error) => {
//         console.log("error");
//       });
//   }
//   fetchLibSearch();
//   const $ele = $(prop.element),
//     $selectL1 = $ele.find("#searchResultL1"),
//     $selectL2 = $ele.find("#searchResultL2"),
//     $selectL3 = $ele.find("#searchResultL3");

//   let filterDataL2 = [],
//     filterDataL3 = [],
//     filterDataL4 = [];
//   $("#searchResultL2").hide();
//   $("#searchResultL3").hide();
//   $(".searchResultL2").hide();
//   $(".searchResultL3").hide();
//   $(".selecteddata").hide();

//   $selectL1.on("change", function () {
//     filterDataL2 = [];
//     filterDataL3 = [];
//     filterDataL4 = [];
//     $(".searchResultL2").hide();
//     $(".searchResultL3").hide();
//     $("#searchResultL2").hide();
//     $("#searchResultL3").hide();
//     $("#searchResultL2").html(`<option value="">` + $('#searchResultL1 option:nth-child(1)').val() + `</option>`);
//     $("#searchResultL3").html(`<option value="">` + $('#searchResultL1 option:nth-child(1)').val() + `</option>`);
//     $(".selecteddata").html("");
//     $(".selecteddata").hide();
//     const currentValue = this.value;
//     filterDataL2 = jsonData
//       .filter((item) => item.level1 === currentValue)
//       .map((item) => item);

//     let uniqueDataL2 = [];
//     filterDataL2.filter(function (entry) {
//       let level1Value = entry.level2;
//       if (
//         !uniqueDataL2.some(function (uniqueEntry) {
//           return uniqueEntry.level2 === level1Value;
//         })
//       ) {
//         uniqueDataL2.push(entry);
//       }
//     });
    
//     if (uniqueDataL2.length != 0) {
//       $(".searchResultL2").show();
//       $("#searchResultL2").show();
//       uniqueDataL2.forEach((element) => {
//         $("#searchResultL2").append(
//           `<option  class="lavel2" value="${element.level2}">${element.level2}</option>}`
//         );
//       });
//     }
//   });

//   $selectL2.on("change", function () {
//     filterDataL3 = [];
//     filterDataL4 = [];
//     $(".searchResultL3").hide();
//     $("#searchResultL3").hide();
//     $("#searchResultL3").html(`<option value="">` + $('#searchResultL1 option:nth-child(1)').val() + `</option>`);
//     $(".selecteddata").hide();

//     const currentValue = this.value;
//     filterDataL3 = filterDataL2
//       .filter((item) => item.level2 === currentValue)
//       .map((item) => item);

//     let uniqueDataL3 = [];
//     filterDataL3.filter(function (entry) {
//       let level1Value = entry.level3;
//       if (
//         !uniqueDataL3.some(function (uniqueEntry) {
//           return uniqueEntry.level3 === level1Value;
//         })
//       ) {
//         uniqueDataL3.push(entry);
//       }
//     });
    
//     if (uniqueDataL3.length != 0) {
//       $(".searchResultL3").show();
//       $("#searchResultL3").show();
//     uniqueDataL3.forEach((element) => {
//       $("#searchResultL3").append(
//         `<option  class="lavel3" value="${element.level3}">${element.level3}</option>}`
//       );
//     });
//   }
//   });

//   $selectL3.on("change", function () {
//     filterDataL4 = [];
//     $(".selecteddata").hide();
//     $(".selecteddata").html(""); 
//     const currentValue = this.value;
//     $(".selecteddata").show();

//     filterDataL4 = filterDataL3.filter((item) => item.level3 === currentValue).map((item) => item);
//     let uniqueDataL4 = [];
//     filterDataL4.filter(function (entry) {
//       let level1Value = entry.blogInfo;
//       if (
//         !uniqueDataL4.some(function (uniqueEntry) {
//           return uniqueEntry.blogInfo === level1Value;
//         })
//       ) {
//         uniqueDataL4.push(entry);
//       }
//     });
//     uniqueDataL4.forEach((element) => {
//       $(".selecteddata").append(`<div>${element.blogInfo}</div>`);
//     });
//   });
// }, selectors);
