// import { componentCtrl, deviceType } from "../../scripts";
// import $ from "jquery";
// const selectors = {
//     self: '.left-nav'
// };

// componentCtrl((prop) => {
// 	const childElement = 0;
// 	const $ele = $(prop.element),
// 	toggleElements = document.querySelectorAll('.left__nav__show__hide'),
// 	leftNavListV1 =  $('.leftNavigation__V1 .left__nav__list'),
// 	leftNavList =  $('.leftNavigation__V1 .left__nav__list li'),
// 	leftNavListLink = $('.leftNavigation__V1 .left__nav__link'),
// 	leftNavParV1 = $(".leftNavigation__V1 .left__nav__list .left__nav__parallel"),

// 	leftNavListV2 = $('.leftNavigation__V2 .left__nav__list'),
// 	leftNavListLinkV2 = $('.leftNavigation__V2 .left__nav__link'),
// 	leftNavParV2 = $(".leftNavigation__V2 .left__nav__list .left__nav__parallel"),
// 	leftNavArrowIcon = $(".nav-down-arrow__icon");
// 	let url = window.location.href;
// 	leftNavArrowIcon.click((event)=>{
// 		event.preventDefault();
// 	})

// 	leftNavArrowIcon.keypress((event)=>{
// 		if (event.type === "keypress" && event.which !== 13) {
//             return; // Skip if keypress is not Enter key
//         }
// 		event.preventDefault();
// 	})
// 	toggleElements.forEach((toggleElement) => {
// 		toggleElement.addEventListener('click', () => {
// 			const childElement = toggleElement.nextElementSibling;
// 			if(childElement) {
// 				childElement.classList.toggle("active");
// 				toggleElement.classList.toggle("active");
// 			}
// 		});
// 		toggleElement.addEventListener('keypress', (event) => {
// 			if (event.type === "keypress" && event.which !== 13) {
// 				return; // Skip if keypress is not Enter key
// 			}
// 			const childElement = toggleElement.nextElementSibling;
// 			if(childElement) {
// 				childElement.classList.toggle("active");
// 				toggleElement.classList.toggle("active");
// 			}
// 		});
// 	});

// 	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
// 	url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
// 	url = url.substr(url.lastIndexOf("/") + 1);

// 	leftNavList.each(function(){
// 		let href = $(this).find(leftNavListLink).attr('href');
// 		href = href.substring(0, (href.indexOf("#") == -1) ? href.length : href.indexOf("#"));
// 		href = href.substring(0, (href.indexOf("?") == -1) ? href.length : href.indexOf("?"));
// 		href = href.substr(href.lastIndexOf("/") + 1);
// 		  if($(this).find('.left__nav__show__hide:first').attr('href') !== "" || undefined){
// 			 let textValue = $(this).find('.left__nav__show__hide:first span')[0].innerHTML
// 			 	$(this).find('.left__nav__show__hide:first').attr('area-label', textValue); 
// 			 }
// 		if(url == href){
// 			$(this).addClass("active");
// 			$(this).find('.left__nav__show__hide:first').removeAttr("href").css("cursor","default");
// 			var parentClass = $(this).parent('ul').attr('class');
// 			if(parentClass == 'left__nav__child'){
// 				$(this).find(leftNavListLink).addClass('active');
// 				$(this).find(leftNavListLink).removeAttr("href").css("cursor","default");
// 				let textValue = $(this).find('.left__nav__show__hide:first span')[0].innerHTML
// 				$(this).find('.left__nav__show__hide:first').attr('area-label', textValue); 
// 				$(this).parent().parent().addClass("active");
// 				if (deviceType() === 'mobile' || deviceType() === 'tablet') {
// 					$(this).parent().parent().parent().addClass("leftNavChildPage");
// 				}
// 				else {
// 					$(this).parent().addClass("active");
// 				}

// 			}
// 			else {
// 				if (deviceType() === 'mobile' || deviceType() === 'tablet') {
// 					$(this).parent().addClass("leftNavParentPage");
// 					$(this).parent().find('.left__nav__child').remove();

// 				}
// 				leftNavListV1.click(function(e) {
// 					if (deviceType() === 'mobile' || deviceType() === 'tablet') {
// 					var is_open = $(this).hasClass("openList");
// 						$(".left__nav__parallel").parent().toggleClass("smActive");
// 						$(".left__nav__list").eq(0).children().eq(0).addClass("active");
// 						if (is_open) {
// 							$(this).removeClass("openList").attr("aria-expanded", "false");
// 						} else {
// 						$(this).addClass("openList").attr("aria-expanded", "true");
// 						}
// 					}
// 				  });
// 				  leftNavParV1.click(function() {
// 					var selected_value = $(this).html();
// 					var first_li = $(".left__nav__list .left__nav__parallel:first-child").html();
// 					if (deviceType() === 'mobile' || deviceType() === 'tablet') {
// 						$(".left__nav__list .left__nav__parallel:first-child").html(selected_value);
// 						$(".left__nav__list .left__nav__parallel:first-child").html(selected_value).addClass("active");
// 						$(this).html(first_li);
// 						$(this).removeClass("active");
// 					}
// 				});
// 			}
// 		}
// 	});

// 	leftNavListV2.each(function(){
// 		let href = $(this).find(leftNavListLinkV2).attr('href');
// 		href = href.substring(0, (href.indexOf("#") == -1) ? href.length : href.indexOf("#"));
// 		href = href.substring(0, (href.indexOf("?") == -1) ? href.length : href.indexOf("?"));
// 		href = href.substr(href.lastIndexOf("/") + 1);
// 	});

	
// 	leftNavListV2.click(function(e) {
// 		var is_open = $(this).hasClass("openList");
// 		$(".left__nav__parallel").parent().toggleClass("smActive");
// 		$(".left__nav__list").eq(0).children().eq(0).addClass("active");
// 		if (is_open) {
// 			$(this).removeClass("openList").attr("aria-expanded", "false");
// 		} else {
// 		  $(this).addClass("openList").attr("aria-expanded", "true");
// 		}
// 	  });
	  
// 	  leftNavParV2.click(function() {
// 		var selected_value = $(this).html();
// 		var first_li = $(".left__nav__list .left__nav__parallel:first-child").html();
// 		if (deviceType() === 'mobile' || deviceType() === 'tablet') {
// 			$(".left__nav__list .left__nav__parallel:first-child").html(selected_value);
// 			$(".left__nav__list .left__nav__parallel:first-child").html(selected_value).addClass("active");
// 			$(this).html(first_li);
// 			$(this).removeClass("active");
// 		}
// 	  });

	  
// 	$(window).on("resize", function () {
// 		if ($(".leftNavigation__V1 .left__nav__child.active").length > 0) {
// 			location.reload(true);
// 		}
// 	});
	 

// }, selectors);