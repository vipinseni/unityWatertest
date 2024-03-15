// const filteringCoursesFacetsData = () => {
//     let courseAreas = {
//         courseType: [],
//         delivery: [],
//         duration: [],
//         freeTafe: [],
//         intakes: [],
//         interestArea: [],
//         location: [],
//         studyMode: []
//     };

//     document.querySelectorAll(".courseListingCheckbox").forEach(element => {
//         if (element.checked == true) {
//             const name = element.getAttribute("name");
//             const currentArr = element.parentElement.parentElement.parentElement.getAttribute('data-section');
//             const selectedArea = {
//                 "value": element.value,
//                 "type": name
//             };
//             courseAreas[currentArr].push(selectedArea.value);
//         }
//     });
//     return courseAreas;
// }
// export { filteringCoursesFacetsData };