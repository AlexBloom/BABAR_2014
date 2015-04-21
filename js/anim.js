$(document).ready(function($) {
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
});