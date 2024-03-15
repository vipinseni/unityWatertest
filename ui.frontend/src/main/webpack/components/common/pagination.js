// export function createPagination(itemsPerPage, totalItems, currentPage = 1, activePage) {
// 	const totalPages = Math.ceil(totalItems / itemsPerPage);
// 	const pagination = document.getElementById("newsListingPaginationContainer");
// 	const pageNumbers = [];
// 	let endPage;

// 	//for counting total number of pages
// 	for (let i = 1; i <= totalPages; i++) {
// 		pageNumbers.push(i);
// 	}

// 	const startPage = currentPage - 5 > 0 ? currentPage - 5 : 0;
// 	endPage = startPage + 5 > totalPages ? totalPages : startPage + 5; //for desktop view

// 	let paginationHTML = "";

// 	    //previous btn 
// 		if (currentPage >= 1 ) {
// 			paginationHTML +=
// 				'<a role=link tabindex=0 id="prev-btn" class="prev page_anchor" data-page="' +
// 				(currentPage - 1) +
// 				'"><span class="cmp-icon icon-arrow-left"></span><span class="cmp-text">Previous</span></a>';
// 		}	

// 	if (totalPages > 6) { // if pages is more than 6 then create truncate pagination 
// 	if (activePage > 3 && activePage <= totalPages - 3) { //for desktop view
//       paginationHTML += '<a class="page_anchor" role=link tabindex=0 data-page="1">1</a>';
//       paginationHTML += '<a role=link tabindex=0 class="page_anchor pe-none">...</a>';
//       for (let i = activePage - 2; i < activePage + 1; i++) {
//         if (i == activePage) {
//           paginationHTML +=
//             "<a role=link tabindex=0 " +
//             'class="active page_anchor"' +
//             ' data-page="' +
//             pageNumbers[i] +
//             '">' +
//             pageNumbers[i] +
//             "</a>";
//         } else {
//           paginationHTML +=
//             "<a role=link tabindex=0 " +
//             'class="page_anchor"' +
//             ' data-page="' +
//             pageNumbers[i] +
//             '">' +
//             pageNumbers[i] +
//             "</a>";
//         }
//       }
//       paginationHTML += '<a role=link tabindex=0 class="page_anchor pe-none">...</a>';
//       paginationHTML +=
//         '<a role=link tabindex=0 class="page_anchor" data-page="' +
//         totalPages +
//         '">' +
//         totalPages +
//         "</a>";
//     } else if ((activePage == totalPages || activePage > totalPages - 3)) {
//       paginationHTML += '<a role=link tabindex=0 class="active page_anchor" data-page="1">1</a>';
//       paginationHTML += '<a role=link tabindex=0 class="page_anchor pe-none">...</a>';
//       for (let i = totalPages - 5; i < pageNumbers.length - 1; i++) {
//         paginationHTML +=
//           "<a role=link tabindex=0 " +
//           'class="page_anchor"' +
//           ' data-page="' +
//           pageNumbers[i] +
//           '">' +
//           pageNumbers[i] +
//           "</a>";
//       }
//       paginationHTML +=
//         '<a role=link tabindex=0 class="page_anchor" data-page="' +
//         totalPages +
//         '">' +
//         totalPages +
//         "</a>";
//     } 
// 	else {
//       for (let i = startPage; i < endPage; i++) {
//         paginationHTML +=
//           "<a role=link tabindex=0 " +
//           (currentPage === pageNumbers[i]
//             ? ' class="active page_anchor"'
//             : 'class="page_anchor"') +
//           ' data-page="' +
//           pageNumbers[i] +
//           '">' +
//           pageNumbers[i] +
//           "</a>";
//       }
//       paginationHTML += '<a role=link tabindex=0 class="page_anchor pe-none">...</a>';
//       paginationHTML +=
//         '<a role=link tabindex=0 class="page_anchor" data-page="' +
//         totalPages +
//         '">' +
//         totalPages +
//         "</a>";
//     }
//   }
//    else {
//     for (let i = startPage; i < totalPages-1; i++) {
//       paginationHTML +=
//         "<a role=link tabindex=0 " +
//         (currentPage === pageNumbers[i]
//           ? ' class="active page_anchor"'
//           : 'class="page_anchor"') +
//         ' data-page="' +
//         pageNumbers[i] +
//         '">' +
//         pageNumbers[i] +
//         "</a>";
//     }
//     paginationHTML +=
//       '<a role=link tabindex=0 ' +
// 	  (totalPages == 1
// 		? ' class="active page_anchor pe-none"'
// 		: 'class="page_anchor"') +
// 	  ' data-page="' +
//       totalPages +
//       '">' +
//       totalPages +
//       "</a>";
//   }

//   //next btn
// 	if (currentPage <= totalPages) {
// 		paginationHTML +=
// 			'<a role=link tabindex=0 id="next-btn" class="next page_anchor" data-page="' +
// 			(totalPages + 1) +
// 			'"><span class="cmp-text">Next</span><span class="cmp-icon icon-arrow-right"></span></a>';
// 	}
// 	pagination.innerHTML = paginationHTML;
// 	// disable next btn if there is only one page
// 	if(activePage == 1){
// 	if (currentPage == totalPages) {
// 		const nextBtn = document.getElementById('next-btn');
// 		nextBtn.classList.add('pe-none','btn-disabled');
//     nextBtn.removeAttribute("tabindex");
//     nextBtn.removeAttribute("role");
// 	  } else {
// 		const nextBtn = document.getElementById('next-btn');
// 		nextBtn.classList.remove('pe-none','btn-disabled');
//     nextBtn.setAttribute("tabindex", "0");
//     nextBtn.setAttribute("role", "link");
// 	  }
// 	}  
// }