




$(document).ready(function($) {
	// init controller
	var controller = new ScrollMagic();

	// build tween
	// var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

	// build scene
	// var scene = new ScrollScene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
					//.setTween(tween)
					//.addTo(controller);
					

	var dur = ($(window).height()/3);
	var durCountdown = ($(window).height()*8);

// build scene
var scene = new ScrollScene({triggerElement: "#countdown", duration: ((durCountdown)-(200)), offset: 0 })
	.setPin("#counter", {pushFollowers: false})	
	.addTo(controller);	
	
	
// build tween
var tween = TweenMax.fromTo("#counter", 0.5, 
		{text:"2014"},
		{text:"113", ease:Power3.easeInOut}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#build-days", duration: dur, offset: 0 })
	.setTween(tween)
	.addTo(controller);
// build tween
var tween = TweenMax.fromTo("#counter", 0.5, 
		{text:"113"},
		{text:"328", ease:Power3.easeInOut}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#total-riders", duration: dur, offset: 0 })
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);
// build tween
var tween = TweenMax.fromTo("#counter", 0.5, 
		{text:"328"},
		{text:"387", ease:Power3.easeInOut}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#grants-recieved", duration: dur, offset: 0 })
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);
// build tween
var tween = TweenMax.fromTo("#counter", 0.5, 
		{text:"387"},
		{text:"4,986", ease:Power3.easeInOut}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#average-dollars", duration: dur, offset: 0 })
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);
// build tween
var tween = TweenMax.fromTo("#counter", 0.5, 
		{text:"4,986"},
		{text:"24,500", ease:Power3.easeInOut}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#build-hours", duration: dur, offset: 0 })
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);
// build tween
var tween = TweenMax.fromTo("#counter", 0.5, 
		{text:"24,500"},
		{text:"613,264", ease:Power3.easeInOut}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#dollars-granted", duration: dur, offset: 0 })
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);
// build tween
var tween = TweenMax.fromTo("#counter", 0.5, 
		{text:"613,264"},
		{text:"1,049,000", ease:Power3.easeInOut}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#miles-pedaled", duration: dur, offset: 0 })
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);
	
	
	

	// build tween
	var tween = TweenMax.fromTo("#build-days-info", 0.5, 
			{scale:.25, opacity:.25},
			{scale: 1, opacity: 1}
		);
	// build scene
	var scene = new ScrollScene({triggerElement: "#build-days", duration: dur, offset: 0 })
		.setTween(tween)
		//.setPin("#build-days-info", {pushFollowers: true})
		.addTo(controller);
	
	//build tween
	var tween = TweenMax.fromTo("#total-riders-info", 0.5, 
			{scale:.25},
			{scale: 1}
		);
	// build scene
	var scene = new ScrollScene({triggerElement: "#total-riders", duration: dur, offset: 0})
		.setTween(tween)
		//.setPin("#build-days-info", {pushFollowers: false})
		.addTo(controller);

	// build tween
	var tween = TweenMax.fromTo("#grants-recieved-info", 0.5, 
			{scale:.25},
			{scale: 1}
		);
	// build scene
	var scene = new ScrollScene({triggerElement: "#grants-recieved", duration: dur, offset: 0})
		.setTween(tween)
		//.setPin("#build-days-info", {pushFollowers: false})
		.addTo(controller);	
	
// build tween
var tween = TweenMax.fromTo("#average-dollars-info", 0.5, 
		{scale:.25},
		{scale: 1}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#average-dollars", duration: dur, offset: 0 })
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);

//build tween
var tween = TweenMax.fromTo("#build-hours-info", 0.5, 
		{scale:.25},
		{scale: 1}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#build-hours", duration: dur, offset: 0})
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);

// build tween
var tween = TweenMax.fromTo("#dollars-granted-info", 0.5, 
		{scale:.25},
		{scale: 1}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#dollars-granted", duration: dur, offset: 0})
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);	

// build tween
var tween = TweenMax.fromTo("#miles-pedaled-info", 0.5, 
		{scale:.5},
		{scale: 1}
	);
// build scene
var scene = new ScrollScene({triggerElement: "#miles-pedaled", duration: dur, offset: 0})
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);		





// build tween
var tween = TweenMax.fromTo(".ga-item", 0.5, 
		{scale:.5},
		{scale: 1}
	);
	
// build scene
var scene = new ScrollScene({triggerElement: "#accomplishments-grantee", duration: dur, offset: 0})
	.setTween(tween)
	//.setPin("#build-days-info", {pushFollowers: false})
	.addTo(controller);		
	
	
	
	
	/* EXPAND FULL SCREEN DOCS*/
	
	window.onload = function(){
	// TweenLite.to("#scholarships", 10, {left:-100});
	}
					
	
	
	
	
	
	
	/* SCROLL WINDOW ANIMATION */
					

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

	// show indicators (requires debug extension)
	//scene.addIndicators();
});