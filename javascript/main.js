$(function(){

	$(".gnav__btn_smart").on("click", function(){
		var rightVal = 0;
		if($(this).hasClass("open")) {
			rightVal = -200;
			$(this).removeClass("open");
		} else {
			$(this).addClass("open");
		}

		$("#gnav__global_smart").stop().animate({
			right: rightVal
		}, 200);
	});

	var _window = $(window),
	  _header = $('.site-header'),
	  heroBottom;

	_window.on('scroll',function(){
	  heroBottom = $('.hero').height();
	  if(_window.scrollTop() > heroBottom){
	    _header.addClass('transform');
	  }
	  else{
	    _header.removeClass('transform');
	  }
	});

	_window.trigger('scroll');
});
