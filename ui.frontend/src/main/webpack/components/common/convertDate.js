// export function convertDateYYYYMMDD(date) {
//     let convertedDate = "";
//     let convertedMnth = new Date(date).getMonth() + 1;
//     let convertedDay = new Date(date).getDate();

//     if (convertedMnth < 9) {
//         convertedMnth = '0' + convertedMnth;
//       }
//     if (convertedDay < 9) {
//         convertedDay = '0' + convertedDay;
//     }

//     if(date) {
//         convertedDate = new Date(date).getFullYear() + '-' + convertedMnth + '-' + convertedDay;
//     }
//     return convertedDate;
// }