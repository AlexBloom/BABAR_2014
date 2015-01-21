function stickyTitles(stickies) {
	this.load = function() {
		stickies.each(function(){
			var thisSticky = jQuery(this).wrap('<div class="followWrap" />');
			thisSticky.parent().height(thisSticky.outerHeight());
			jQuery.data(thisSticky[0], 'pos', thisSticky.offset().top);
		});
	}	
	this.scroll = function() {
		stickies.each(function(i){					
			var thisSticky = jQuery(this),
				nextSticky = stickies.eq(i+1),
				prevSticky = stickies.eq(i-1),
				pos = jQuery.data(thisSticky[0], 'pos');	
			if (pos <= jQuery(window).scrollTop()) {			
				thisSticky.addClass("fixed");			
				if (nextSticky.length > 0 && thisSticky.offset().top >= jQuery.data(nextSticky[0], 'pos') - thisSticky.outerHeight()) {				
					thisSticky.addClass("absolute").css("top", jQuery.data(nextSticky[0], 'pos') - thisSticky.outerHeight());
				}
			} else {
				thisSticky.removeClass("fixed");
				if (prevSticky.length > 0 && jQuery(window).scrollTop() <= jQuery.data(thisSticky[0], 'pos')  - prevSticky.outerHeight()) {
					prevSticky.removeClass("absolute").removeAttr("style");
				}				
			}
		});			
	}
}




$('#toc').addClass('fixed');

$(document).ready(function(){
    // Open Navigation on Toggle
	
	// Fire LocalScroll
	$('body').localScroll();
	
	$("#toggle").click(function(){
		$("#toc").toggleClass('open');
		$(this).toggleClass('active');
		//$('body').toggleClass('overflow-hidden');
	});

	// Size Full-Screen Videos, Images, & Slideshows to window height.
	$('.full-screen').css('min-height',$(window).height());
	$('.tab-content').css('height',$(window).height());
	$('.article-slider').css('min-height',$(window).height());

	$(window).resize(function() {
		$('.full-screen').css('min-height',$(window).height());
		$('.tab-content').css('height',$(window).height());
		$('.article-slider').css('min-height',$(window).height());
	});
	
    // Show and Play Full Screen Videos
    //	$(".play-video").click(function(){
    //		$('.video-overlay').css("display","block");
    //		$('#header').css("display","none");
    //	});
    //
    //	$(".close-video").click(function(){
    //		$('.video-overlay').css("display","none");
    //		$('#header').css("display","block");
    //	});
   
	
	// Open Overlay Windows
	
	//Open Per ID
	$('#open-letter-window').click(function (){
		$('#Letter').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	
	$('#open-accomplishments-window').click(function (){
		$('#More-Accomplishments').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	$('#open-cause-window').click(function (){
		$('#Cause').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	$('#open-routes-window').click(function (){
		$('#Routes').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	$('#open-grantee-window').click(function (){
		$('#Grantee').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	
	
	//Global close	
	$('.close-window').click(function (){
		$('.window').removeClass('open');
		$('body').removeClass('overflow-hidden');
	});
	
	
	
	//Fire Swipe Classes for Sliders
	window.orgfigures = $('#orgfigures').Swipe().data('Swipe');
	window.grantacc = $('#grantacc').Swipe().data('Swipe');
	//window.highlightedgrantees = $('#highlighted-grantees').Swipe().data('Swipe');
      

	// TABS Initiations
	  
		   $('#Accomplishments-Tabs a').click(function (e) {
		     e.preventDefault()
		     $(this).tab('show')
		   })
	   
		   $('#rider-tabs a').click(function (e) {
		     e.preventDefault()
		     $(this).tab('show')
		   })
	   
		   $('#alumni-tabs a').click(function (e) {
		     e.preventDefault()
		     $(this).tab('show')
		   })
		   // You can activate individual tabs in several ways:
		   // 
		   // $('#myTab a[href="#profile"]').tab('show') // Select tab by name
		   // $('#myTab a:first').tab('show') // Select first tab
		   // $('#myTab a:last').tab('show') // Select last tab
		   // $('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)


	// Active Link Highlighting

	 // Add Current Class to ScrollNav of Currently Depressed Item
	  	$('.scrollnav-link').click(function() {
	  		$('.scrollnav-link').removeClass('current');
	  		$(this).addClass('current');
	  	});	   
	
	
	
	
	

	$('#Intro').css('height',$(window).height());
	
	// FitVids Video Containers.
    $("article").fitVids();
	
	//Initiate Sticky Headers
		var newStickies = new stickyTitles(jQuery(".sticky"));
		newStickies.load();
		$(window).on("scroll", function() {
			newStickies.scroll();
		});
		
		$(window).resize(function(){
			
			$('#Intro').css('height',$(window).height());
			
			//newStickies.load();
			//$(window).on("scroll", function() {
			//	newStickies.scroll();
			//});
		});	

  }); // Close Doc Ready Function
