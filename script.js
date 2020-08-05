// toogle navbar should turn off when we click anywhere else on page
$(function () {    //same as document.getEventListener(DOMContentLoaded"..)
	$("#navbarToggle").blur(function (event) {  //same as document.querySelector(""), and using it when toggle gets blur
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse("hide");
		}
	});
	$("#navbarToggle").click(function (event) {
		$(event.target).focus();
	});
});

// // Dunamic Loading of Home Page 
// (function (global) {

// 	var dc = {};

// 	var homeHtml = "snippets/home-snippet.html";
// 	//Convenience function for inserting innerHTML for 'select'
// 	var insertHtml = function(selector, html) {
// 		var targetElem = document.querySelector(selector);
// 		targetElem.innerHTML = html;
// 	}

// 	//Show loading icon inside element identified by 'selector'
// 	var showLoading = function (selector) {
// 		var html = "<div class = 'text-center'>";
// 		html += "<img src = 'images/ajax-loader.gif'></div>";
// 		insertHtml(selector, html);
// 	}

// 	document.addEventListener("DOMContentLoaded", function(event){

// 		//On first load, show home view
// 		showLoading("main-content");
// 		$ajaxUtils.sendGetRequest(
// 			homeHtml,
// 			function (responseText) {
// 			document.querySelector("main-content")
// 			.innerHTML - responseText;
// 			}
// 			false);
// 	});
// 	global.$dc = dc; //to provide it global access

// })(window);

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


global.$dc = dc;

})(window);