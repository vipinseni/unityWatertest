// import { componentCtrl, deviceType } from "../../scripts";
// import $ from "jquery";
// import Select2 from "select2";

// const selectors = {
//   self: '[data-cmp-is="campus-locations"]',
// };

// componentCtrl((prop) => {
//   const $ele = $(prop.element),
//     $campusTeasers = $ele.find(".cmp-teaser"),
//     $locationDropdown = $ele.find(".campus-locations-comp__dropdown"),
//     $teaserCampusLocation = $ele.find(".teaserCampusLocation");
//     let isMobileViewSize = (deviceType() === 'tablet' || deviceType() === 'mobile');

//   let campusData = [];

//   for (let index = 0; index < $campusTeasers.length; index++) {
//     const element = $campusTeasers[index];
//     const campusObj = {
//       name: element.querySelector(".cmp-teaser__title-link").innerText,
//       coordinates: {
//         latitude: element
//           .querySelector("[data-latitude]")
//           .getAttribute("data-latitude"),
//         longitude: element
//           .querySelector("[data-longitude]")
//           .getAttribute("data-longitude"),
//       },
//       address: {
//         streetAddressLine1: element.querySelector(".cmp-teaser__description")
//           .innerHTML,
//       },
//       addressLines: [
//         element.querySelector(".cmp-teaser__description").innerHTML,
//       ],
//     };
//     campusData.push(campusObj);
//   }

//   if (window.google && window.google.maps) {
//     let map,
//       markers = [],
//       infoWindow;

//     var melbourne = {
//       lat: -37.840935,
//       lng: 144.946457,
//     };

//     map = new google.maps.Map(document.getElementById("map"), {
//       center: melbourne,
//       zoom: 17,
//       mapTypeId: "roadmap",
//       mapTypeControlOptions: {
//         mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
//       },
//     });

//     //Associate the styled map with the MapTypeId and set it to display.
//     map.setMapTypeId("roadmap");
//     infoWindow = new google.maps.InfoWindow();

//     function showStoresMarkers(store) {
//       var bounds = new google.maps.LatLngBounds();
//       for (var [index, store] of store.entries()) {
//         var latlng = new google.maps.LatLng(
//           store["coordinates"]["latitude"],
//           store["coordinates"]["longitude"]
//         );
//         var name = store["name"];
//         var location = store["addressLines"];
//         bounds.extend(latlng);
//         createMarker(latlng, name, location, index + 1);
//       }

//       if(isMobileViewSize){
//         map.fitBounds(bounds,100);
//       }else{
//         map.fitBounds(bounds, {left: 450});
//       }

//     }

//     function createMarker(latlng, name, address, index) {
//       var link = "https://maps.google.com/?q=" + address[0] + "," + address[1];
//       var html = `
//                 <div class='marker-store-container'>
//                     <div class='marker-store-name'>${name}</div>
//                     <div class='marker-store-location'>
//                         <i class="fas fa-location-arrow marker-icon"></i>
//                         <div class="marker-description">${address[0]}</div>
//                     </div>
//                 </div>
//             `;
//       var marker = new google.maps.Marker({
//         map: map,
//         position: latlng,
//         icon: "/etc.clientlibs/holmesglen/clientlibs/clientlib-site/resources/images/marker.png",
//         label: {
//           text: index.toString(),
//           fontWeight: "bolder",
//           color: "#000",
//         },
//       });
//       marker.addListener("click", function () {
//         var pt = new google.maps.LatLng(
//           marker.position.lat(),
//           marker.position.lng()
//         );
//         map.setCenter(pt);
//         infoWindow.setContent(html);
//         infoWindow.open(map, marker);
//         map.setZoom(17);
//       });
//       markers.push(marker);
//     }

//     function setOnClickListener() {
//       $teaserCampusLocation.each(function (index, campusElement) {
//         if(campusElement.getElementsByClassName("cmp-teaser__action-link").length>0){
//         campusElement
//           .querySelector(".cmp-teaser__action-link")
//           .addEventListener("click", function () {
//             $(this).attr("href", "javascript:void(0);");

//             if ( $teaserCampusLocation.find(".cmp-teaser").length ) {
//             $teaserCampusLocation
//               .find(".cmp-teaser")
//               .removeClass("highlighted");
//             }
//             if ( $teaserCampusLocation.find(".cmp-teaser__title img").length ) {
//             $teaserCampusLocation
//               .find(".cmp-teaser__title img")
//               .addClass("d-none");
//             }
    

//             $(this).closest(".cmp-teaser").addClass("highlighted");
//             if (
//               $(this).closest(".cmp-teaser").find(".cmp-teaser__title img")
//                 .length
//             ) {
//               $(this)
//                 .closest(".cmp-teaser")
//                 .find(".cmp-teaser__title img")
//                 .removeClass("d-none");
//             } else {
//               $(this)
//                 .closest(".cmp-teaser")
//                 .find(".cmp-teaser__title")
//                 .append(
//                   `<img src="/etc.clientlibs/holmesglen/clientlibs/clientlib-site/resources/images/activetitle.png">`
//                 );
//             }
//             new google.maps.event.trigger(markers[index], "click");
//           });
          
//         }
      
//         });
//     }

//     function clearLocations() {
//       infoWindow.close();
//       for (var i = 0; i < markers.length; i++) {
//         markers[i].setMap(null);
//       }
//       markers.length = 0;
//     }

//     function displayUlList(campusData) {
//       let dropdownOption = "";
//       campusData.map((store, index) => {
//         dropdownOption += `
//                             <option value="${index}">${store.name}</option>
//                   `;
//       });

//       $locationDropdown.append(dropdownOption);
//       new Select2($locationDropdown, {
//         minimumResultsForSearch: -1,
//       });
//     }

//     function showSelectedCampus() {
//       const selectElement = $locationDropdown;
//       selectElement.on("change", (event) => {
//         const selectedCampus = $locationDropdown.val();
//         $teaserCampusLocation.each(function (index, campusElement) {
//           if (index == selectedCampus) {
//             campusElement.classList.add("selectedCampus");
//             new google.maps.event.trigger(markers[index], "click");
//           } else {
//             campusElement.classList.remove("selectedCampus");
//           }
//           if ($teaserCampusLocation.hasClass("selectedCampus")) {
//             $locationDropdown.next().addClass("active");
//           } else {
//             $locationDropdown.next().removeClass("active");
//           }
//         });
//       });
//     }

//     function noLengthCampusHide(campusData) {
//       if (campusData.length <= 1) {
//         $ele.addClass("campus-locations-comp__without-sidebar");
//         google.maps.event.addListenerOnce(
//           map,
//           "bounds_changed",
//           function (event) {
//             if (this.getZoom()) {
//               this.setZoom(17);
//             }
//           }
//         );
//         new google.maps.event.trigger(markers[0], "click");
//       }
//     }

//     clearLocations();
//     showStoresMarkers(campusData);
//     displayUlList(campusData);
//     setOnClickListener();
//     showSelectedCampus();
//     noLengthCampusHide(campusData);
//   }
// }, selectors);
