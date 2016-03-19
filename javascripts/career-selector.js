(function careerSelector() {
    var box = $("div.career-box");

    box.bind("mouseenter", function (e) {
        $($(this).children()[0]).addClass("career-list-out");
        $($(this).children()[1]).addClass("push-out");
	});
	box.bind("mouseleave", function (e) {
        $($(this).children()[0]).removeClass("career-list-out");
        $($(this).children()[1]).removeClass("push-out");
	});
})();