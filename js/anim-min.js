$(document).ready(function(e){var t=new ScrollMagic,n=e(window).height()/3,r=e(window).height()*8;t.scrollTo(function(e){TweenMax.to(window,.5,{scrollTo:{y:e}})});e(document).on("click","a[href^=#]",function(n){var r=e(this).attr("href");if(e(r).length>0){n.preventDefault();t.scrollTo(r);window.history&&window.history.pushState&&history.pushState("",document.title,r)}})});