// import {componentCtrl} from "../../scripts";
// import $ from 'jquery';


// const selectors = {
//     self: '.teaser__formpagebanner',
// };

// componentCtrl((prop) => {
//     const $ele = $(prop.element);
//     const $courseCodeValue = $ele.find('.cmp-teaser__content-courseCode');
//     const $cricosCodeValue = $ele.find('.cmp-teaser__content-cricosCode');
//     const $eventFormDescValue = $ele.find('.cmp-teaser__content-eventFormDesc');
//     const $streamSubHeadingValue = $ele.find('.cmp-teaser__content-streamSubHeading');
//     const $hubValue = $ele.find('.cmp-teaser__content-course');
//     const $imgSrc = $ele.find('.cmp-image__image').attr("src");
//     const params = new URLSearchParams(window.location.search);
//     let courseCode;
//     let cricosCode;
//     let qualification;
//     let eventEnd;
//     let eventStart;
//     let campus;
//     let hub ;
//     let eventShortDesc;
//     let areaStudy;
//     let streamSubHeading
//     let subHub;

//     params.has("courseCode") ? (courseCode = params.get("courseCode")) : "";
//     params.has("cricosCode") ? (cricosCode = params.get("cricosCode")) : "";
//     params.has("qualification") ? (qualification = params.get("qualification")) : "";
//     params.has("hub") ? (hub = params.get("hub")): "";
//     params.has("subHub") ? (subHub = params.get("subHub")): "";
//     params.has("campus") ? (campus = params.get("campus").toUpperCase()): "";
//     params.has("eventShortDesc") ? (eventShortDesc = params.get("eventShortDesc")): "";
//     params.has("eventStart") ? (eventStart = params.get("eventStart")): "";
//     params.has("eventEnd") ? (eventEnd = params.get("eventEnd")): "";
//     params.has("areaStudy")? (areaStudy = params.get("areaStudy")):"";
//     params.has("streamSubHeading")? (streamSubHeading = params.get("streamSubHeading")):"";

//     const eventStartdate = new Date(eventStart);
//     const eventEndDate = new Date(eventEnd);
//     // Define an array to map month numbers to month names
//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//     const dates = eventStartdate.getDate();
//     const month = monthNames[eventStartdate.getMonth()];
//     const year = eventStartdate.getFullYear();
//     const day = weekday[eventStartdate.getDay()];
//     const options = { timeZone: 'Australia/Sydney', hour: 'numeric', minute: 'numeric' };
//     const endTime = eventEndDate.toLocaleString('en-AU', options).replace(/ /g, "");
//     const startTime = eventStartdate.toLocaleString('en-AU', options).replace(/ /g, "");

//     if(courseCode){
//         $courseCodeValue.text(`Course code: ${courseCode}`)
//         $courseCodeValue.removeClass("d-none")
//     }
//     else{
//         $courseCodeValue.text()
//         $courseCodeValue.addClass("d-none")
//     }
//     if(cricosCode){
//         $cricosCodeValue.text(`CRICOS: ${cricosCode}`)
//         $cricosCodeValue.removeClass("d-none")
//     }
//     else{
//         $cricosCodeValue.text()
//         $cricosCodeValue.addClass("d-none")
//     }
//     if (streamSubHeading){
//         streamSubHeading=="null"?streamSubHeading="":streamSubHeading;
//         $streamSubHeadingValue.text(streamSubHeading)
//         $streamSubHeadingValue.removeClass("d-none")
//     }
//     else{
//         $streamSubHeadingValue.text()
//         $streamSubHeadingValue.addClass("d-none")
//     }
//     qualification?$hubValue.text(qualification):eventShortDesc?$hubValue.text(eventShortDesc):subHub?$hubValue.text(subHub):$hubValue.text(hub);
//     const imgPath = areaStudy?areaStudy.replace(/ /g, '-'):hub?hub.replace(/ /g, '-'):"";
//     const finalImgPath = imgPath ? `${$imgSrc}/${imgPath}.png` : "/content/holmesglen/holmesglen/au/en/about-us/campuses/moorabbin/_jcr_content/root/container/container/container_copy_copy/teaser_copy.coreimg.85.1600.png"; 
//     $ele.find('.cmp-image__image').attr("src",finalImgPath);
//     const finalEventBannerDescription = `${startTime} - ${endTime}, ${day} ${dates} ${month} ${year} | ${campus}`;
//     eventStart?$eventFormDescValue.text(finalEventBannerDescription):$eventFormDescValue.text();


// }, selectors);

