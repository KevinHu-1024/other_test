(function indexCareer() {
	// console.dir($("li.selector"));
	var selectors = $("li.selector");
	selectors.bind("click", function () {
		$(this).addClass("current");
		var a = $(this).siblings()[0];
		$(a).removeClass("current");
	});
})();