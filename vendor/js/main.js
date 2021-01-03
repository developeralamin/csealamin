$(document).ready(function(){
	
	      // scroll bar js
		 // scroll bar js
		 $('.scroll-bar a').click(function(){
			  $('html,body').animate({
			  scrollTop:0
			},2000);
			return false;
			 
		 });	
		 
		 $(window).scroll(function(){
			  if($(window).scrollTop()>1500){
				   $('.scroll-bar a').fadeIn(2000);
			 }else{
				 $('.scroll-bar a').fadeOut(2000);
			 }
			 
		 });	
		 
	 // sticky navbar
	 // sticky navbar
	 $(window).on('scroll',function() {    
				   var scroll = $(window).scrollTop();
				   if (scroll <60) {
					$(".header_area").removeClass("sticky");
				   }else{
					$(".header_area").addClass("sticky");
				   }
	});
   // setTimeout function(){
		// $('.loader_bg')fadeToggle();
	// },1500);
	
	
	  // one pagenav
	 // one pagenav	
	  $('#kajkorvai').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
		
	});	
	
	 // // preloader js
    // $(window).load(function() { // makes sure the whole site is loaded
		// $('#preloader_spinner').fadeOut(); // will first fade out the loading animation
		// $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		// // $('body').delay(150).css({'overflow':'visible'})
    // })
	
	
	     // Skill area 
        // Skill area 
         $('#bar1').barfiller({
	      barColor: "#1abc9c",
		  duration: 2000
	   
	   });
	   
	    $('#bar2').barfiller({
	      barColor: "#1abc9c",
		  duration: 2000
	   
	   });
	   
	    $('#bar3').barfiller({
	      barColor: "#1abc9c",
		  duration: 2000
	   
	   });
	   
	    $('#bar4').barfiller({
	      barColor: "#1abc9c",
		  duration: 2000
	   
	   });
	   	    $('#bar5').barfiller({
	      barColor: "#1abc9c",
		  duration: 2000
	   
	   });
	      
    /*----------------------------------------------------*/
    /*  Skill js
    /*----------------------------------------------------*/
    $(".").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
	   
		 
		 // Scroll js
		// Scroll js
		
		$.scrollIt({
		  upKey: 38,             // key code to navigate to the next section
		  downKey: 40,           // key code to navigate to the previous section
		  easing: 'linear',      // the easing function for animation
		  scrollTime: 600,       // how long (in ms) the animation takes
		  activeClass: 'active', // class given to the active nav element
		  onPageChange: null,    // function(pageIndex) that is called when page is changed
		}); 
	
	
});