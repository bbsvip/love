/*
 * http://www.mycodes.net
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var date_ini = new Date();
	date_ini.setFullYear(2022);
	date_ini.setMonth(1 - 1);
	date_ini.setDate(15);
	date_ini.setHours(0);
	date_ini.setMinutes(0);
	var date_ini  = date_ini.getTime() / 1000;
    var today = new Date();
    today = today.getTime() / 1000;
    var diff  = Math.abs(today - date_ini);
    var diff_hour = diff / (60 * 60);
    var days = Math.round(diff_hour / 24);
    var hours = Math.round((diff % (60 * 60 * 24)) / (60 * 60));


	var result = "<span class=\"digit\">" + days + "</span> ngày <span class=\"digit\">" + hours + "</span> giờ";
	$("#clock").html(result);
}
