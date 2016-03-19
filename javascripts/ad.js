(function ad() {
	var adMasks = $("li.ad-box");
	$(adMasks).bind("mouseenter", function (e) {
		if (e.target.className == "ad-box") {
			var flag = testMouse(e);
			var a = $(e.target).children("div.ad-mask")[0];
			$(a).clearQueue();
			switch(flag) {
				case "left": $(a).animate({left:"0px"}, 200);break;
				case "right": $(a).css({top: "0px", left: "114px"}).animate({left:"0px"}, 200);break;
				case "top": $(a).css({top: "-114px", left: "0px"}).animate({top:"0px"}, 200);break;
				case "bottom": $(a).css({top: "114px", left: "0px"}).animate({top:"0px"}, 200);break;
			}
		}
	});
	$(adMasks).bind("mouseleave", function (e) {
		if (e.target.className == "ad-box") {
			var flag = testMouse(e);
			var a = $(e.target).children("div.ad-mask")[0];
			$(a).clearQueue();
			switch(flag) {
				case "left": $(a).animate({top:"0px", left:"-114px"}, 200, function () {
						$(a).css({top: "0px", left: "-114px"});
							});break;
				case "right": $(a).animate({top:"0px", left:"114px"}, 200, function () {
						$(a).css({top: "0px", left: "-114px"});
							});break;
				case "top": $(a).animate({top:"-114px", left:"0px"}, 200, function () {
						$(a).css({top: "0px", left: "-114px"});
							});break;
				case "bottom": $(a).animate({top:"114px", left:"0px"}, 200, function () {
						$(a).css({top: "0px", left: "-114px"});
							});break;
			}
		}
	});
	function testMouse(event) {
		a=event.pageX-$(event.target).offset().left;
		b=event.pageY-$(event.target).offset().top;
		console.log(a, b);
		var ary = [Math.abs(a-0), Math.abs(a-114), Math.abs(b-0), Math.abs(b-114)];
		var dis = ary.indexOf(Math.min.apply(null, ary));
		console.log(ary, ary[dis]);
		switch (dis) {
			case 0: console.log("left");return "left";
			case 1: console.log("right");return "right";
			case 2: console.log("top");return "top";
			case 3: console.log("bottom");return "bottom"; 
		}
	}
})();
