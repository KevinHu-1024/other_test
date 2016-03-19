(function banner() {
	var i = 0;
	var imgs = $("div.banner-left");
	var ctrls = $("div.banner-right")[0];
	var current = $("span.banner-ctrl-current")[0];
	ctrls.onmouseover = function (e) {
		if (e.target.className == "banner-ctrl") {
			window.clearInterval(bannerTimer);
			jump($(e.target).index()-1);
		}
	};
	ctrls.onmouseout = function (e) {
		if (e.target.className == "banner-ctrl") {
			bannerTimer = window.setInterval(function () {
					jump(i+1);
				}, 1000);
		}
	};
	var ary1 = [0, 55, 110];
	var ary2 = [0, -160, -320];
	function jump(index) {
		if (index>2) {index=0;}
		if (index<0) {index=2;}
		i = index;
		imgs.clearQueue();
		imgs.animate({top: ary2[index]+'px'}, 200);
		$(current).clearQueue();
		$(current).animate({top: ary1[index]+'px'}, 200);
	}
	var bannerTimer = window.setInterval(function () {
		jump(i+1);
	}, 1000);
})();