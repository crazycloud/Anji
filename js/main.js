(function($) {
  
    var App = {
 
    /**
    * Init Function
    */
    init: function() {
        App.HomeOpacity();
       App.Preloader();
/*       
	   App.ScrollToContact();
        App.ScrollBack();
 
        
        App.Carousel();
        App.Lightbox();*/
    },

  Preloader: function() {
        $(window).load(function(){ 
		/*$('#preloader').delay(500).fadeOut('slow'); */
            $('body').delay(500).css({'overflow':'visible'});
            setTimeout(function(){$('#header-text').addClass('animated fadeInDown')},700);
            setTimeout(function(){$('#home_image').addClass('animated fadeInUp')},900);
			 setTimeout(function(){$('#home_image1').addClass('animated bounceIn')},2000);
        })
    },
 
    HomeOpacity: function() {
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#home-header').css('opacity', (1-st/h) );
        });
    },


 }

$(function() {
  App.init();
  });


})(jQuery);