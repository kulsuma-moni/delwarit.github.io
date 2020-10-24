
(function($){
    "use strict";
    

    // PRELOADER JS CODE
        $(window).on('load',function(){
            $(".loader_box").fadeOut(500);
            });
    // END PRELOADER JS CODE

     // RESPONSIVE MAIN MENU JS
	 $(document).ready(function () {
		$('.menu').meanmenu();
		});
	
    //   END RESPONSIVE MAIN MENU JS
    
    	  // data-background
			$("[data-background]").each(function(){
				$(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
			});
		

	// WOW Js Active
    new WOW().init();

    // Sticky Menu
        $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100){
        $('.main_menu').addClass('menu-shrink animated slideInDown');
        } else {
        $('.main_menu').removeClass('menu-shrink animated slideInUp');
        }
    });
	

    // Smoth scroll
    $('.menu li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50}, 1000);
        e.preventDefault();
        });

    // SCROLL DOWN INDICATOR
        $('.scroll_down').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $('.courses_area').offset().top}, 500, 'linear');
        });

		//   TO-TOP
        $('.to-top').toTop({
            //options with default values
            autohide: true,  //boolean 'true' or 'false'
            offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
            speed: 400,      //numeric value (as mili-seconds) for duration
            position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
            left: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
            bottom: 30       //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
        });

        // CounterUp sec about us page
		$('#count-box').animationCounter({
			start: 0,
			end:2000,
			step: 60,
			delay:100,
			txt: '+'
		  });
		  $('#count-box2').animationCounter({
			start: 2,
			end:500,
			step: 10,
			delay:100,
		  });
		  $('#count-box3').animationCounter({
			start: 0,
			end: 4000,
			step: 100,
			delay: 100
		  });
		  $('#count-box4').animationCounter({
			start: 0,
			end: 100,
			step: 1,
			delay: 100,
			txt: '%'
          });
        
		//   Branding sec about us page
	
        $('.brand_slider').slick({
            dots: false,
            arrows:false,
            infinite: true,
            speed: 600,
            autoplay:true,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            }
            ]
        });
    // ARTICAL INNER PAGE FILTER
        $('.grid').isotope({
            itemSelector: '.grid-item',
          });
          
          // filter items on button click
          $('.filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $('.filter-button-group button').removeClass('active');
            $(this).addClass('active');
          });

    // PORTFOLIO INNER PAGE FILTER
    $('.grid').isotope({
        itemSelector: '.grid-item',
        });
        
        // filter items on button click
        $('.portfolio_button_group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.portfolio_button_group button').removeClass('active');
        $(this).addClass('active');
        });

     //----MAGNIFIC POPUP-------//
    $('.video_popup').magnificPopup({
    	type:'iframe',
    	iframe: {

 		 patterns: {
    	   youtube: {
      		index: 'youtube.com/',
			id: 'v=', 
			src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
    	},
  		},
 	 	srcAction: 'iframe_src', 
	    }
    });

})(jQuery);