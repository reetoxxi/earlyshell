
$(document).ready(function(){
	// var setWidth = function(width){
	// 	var pagecount = $('.page').length;
	// 	$('#book').width(width * pagecount);

	// 	$('.page').each(function(i){
	// 		$(this).width(width);
	// 		$(this).offset({'left':width * ($(this).attr('page')-1)}); //Horizontal Pager
	// 	});
	// };

	var setHeight = function(height){
		// console.log(height);
		$('.main-page').height(height);
		$('.page').css({'min-height':height+'px'});
	};

	//setWidth(window.innerWidth);
	setHeight(window.innerHeight);

	$(window).on('orientationchange resize',function(){
		setTimeout(function(){
			// setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		},250);
	});
	//Added setTimeout. Listener executes first, hence the need to delay.
	
});