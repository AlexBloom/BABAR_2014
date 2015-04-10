// Avoid `console` errors in browsers that lack a console.
function Swipe(e,t){"use strict";function h(){o=s.children;f=o.length;o.length<2&&(t.continuous=!1);if(i.transitions&&t.continuous&&o.length<3){s.appendChild(o[0].cloneNode(!0));s.appendChild(s.children[1].cloneNode(!0));o=s.children}u=new Array(o.length);a=e.getBoundingClientRect().width||e.offsetWidth;s.style.width=o.length*a+"px";var n=o.length;while(n--){var r=o[n];r.style.width=a+"px";r.setAttribute("data-index",n);if(i.transitions){r.style.left=n*-a+"px";g(n,l>n?-a:l<n?a:0,0)}}if(t.continuous&&i.transitions){g(v(l-1),-a,0);g(v(l+1),a,0)}i.transitions||(s.style.left=l*-a+"px");e.style.visibility="visible"}function p(){t.continuous?m(l-1):l&&m(l-1)}function d(){t.continuous?m(l+1):l<o.length-1&&m(l+1)}function v(e){return(o.length+e%o.length)%o.length}function m(e,n){if(l==e)return;if(i.transitions){var s=Math.abs(l-e)/(l-e);if(t.continuous){var f=s;s=-u[v(e)]/a;s!==f&&(e=-s*o.length+e)}var h=Math.abs(l-e)-1;while(h--)g(v((e>l?e:l)-h-1),a*s,0);e=v(e);g(l,a*s,n||c);g(e,0,n||c);t.continuous&&g(v(e-s),-(a*s),0)}else{e=v(e);b(l*-a,e*-a,n||c)}l=e;r(t.callback&&t.callback(l,o[l]))}function g(e,t,n){y(e,t,n);u[e]=t}function y(e,t,n){var r=o[e],i=r&&r.style;if(!i)return;i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=n+"ms";i.webkitTransform="translate("+t+"px,0)"+"translateZ(0)";i.msTransform=i.MozTransform=i.OTransform="translateX("+t+"px)"}function b(e,n,r){if(!r){s.style.left=n+"px";return}var i=+(new Date),u=setInterval(function(){var a=+(new Date)-i;if(a>r){s.style.left=n+"px";w&&S();t.transitionEnd&&t.transitionEnd.call(event,l,o[l]);clearInterval(u);return}s.style.left=(n-e)*(Math.floor(a/r*100)/100)+e+"px"},4)}function S(){E=setTimeout(d,w)}function x(){w=0;clearTimeout(E)}var n=function(){},r=function(e){setTimeout(e||n,0)},i={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(e.style[t[n]]!==undefined)return!0;return!1}(document.createElement("swipe"))};if(!e)return;var s=e.children[0],o,u,a,f;t=t||{};var l=parseInt(t.startSlide,10)||0,c=t.speed||300;t.continuous=t.continuous!==undefined?t.continuous:!0;var w=t.auto||0,E,T={},N={},C,k={handleEvent:function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":r(this.end(e));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":r(this.transitionEnd(e));break;case"resize":r(h.call())}t.stopPropagation&&e.stopPropagation()},start:function(e){var t=e.touches[0];T={x:t.pageX,y:t.pageY,time:+(new Date)};C=undefined;N={};s.addEventListener("touchmove",this,!1);s.addEventListener("touchend",this,!1)},move:function(e){if(e.touches.length>1||e.scale&&e.scale!==1)return;t.disableScroll&&e.preventDefault();var n=e.touches[0];N={x:n.pageX-T.x,y:n.pageY-T.y};typeof C=="undefined"&&(C=!!(C||Math.abs(N.x)<Math.abs(N.y)));if(!C){e.preventDefault();x();if(t.continuous){y(v(l-1),N.x+u[v(l-1)],0);y(l,N.x+u[l],0);y(v(l+1),N.x+u[v(l+1)],0)}else{N.x=N.x/(!l&&N.x>0||l==o.length-1&&N.x<0?Math.abs(N.x)/a+1:1);y(l-1,N.x+u[l-1],0);y(l,N.x+u[l],0);y(l+1,N.x+u[l+1],0)}}},end:function(e){var n=+(new Date)-T.time,r=Number(n)<250&&Math.abs(N.x)>20||Math.abs(N.x)>a/2,i=!l&&N.x>0||l==o.length-1&&N.x<0;t.continuous&&(i=!1);var f=N.x<0;if(!C)if(r&&!i){if(f){if(t.continuous){g(v(l-1),-a,0);g(v(l+2),a,0)}else g(l-1,-a,0);g(l,u[l]-a,c);g(v(l+1),u[v(l+1)]-a,c);l=v(l+1)}else{if(t.continuous){g(v(l+1),a,0);g(v(l-2),-a,0)}else g(l+1,a,0);g(l,u[l]+a,c);g(v(l-1),u[v(l-1)]+a,c);l=v(l-1)}t.callback&&t.callback(l,o[l])}else if(t.continuous){g(v(l-1),-a,c);g(l,0,c);g(v(l+1),a,c)}else{g(l-1,-a,c);g(l,0,c);g(l+1,a,c)}s.removeEventListener("touchmove",k,!1);s.removeEventListener("touchend",k,!1)},transitionEnd:function(e){if(parseInt(e.target.getAttribute("data-index"),10)==l){w&&S();t.transitionEnd&&t.transitionEnd.call(e,l,o[l])}}};h();w&&S();if(i.addEventListener){i.touch&&s.addEventListener("touchstart",k,!1);if(i.transitions){s.addEventListener("webkitTransitionEnd",k,!1);s.addEventListener("msTransitionEnd",k,!1);s.addEventListener("oTransitionEnd",k,!1);s.addEventListener("otransitionend",k,!1);s.addEventListener("transitionend",k,!1)}window.addEventListener("resize",k,!1)}else window.onresize=function(){h()};return{setup:function(){h()},slide:function(e,t){x();m(e,t)},prev:function(){x();p()},next:function(){x();d()},getPos:function(){return l},getNumSlides:function(){return f},kill:function(){x();s.style.width="auto";s.style.left=0;var e=o.length;while(e--){var t=o[e];t.style.width="100%";t.style.left=0;i.transitions&&y(e,0,0)}if(i.addEventListener){s.removeEventListener("touchstart",k,!1);s.removeEventListener("webkitTransitionEnd",k,!1);s.removeEventListener("msTransitionEnd",k,!1);s.removeEventListener("oTransitionEnd",k,!1);s.removeEventListener("otransitionend",k,!1);s.removeEventListener("transitionend",k,!1);window.removeEventListener("resize",k,!1)}else window.onresize=null}}}(function(){var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};while(r--){e=n[r];i[e]||(i[e]=t)}})();(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>";r.appendChild(s.childNodes[1])}t&&e.extend(n,t);return this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var r=".fitvidsignore";n.ignore&&(r=r+", "+n.ignore);var i=e(this).find(t.join(","));i=i.not("object object");i=i.not(r);i.each(function(){var t=e(this);if(t.parents(r).length>0)return;if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)return;if(!t.css("height")&&!t.css("width")&&(isNaN(t.attr("height"))||isNaN(t.attr("width")))){t.attr("height",9);t.attr("width",16)}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),s=n/i;if(!t.attr("id")){var o="fitvid"+Math.floor(Math.random()*999999);t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",s*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);(window.jQuery||window.Zepto)&&function(e){e.fn.Swipe=function(t){return this.each(function(){e(this).data("Swipe",new Swipe(e(this)[0],t))})};window.granteeProfiles=e("#grantee-profiles").Swipe().data("Swipe");window.accNum=e("#accomplishments-numbers").Swipe().data("Swipe");var t=e("#accomplishments-nav li");t.on("click",function(){window.accNum.slide(e(this).index()+0,200);e(this).siblings().removeClass("selected");e(this).addClass("selected");if(accNum.getPos()==8){e("#accNumNext").addClass("hidden");e("#skip-moreAcc").removeClass("hidden")}else{e("#accNumNext").removeClass("hidden");e("#skip-moreAcc").addClass("hidden")}});e("#skip-moreAcc").addClass("hidden");e("#accNumPrev").on("click",function(){accNum.prev();t.removeClass("selected");t.eq(accNum.getPos()-0).addClass("selected")});e("#accNumNext").on("click",function(){accNum.next();t.removeClass("selected");t.eq(accNum.getPos()-0).addClass("selected");if(accNum.getPos()==8){e("#accNumNext").addClass("hidden");e("#skip-moreAcc").removeClass("hidden")}else{e("#accNumNext").removeClass("hidden");e("#skip-moreAcc").addClass("hidden")}});var n=e("#grantee-nav li");n.on("click",function(){window.granteeProfiles.slide(e(this).index()+0,200);e(this).siblings().removeClass("selected");e(this).addClass("selected")});e("#granteePrev").on("click",function(){granteeProfiles.prev();n.removeClass("selected");n.eq(granteeProfiles.getPos()-0).addClass("selected")});e("#granteeNext").on("click",function(){granteeProfiles.next();n.removeClass("selected");n.eq(granteeProfiles.getPos()-0).addClass("selected")})}(window.jQuery||window.Zepto);