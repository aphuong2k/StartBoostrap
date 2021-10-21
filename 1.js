 $(function(){
	 $(window).scroll(function(){
	 	var vitri = $('html').scrollTop();
	 	var a = $(window).width();

	 	if(vitri > 50 && a>768){
	 		$('.navbar-fixed-top').addClass('thaydoi');
	 	}
	 	if(vitri < 50 || a<768){
	 		$('.navbar-fixed-top').removeClass('thaydoi');
	 	}
	 })

	 $(window).resize(function(){
		 var docao = $(window).height();
		 $('.nen1').css({'height':docao})
	 })

	 $('.n1').click(function(){
	 	$('html').animate({scrollTop:$('.nen2').offset().top},1000);
	 })

	 $('.n2').click(function(){
	 	$('html').animate({scrollTop:$('.nen3').offset().top},1000);
	 }) 

	 $('.n3').click(function(){
	 	$('html').animate({scrollTop:$('.nen4').offset().top},1000);
	 })

	 $('.navbar-brand').click(function(){
	 	$('html').animate({scrollTop:$('.nen1').offset().top},1000);
	 })

	 $('.nen1 a.btn.btn-default').click(function(){
	 	$('html').animate({scrollTop:$('.nen2').offset().top},1000);
	 	return false;
	 })
})  
 