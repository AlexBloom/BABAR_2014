$('#toc').addClass('fixed');

$(document).ready(function(){
    //Sticky Headers
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
	
	// Open Navigation with Toggle
	$("#toggle").click(function(){
		$("#toc").toggleClass('open');
		$(this).toggleClass('active');
	});
	// Close Nav on Local Link Click
	$("#toc a").click(function(){
		$("#toc").toggleClass('open');
		$('#toggle').toggleClass('active');
	});

	// Open Overlay Window Content	
	//Open Individual Windows By ID
	$('#open-letter-window').click(function (){
		$('#Letter').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	$('#open-coastal-drift-window').click(function (){
		$('#coastal-drift').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	$('#open-scholarships-window').click(function (){
		$('#scholarships').addClass('open');
		$('#scholarship-placeholder').addClass('activated');
		//$('body').addClass('overflow-hidden');
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
	$('#open-alumni-window').click(function (){
		$('#alumni-spotlight').addClass('open');
		$('body').addClass('overflow-hidden');
	});
	
	//Globally Close Windows with Class	
	$('.close-window').click(function (){
		$('.window').removeClass('open');
		$('body').removeClass('overflow-hidden');
		$('.window-placeholder').removeClass('activated');
	});

	// Active Link Highlighting	
	 // Add Current Class to ScrollNav of Currently Depressed Item
	  	$('.scrollnav-link').click(function() {
	  		$('.scrollnav-link').removeClass('current');
	  		$(this).addClass('current');
	  	});	   

	
	// FitVids Video Containers.
    $("article").fitVids();
	
	//Initiate Sticky Headers
		var newStickies = new stickyTitles(jQuery(".sticky"));
		newStickies.load();
		
		$(window).resize(function(){			
			$('#Intro').css('height',$(window).height());
			newStickies.load();
		});	
		
		$(window).on("scroll", function() {
			newStickies.scroll();
		});

	// GSAP Animations
		
		// init controller
		var controller = new ScrollMagic();
		var dur = ($(window).height()/3);
		var durCountdown = ($(window).height()*8);

	/*  
	 * Scroll Window on Local Links
	 */	
		// change behaviour of controller to animate scroll instead of jump
		controller.scrollTo(function (newpos) {
			TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
		});

		//  bind scroll to anchor links
		$(document).on("click", "a[href^=#]", function (e) {
			var id = $(this).attr("href");
			if ($(id).length > 0) {
				e.preventDefault();

				// trigger scroll
				controller.scrollTo(id);

					// if supported by the browser we can even update the URL.
				if (window.history && window.history.pushState) {
					history.pushState("", document.title, id);
				}
			}
		});


  }); // Close Doc Ready Function
