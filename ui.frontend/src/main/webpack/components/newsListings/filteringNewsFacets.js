// const filteringNewsFacetsData = () => {
//     let courseAreas = [];
//     document.querySelectorAll("input[name=newsListingCourseCheckbox]").forEach(parentCheckbox => {
//         if(parentCheckbox.checked == true) {
//             const subCheckboxes = parentCheckbox.closest(".news-listing-comp__course-filter").querySelectorAll("input[name=newsListingSubCourseSubCheckbox]:checked");
//             const subCheckboxesValue = [...subCheckboxes].map(checkbox => checkbox.value);
//             const selectedCourse = {
//                 "hub" : parentCheckbox.value,
//                 "subHubs" : subCheckboxesValue
//             };
//             courseAreas.push(selectedCourse);
//         } else if(parentCheckbox.checked == false) {
//             const subCheckboxes = parentCheckbox.closest(".news-listing-comp__course-filter").querySelectorAll("input[name=newsListingSubCourseSubCheckbox]:checked");
//             if(subCheckboxes.length > 0) {
//                 const subCheckboxesValue = [...subCheckboxes].map(checkbox => checkbox.value);
//                 const selectedCourse = {
//                     "hub" : parentCheckbox.value,
//                     "subHubs" : subCheckboxesValue
//                 };
//                 courseAreas.push(selectedCourse);
//             }
//         }
//     });
//     return courseAreas;
// }
// export {filteringNewsFacetsData};