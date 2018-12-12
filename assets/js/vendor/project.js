function t_throttle(e,t,o){var i,n;return t||(t=250),function(){var r=o||this,a=+new Date,s=arguments;i&&a<i+t?(clearTimeout(n),n=setTimeout(function(){i=a,e.apply(r,s)},t)):(i=a,e.apply(r,s))}}window.isSearchBot=!1,function(e){if($isMobile=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($isMobile=!0),/Bot/i.test(navigator.userAgent)&&(window.isSearchBot=!0),window.isMobile=$isMobile,1==$isMobile){var t=function(){for(var t=document.body.querySelectorAll(".t-cover__carrier"),o=e(window).height(),i=0,n=0,r=t.length;n<r;n++)(s=(a=t[n]).style).height.indexOf("vh")>-1&&(i=parseInt(s.height)/100,c=Math.round(o*i)+"px",(d=e(a).parent(".t-cover"))&&(d=d[0])&&(l=d.querySelector(".t-cover__filter"),h=d.querySelector(".t-cover__wrapper"),l&&(l.style.height=c),h&&(h.style.height=c),s.height=d.style.height=c));var a,s,c,d,l,h,u=document.body.querySelectorAll("[data-height-correct-vh]");for(o=e(window).height(),i=0,n=0,r=u.length;n<r;n++)(s=(a=u[n]).style).height.indexOf("vh")>-1&&(i=parseInt(s.height)/100,c=o+"px",d=e(a).parent(".t-cover"),s.height=c)};e(document).ready(function(){setTimeout(function(){t()},400)}),e(window).load(function(){setTimeout(function(){t()},400)})}1==$isMobile&&(e(window).width()<480?(e(document).ready(function(){var t;e("div[data-customstyle=yes]").each(function(t){e(this).css("font-size").replace("px","")>26&&(e(this).css("font-size",""),e(this).css("line-height",""))}),e("[field]").find("span").each(function(t){e(this).css("font-size").replace("px","")>26&&e(this).css("font-size","")}),e(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom").each(function(o){if(void 0!==(t=e(this).attr("style"))&&""!=t&&t.indexOf("font-size")>-1&&e(this).css("font-size").replace("px","")>26){var i=t.replace("font-size","fontsize").replace("line-height","lineheight");e(this).attr("style",i)}})}),e(window).load(function(){var t=e(window).width();e(".r").each(function(){var o=e(this);e(this).find("div").not("[data-auto-correct-mobile-width=false], .tn-elem, .tn-atom").each(function(){var i=parseInt(e(this).outerWidth(!0));i>t&&(console.log("Block not optimized for mobile width. Block width:"+i+" Block id:"+o.attr("id")),console.log(e(this)),o.css("overflow","auto"),i-3>t&&o.css("word-break","break-all"))})})})):e(window).width()<900&&e(document).ready(function(){var t;e("div[data-customstyle=yes]").each(function(t){e(this).css("font-size").replace("px","")>30&&(e(this).css("font-size",""),e(this).css("line-height",""))}),e("[field]").find("span").each(function(t){e(this).css("font-size").replace("px","")>30&&e(this).css("font-size","")}),e(".t-title, .t-name, .t-heading, .t-descr, .t-text, .t-subtitle").not(".tn-elem, .tn-atom").each(function(o){if(void 0!==(t=e(this).attr("style"))&&""!=t&&t.indexOf("font-size")>-1&&e(this).css("font-size").replace("px","")>30){var i=t.replace("font-size","fontsize").replace("line-height","lineheight");e(this).attr("style",i)}})}))}(jQuery),function(e){function t(){this.setScrollListener()}t.prototype.videoTags=[],t.prototype.defaultConfig={isNeedStop:!1},t.prototype.videoConfigs=[],t.prototype.registerNewVideo=function(e,t){if(!(e instanceof HTMLVideoElement))throw new Error("Wrong tag passed into registerNewVideo");return-1==this.videoTags.indexOf(e)&&(this.videoTags.push(e),this.videoConfigs.push(void 0===t?this.defaultConfig:t),this.scrollCb(),!0)},t.prototype.unergisterVideo=function(e){if(!(e instanceof HTMLVideoElement))throw new Error("Wrong tag passed into unregisterNewVideo");var t;return(t=this.videoTags.indexOf(e))>-1&&("function"==typeof e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e),this.pauseVideo(e,this.videoConfigs[t]),this.videoTags.splice(t,1),this.videoConfigs.splice(t,1),!0)},t.prototype.pauseVideo=function(e,t){if(!t)throw new Error("Wrong config type!");e.pause(),t.isNeedStop&&e.load()},t.prototype.setScrollListener=function(){e(window).bind("scroll",t_throttle(jQuery.proxy(this.scrollCb,this),200))},t.prototype.scrollCb=function(){for(var t=e(window).height(),o=null,i=0,n=this.videoTags.length;i<n;i++){if(o=this.videoTags[i],_vrect=this.getVideoBoundingRect(o,!1),Math.abs(_vrect.top)<t&&Math.abs(_vrect.top)>t/2){var r=1-(Math.abs(_vrect.top)-t/2)/(t/2)-.2;r>0&&r<=1&&0!=o.volume&&(o.volume=r)}Math.abs(_vrect.top)>t||0==_vrect.height?this.pauseVideo(o,this.videoConfigs[i]):o.paused&&o.play()}},t.prototype.getVideoObject=function(e){for(var t=0,o=this.videoTags.length;t>o;t++){var i=this.videoTags[t];if(i.v===e)return i}return null},t.prototype.getVideoBoundingRect=function(t,o){void 0===o&&(o=!0);var i=null;return o&&(i=e(t).parents(".r")[0])||(i=t),i.getBoundingClientRect()},window.videoLoadProcessor=new t}(jQuery),function(e){function t(){this.setScrollCb(),this.itemHeight=screen.availHeight;this.itemTransitionTop=.25*this.itemHeight,this.activeItemIndex=null,this.windowHeight=document.documentElement.clientHeight||window.innerHeight||screen.availHeight,this.topOffsetShift=-150,e(window).resize(jQuery.proxy(this.recalculateAllSequencesOffsets,this)),this._resizeInterval=setInterval(jQuery.proxy(this.scrollCb,this),500)}function o(t){var o,i=e("#rec"+t),n=i.find(".t-cover").height();(o=i.find("div[data-hook-content]").outerHeight())>300&&n<o+40&&((o=o+120)>1e3&&(o+=100),console.log("auto correct cover height: "+o),i.find(".t-cover").height(o),i.find(".t-cover__filter").height(o),i.find(".t-cover__carrier").height(o),i.find(".t-cover__wrapper").height(o),0==$isMobile&&setTimeout(function(){var e=i.find(".t-cover__carrier");e.find("iframe").length>0&&(console.log("correct video from cover_fixcontentheight"),r(e,o+"px")),e.find("video").length>0&&console.log("correct html5video from cover_fixcontentheight")},2e3))}function i(e,t,o,i){var n,r,a,s,c;n=e.offset().top,r=e.height(),a=t.scrollTop(),s=t.height(),c=o.getPlayerState(),a+s>n&&a<=n+r?(1!==c&&o.playVideo(),"yes"==i&&(a>n+r-100?o.setVolume(30):a>n+r-200?o.setVolume(70):a+s<n+200?o.setVolume(30):o.setVolume(100))):a+s<n&&a+s>n-500?2!==c&&(o.playVideo(),o.pauseVideo()):2!==c&&o.pauseVideo()}t.prototype.defaultConfig={orientation:"vertical",speedFactor:1,automated:!1},t.prototype.sequenceObjects=[],t.prototype.recalculateAllSequencesOffsets=function(){this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeInterval&&clearInterval(this._resizeInterval),this._resizeTimeout=setTimeout(jQuery.proxy(function(){this.scrollCb(),this._resizeInterval=setInterval(jQuery.proxy(this.scrollCb,this),500)},this),10)},t.prototype.registerNewBlock=function(e){if(!(e instanceof HTMLElement))throw new Error("Wrong node type in registerNewBlock");for(var t=0,o=this.sequenceObjects.length;t<o;t++)if(this.sequenceObjects[t].sequenceBlock===e)return!1;var i=e.querySelector('[data-hook="sequence-holder"]'),n=0,r=this.getAbsoluteTopOffset(i),a=function(){var t=Array.prototype.slice.call(e.querySelectorAll('[data-hook="sequence-item"]'),0),o=[];return t.forEach(jQuery.proxy(function(e,t,i){var r=this.getItemHeight(e),a=e.querySelector('[data-hook="item-background"]');e.style.height=r+"px",a.style.height=this.itemHeight+"px",t<i.length-1&&(n+=r),o.push({node:e,height:r,topOffset:this.getAbsoluteTopOffset(e.querySelector(".txt-holder"))-(t==i.length-1?0:this.topOffsetShift),backgroundHolder:a})},this)),o}.call(this),s=(this.itemHeight,{sequenceBlock:e,sequenceHolder:i,sequenceHolderTopOffset:r,sequenceHeight:n,items:a,started:!1,prevBackgroundColor:""});return this.sequenceObjects.push(s),this.scrollCb(),!0},t.prototype.getItemHeight=function(e){var t=e.querySelector("[data-hook='item-text']");e.querySelector("[data-hook='item-background']");st=e.style;var o=parseFloat(getComputedStyle(t).top);return t.style.top=o+"px",Math.max(t.clientHeight+o,this.itemHeight)},t.prototype.fixTextBlocksPosition=function(e){txtBlocks=Array.prototype.slice.call(e.querySelectorAll('[data-hook="item-text"]'),0),txtBlocks.forEach(function(e,t,o){e.parentNode.querySelector("[data-hook='item-background']").style.top="-"+e.clientHeight+"px"})},t.prototype.unergisterBlock=function(e){for(var t=0,o=this.sequenceObjects.length,i=null;t<o;t++)if(this.sequenceObjects[t].sequenceBlock===e){i=t;break}return null!==i&&(this.sequenceObjects.splice(i,1),!0)},t.prototype.getAbsoluteTopOffset=function(e){var t=e.offsetTop;for(e=e.offsetParent;null!=e;)t+=e.offsetTop,e=e.offsetParent;return t},t.prototype.processSequence=function(e){0==e.started&&(e.prevBackgroundColor=document.body.style.backgroundColor,document.body.style.backgroundColor="rgb(0, 0, 0)",e.started=!0);e.sequenceBlock,e.sequenceHolder;for(var t,o,i,n,r=e.items,a=null,s=0,c=r.length;s<c;s++)if((t=r[s].node).querySelector(".txt-holder"),(n=t.getBoundingClientRect()).top<this.itemTransitionTop&&n.bottom<n.height+this.itemTransitionTop&&n.bottom>this.itemTransitionTop){a=s;break}if(null!=a){(i=n.top/this.itemTransitionTop)>1?i=1:i<0&&(i=0);for(s=0,c=r.length;s<c;s++)t=r[s].node,"fixed"!=(o=r[s].backgroundHolder.style).position&&(o.position="fixed"),s==a?(o.opacity=1-i,t.querySelector(".txt-holder").style.opacity=1-i):s==a-1?(o.opacity=i,t.querySelector(".txt-holder").style.opacity=i):(o.opacity=0,t.querySelector(".txt-holder").style.opacity=0)}},t.prototype.stopSequence=function(e){0!=e.started&&(e.items.forEach(function(e,t,o){e.backgroundHolder.style.position="relative",e.backgroundHolder.style.display="block",e.backgroundHolder.style.opacity=1}),document.body.style.backgroundColor=e.prevBackgroundColor,e.started=!1)},t.prototype.scrollCb=function(){e(window).scrollTop();for(var t,o=0,i=this.sequenceObjects.length;o<i;o++){var n=(t=this.sequenceObjects[o]).sequenceHolder.getBoundingClientRect();n.top<0&&n.bottom>0&&n.bottom>n.height-t.sequenceHeight-100?this.processSequence(t):this.stopSequence(t)}},t.prototype.setScrollCb=function(){this._scrollCb=jQuery.proxy(this.scrollCb,this),e(window).bind("scroll",t_throttle(this._scrollCb,200))},window.sequenceController=new t,window.processVideo=function(t){mp4Src=e(t).attr("data-content-video-url-mp4"),webmSrc=e(t).attr("data-content-video-url-webm"),e(t).css("background-color","transparent"),e(t).css("background-image","");var o={mp4:mp4Src,webm:webmSrc,preload:"none",autoplay:!1,loop:!0,scale:!0,zIndex:0,width:"100%"};vid=e(t).videoBG(o),videoLoadProcessor.registerNewVideo(vid,{isNeedStop:!1})},window.cover_init=function(t){e(document).ready(function(){var i=document.body.querySelector("#coverCarry"+t),n=e(i),r=n.attr("data-content-cover-bg"),a=n.attr("data-content-cover-height"),s=n.attr("data-content-cover-parallax"),c=n.attr("data-content-video-url-mp4"),d=n.attr("data-content-video-url-webm"),l=n.attr("data-content-video-url-youtube"),h=n.attr("data-content-video-noloop"),u=n.attr("data-content-video-nomute"),p=n.attr("data-content-bg-base64"),f=n.attr("data-content-video-nocover");r||(r=""),a||(a=""),s||(s=""),c||(c=""),d||(d=""),l||(l=""),h||(h=""),u||(u=""),l||(l=""),p||(p=""),f&&"yes"==f&&(c="",d="",l=""),!$isMobile||""==d&&""==c&&""==l||n.css("background-image","url('"+r+"')"),setTimeout(function(){o(t)},500);var v=e("#rec"+t).find("img[data-hook-clogo]");if(v.length&&v.load(function(){setTimeout(function(){o(t)},500)}),$isMobile&&e(window).on("orientationchange",function(){o(t)}),(""!==c||""!==d||""!==l)&&0==$isMobile)if(""!=l||""==c&&""==d){if(""!=l){n.css("background-color","#000000"),n.css("background-image",""),n.attr("data-content-cover-bg","");b=0;(x=e(window)).scroll(function(){w&&window.clearTimeout(w),w=window.setTimeout(function(){var e,t,o;(b=n.find("iframe").length)>0||(e=n.offset().top,t=n.height(),(o=x.scrollTop())+x.height()>e-500&&o<=e+t+500&&processYoutubeVideo(i,a))},100)}),x.scroll()}}else{if(n.css("background-color","#000000"),n.css("background-image","url('https://tilda.ws/img/spinner-white.gif')"),n.css("background-size","auto"),n.attr("data-content-cover-bg",""),""!=h)var m=!1;else m=!0;if(""!=u)var g=1;else g="";var w,y="";"fixed"==s&&(a.indexOf("vh")>-1&&parseInt(a)>100&&(n.css("height","100vh"),y="yes"),a.indexOf("px")>-1&&parseInt(a)>e(window).height()&&(n.css("height","100vh"),y="yes"));var b="",x=e(window),T=n.parent();x.scroll(function(){var e,t,o;(w&&window.clearTimeout(w),w=window.setTimeout(function(){var e,t,o;if(!(b>0)&&(e=n.offset().top,t=n.height(),(o=x.scrollTop())+x.height()>e-500&&o<=e+t+500)){var i=n.videoBG({mp4:c,webm:d,poster:"",preload:"none",autoplay:!1,loop:m,volume:g,scale:!0,zIndex:0,width:"100%"});videoLoadProcessor.registerNewVideo(i),b=1}},100),"fixed"==s&&"yes"==y)&&(e=T.offset().top,t=T.height(),(o=x.scrollTop())>=e+t-x.height()?(n.css("position","absolute"),n.css("bottom","0px"),n.css("top","auto")):o>=e?(n.css("position","fixed"),n.css("top","0px")):o<e&&(n.css("position","relative"),n.css("top","auto")))}),x.scroll()}if("dynamic"==s&&0==$isMobile&&n.parallax("50%",.2,!0),"yes"==p&&""!=r&&""==c&&""==d&&""==l){e("<img/>").attr("src",r).load(function(){e(this).remove(),n.css("background-image","url('"+r+"')"),n.css("opacity","1")}),n.css("background-image",""),n.css("opacity","0"),n.css("transition","opacity 25ms")}var k=e("#rec"+t).find(".t-cover__arrow-wrapper");k.length>0&&k.click(function(){var o=e("#rec"+t).height();o>0&&e("html, body").animate({scrollTop:e("#rec"+t).offset().top+o},500)})})},e(document).ready(function(){e(".t-cover__carrier").each(function(){var t=e(this).attr("data-content-cover-id");t>0&&cover_init(t)})});var n=e.Deferred();function r(t,o){console.log("setWidthHeightYoutubeVideo:"+o);var i=t.find("iframe"),n=t.attr("data-content-video-nocover"),r=t.attr("data-content-video-noadcut-youtube"),a=t.attr("data-content-video-ratio"),s=.5625;if(a>0&&(s=1*parseFloat(a)),"yes"!=n){if(o||(o="100vh"),o.indexOf("vh")>-1){var c=window.innerHeight;c||(c=e(window).height());var d=Math.floor(c*(parseInt(o)/100))}else d=parseInt(o);var l=Math.floor(parseInt(window.innerWidth));l||(l=e(window).width());var h=l,u=y=l*s,p=y,f=1;if("yes"==r||(u=u+110+110,p=y-220),p<d)if(y<d)f=d/y+.02;else f=y/d+.02;var v=Math.floor(h*f),m=Math.floor(u*f),g=m-d,w=v-l;i.height(m+"px"),i.width(v+"px"),g>0&&i.css("margin-top",-Math.floor(g/2)+"px"),w>0&&i.css("margin-left",-Math.floor(w/2)+"px")}else{var y;o||(y=Math.floor(t.width()*s)),o&&o.indexOf("vh")>-1?y=Math.floor(window.innerHeight*(parseInt(o)/100)):o&&(y=parseInt(o)),i.css("width","100%"),i.height(y+"px")}}window.processYoutubeVideo=function(t,o){!function(){if("yes"!==window.loadytapi_flag){window.loadytapi_flag="yes";var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}();n.then(function(){var n,a=e(t),s=a.attr("data-content-video-url-youtube"),c=a.attr("data-content-video-nomute"),d=a.attr("data-content-video-noloop"),l=a.attr("data-content-video-nocover"),h=document.createElement("iframe");h.src=function(e,t,o){-1==e.indexOf("https://www.youtube.com/embed")&&(e="https://www.youtube.com/embed"+("/"==e[0]?e:"/"+e));var i=location.protocol+"//"+location.host;return"yes"!=t?(e[e.length-1],e=e+"?autoplay=1&loop=1&enablejsapi=1&&playerapiid=featuredytplayer&controls=0&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&theme=light&wmode=transparent&origin="+i+"&playlist="+function(e){for(var t=e.split("/"),o=null,i=0,n=t.length;i<n;i++)"embed"==t[i]&&(o=t[i+1]);return o}(e)):(e[e.length-1],e=e+"?autoplay=0&loop=0&enablejsapi=1&&playerapiid=featuredytplayer&controls=1&modestbranding=1&rel=0&showinfo=0&color=black&iv_load_policy=3&theme=dark&wmode=transparent&origin="+i),"yes"!==o&&(e+="&mute=1"),e}(s,l,c),h.frameBorder=0,h.allow="autoplay",t.appendChild(h),0==$isMobile&&new YT.Player(h,{events:{onReady:function(o){var n,r,a,s,d,l,h;n=t,r=o.target,a=c,d=e(window),l=e(n),h=0,d.scroll(function(){s&&(window.clearTimeout(s),h>=15&&(i(l,d,r,a),h=0),h++),s=window.setTimeout(function(){i(l,d,r,a),h=0},100)}),d.scroll(),o.target.setVolume&&"yes"!=c&&o.target.setVolume(0),o.target.setLoop(!0)},onStateChange:function(t){if(t.target.setVolume&&"yes"!=c&&t.target.setVolume(0),-1===t.data){var o=window.fix_scrolltop_beforestop_youtube;o>=0&&(e("html, body").scrollTop(o),delete window.fix_scrolltop_beforestop_youtube)}t.data===YT.PlayerState.PLAYING?n=window.setInterval(function(){var e=t.target.getCurrentTime(),o=t.target.getDuration();e+1>o&&0!==o&&(t.target.seekTo(0),"yes"===d&&(t.target.stopVideo(),t.target.clearVideo()))},1e3):window.clearTimeout(n)}}});r(a,o)})},window.onYouTubeIframeAPIReady=function(){n.resolve()}}(jQuery),function(e){function t(){this.callbacks={}}t.prototype.defaultConfig={single:!1,context:null},t.prototype.addEventListener=function(e,t,o){evtCallbacks=this._getEventCallbacks(e),evtCallbacks||(evtCallbacks=this.callbacks[e]=[]),evtCallbacks.push({callback:t,config:"object"==typeof o?o:this.defaultConfig})},t.prototype._getEventCallbacks=function(e){return this.callbacks[e]},t.prototype.removeEventListener=function(e,t){var o=this._getEventCallbacks(e);if(!o)return!1;for(var i=0,n=o.length;i<n;i++)if(t===o[i].callback)return o.splice(i,1),!0;return!1},t.prototype.emitEvent=function(e,t){var o=[];extend(o,this._getEventCallbacks(e));for(var i,n,r,a=0,s=o.length;a<s;a++)n=(i=o[a]).callback,(r=i.config).context?n.call(r.context,t):n(t),r.single&&this.removeEventListener(e,n)},window.observer=new t}(jQuery),function(e){e(document).ready(function(){if(0==$isMobile&&"yes"!==e("#allrecords").attr("data-blocks-animationoff")&&0==window.isSearchBot){e(".r").each(function(t){e(this).attr("style")&&-1!==e(this).attr("style").indexOf("background-color")&&e(this).attr("data-animationappear","off")});var t=e(".r").not("[data-animationappear=off], [data-screen-min], [data-screen-max]"),o=e(window);function i(){if(t.length)for(var i,n=t.length-1;n>=0;n--)(i=e(t[n])).offset().top<o.scrollTop()+o.height()-100&&(i.removeClass("r_hidden"),i.addClass("r_showed"),t.splice(n,1))}t.each(function(t){a=e(this).offset().top,b=o.scrollTop()+o.height()+300,a>1e3&&a>b?e(this).addClass("r_hidden"):e(this).addClass("r_showed"),e(this).addClass("r_anim")}),o.bind("scroll",t_throttle(i,200)),i()}e("body").height()+70<e(window).height()&&e(".t-tildalabel").css("display","none")})}(jQuery),function(e){function t(){var t=e(window);window.winWidth=t.width(),window.winHeight=t.height()}function o(){var t,o,i,n=e(window).width();e("div.r[data-screen-max], div.r[data-screen-min]").each(function(r){i=e(this).css("display"),void 0===(t=e(this).attr("data-screen-max"))&&(t=1e4),t=parseInt(t),void 0===(o=e(this).attr("data-screen-min"))&&(o=0),(o=parseInt(o))<=t&&(n<=t&&n>o?"block"!=i&&e(this).css("display","block"):"none"!=i&&e(this).css("display","none"))})}e(document).ready(function(){t(),o(),e(window).bind("resize",t_throttle(t,200)),e(window).bind("resize",t_throttle(o,200))})}(jQuery),function(e){e.fn.videoBG=function(t,o){o={};if("object"==typeof t)o=e.extend({},e.fn.videoBG.defaults,t);else{if(t)return e(t).videoBG(o);o=e.fn.videoBG.defaults}var i=e(this);if(i.length){"static"!=i.css("position")&&i.css("position")||i.css("position","relative"),0==o.width&&(o.width=i.width()),0==o.height&&(o.height=i.height()),o.textReplacement&&(o.scale=!0,i.width(o.width).height(o.height).css("text-indent","-9999px"));var n=e.fn.videoBG.video(o);return o.scale&&n.height(o.height).width(o.width),i.append(n),void 0===i.attr("data-content-video-nomute")&&i.find("video").prop("muted",!0),function(t,o){var i=t.closest(".t-cover__carrier"),n=o+"";console.log("setWidthHeightHTMLVideo:"+n);var r=i.find("video"),a=i.attr("data-content-video-nocover"),s=i.attr("data-content-video-ratio"),c=.5625;if(s>0&&(c=1*parseFloat(s)),"yes"!=a){if(n||(n="100vh"),n.indexOf("vh")>-1){var d=window.innerHeight;d||(d=e(window).height());var l=Math.floor(d*(parseInt(n)/100))}else l=parseInt(n);var h=Math.floor(parseInt(window.innerWidth));h||(h=e(window).width());var u=h,p=y=h*c,f=1;y<l&&(f=y<l?l/y+.02:y/l+.02);var v=Math.floor(u*f),m=Math.floor(p*f),g=m-l,w=v-h;r.height(m+"px"),r.width(v+"px"),g>0&&r.css("margin-top",-Math.floor(g/2)+"px"),w>0&&r.css("margin-left",-Math.floor(w/2)+"px")}else{var y;n||(y=Math.floor(i.width()*c)),n&&n.indexOf("vh")>-1?y=Math.floor(window.innerHeight*(parseInt(n)/100)):n&&(y=parseInt(n)),r.css("width","100%"),r.height(y+"px")}}(n,o.height),n.find("video")[0]}},e.fn.videoBG.setFullscreen=function(t){var o,i=e(window).width(),n=e(window).height();if(t.css("min-height",0).css("min-width",0),t.parent().width(i).height(n),i/n>t.aspectRatio)t.width(i).height("auto"),(o=(t.height()-n)/2)<0&&(o=0),t.css("top",-o);else if(t.width("auto").height(n),(o=(t.width()-i)/2)<0&&(o=0),t.css("left",-o),0===o)setTimeout(function(){e.fn.videoBG.setFullscreen(t)},500);e("body > .videoBG_wrapper").width(i).height(n)},e.fn.videoBG.video=function(t){var o=e("<div/>");o.addClass("videoBG").css("position",t.position).css("z-index",t.zIndex).css("top",0).css("left",0).css("height",t.height).css("width",t.width).css("opacity",t.opacity).css("overflow","hidden");var i,n=e("<video/>");(n.css("position","relative").css("z-index",t.zIndex).attr("poster",t.poster).css("top",0).css("left",0).css("min-width","100%").css("min-height","100%"),t.autoplay&&n.attr("autoplay",t.autoplay),t.volume>0?n.prop("volume",t.volume):n.prop("volume",0),t.fullscreen)&&(n.bind("canplay",function(){n.aspectRatio=n.width()/n.height(),e.fn.videoBG.setFullscreen(n)}),e(window).resize(function(){clearTimeout(i),i=setTimeout(function(){e.fn.videoBG.setFullscreen(n)},100)}),e.fn.videoBG.setFullscreen(n));var r=n[0];t.loop&&(loops_left=t.loop,n.bind("ended",function(){loops_left&&r.play(),!0!==loops_left&&loops_left--})),n.bind("canplay",function(){t.autoplay&&r.play()}),e.fn.videoBG.supportsVideo()&&(e.fn.videoBG.supportType("webm")&&""!=t.webm?n.attr("src",t.webm):e.fn.videoBG.supportType("mp4")&&""!=t.mp4?n.attr("src",t.mp4):n.attr("src",t.ogv));var a=e("<img/>");return a.attr("src",t.poster).css("position","absolute").css("z-index",t.zIndex).css("top",0).css("left",0).css("min-width","100%").css("min-height","100%"),e.fn.videoBG.supportsVideo()?o.html(n):o.html(a),t.textReplacement&&(o.css("min-height",1).css("min-width",1),n.css("min-height",1).css("min-width",1),a.css("min-height",1).css("min-width",1),o.height(t.height).width(t.width),n.height(t.height).width(t.width),a.height(t.height).width(t.width)),e.fn.videoBG.supportsVideo(),o},e.fn.videoBG.supportsVideo=function(){return document.createElement("video").canPlayType},e.fn.videoBG.supportType=function(t){if(!e.fn.videoBG.supportsVideo())return!1;var o=document.createElement("video");switch(t){case"webm":return o.canPlayType('video/webm; codecs="vp8, vorbis"');case"mp4":return o.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');case"ogv":return o.canPlayType('video/ogg; codecs="theora, vorbis"')}return!1},e.fn.videoBG.wrapper=function(){var t=e("<div/>");return t.addClass("videoBG_wrapper").css("position","absolute").css("top",0).css("left",0),t},e.fn.videoBG.defaults={mp4:"",ogv:"",webm:"",poster:"",autoplay:!0,loop:!0,scale:!1,position:"absolute",opacity:1,textReplacement:!1,zIndex:0,width:0,height:0,fullscreen:!1,imgFallback:!0}}(jQuery),function(e){var t=e(window),o=t.height();t.resize(function(){o=t.height()}),e.fn.parallax=function(i,n,r){var a,s=e(this),c=void 0!==document.body.style["-webkit-transform"];function d(){var i=t.scrollTop();s.each(function(){var t=e(this),r=t.offset().top,s=a(t),d=this.getBoundingClientRect();if(!(r+s<i||r>i+o)){var l=-1*Math.round(d.top*n);c?this.style["-webkit-transform"]="translateY("+l+"px)":this.style.top=l+"px"}})}c&&s.css("position","relative"),window.correctFirstTop4Parallax=function(){s.each(function(){s.offset().top})},window.correctFirstTop4Parallax(),a=r?function(e){return e.outerHeight(!0)}:function(e){return e.height()},(arguments.length<1||null===i)&&(i="50%"),(arguments.length<2||null===n)&&(n=.1),(arguments.length<3||null===r)&&(r=!0),e(window).resize(window.correctFirstTop4Parallax),t.bind("scroll",d).resize(d),"complete"!==document.readyState?window.addEventListener("load",function(){d()}):d()}}(jQuery),window.Tilda=window.Tilda||{},function(e){Tilda.sendEventToStatistics=function(t,o,i,n){var r="/"==t.substring(0,1),a=[],s=0,c=e("#allrecords").data("fb-event");if(c=!(!c||"nosend"!=c),i||(i=window.location.href),(n=n?parseFloat(n):0)>0)if(window.dataLayer||(window.dataLayer=[]),-1!=t.indexOf("/tilda/")&&-1!=t.indexOf("/payment/")&&window.tildaForm&&window.tildaForm.orderIdForStat>"")(i={ecommerce:{purchase:{actionField:{id:window.tildaForm.orderIdForStat},products:window.tildaForm.arProductsForStat}}}).event="purchase";else if(i&&i.ecommerce&&(i.ecommerce.add&&i.ecommerce.add.products?a=i.ecommerce.add.products:i.ecommerce.remove&&i.ecommerce.remove.products&&(a=i.ecommerce.remove.products),a&&a.length>0)){for(s=0;s<a.length;s++)a[s].id||(a[s].sku?a[s].id=a[s].sku:a[s].recid&&a[s].lid&&(a[s].id=a[s].recid+"_"+a[s].lid));i.ecommerce.add&&i.ecommerce.add.products?(i.ecommerce.add.products=a,i.event="addToCart"):i.ecommerce.remove&&i.ecommerce.remove.products?(i.ecommerce.remove.products=a,i.event="removeFromCart"):(r?(i.event="pageView",i.eventAction=t):i.event=t,i.title=o,i.value=n)}null!=window.dataLayer&&(r?n>0?i&&i.ecommerce?window.dataLayer.push(i):window.dataLayer.push({event:"pageView",eventAction:t,title:o,value:n,product:i}):window.dataLayer.push({event:"pageView",eventAction:t,title:o,referer:i}):i&&i.ecommerce&&i.ecommerce?window.dataLayer.push(i):window.dataLayer.push({event:t,eventAction:o,value:n,referer:i}));try{if(window.gtagTrackerID&&"gtag"==window.mainTracker)if(r)if(i&&i.event){var d=e("#allrecords").data("tilda-currency")||"RUB";"purchase"==i.event?gtag("event","purchase",{transaction_id:i.ecommerce.purchase.actionField.id,value:parseFloat(n).toFixed(2),currency:d,items:i.ecommerce.purchase.products}):"addToCart"==i.event&&i.ecommerce.add?gtag("event","add_to_cart",{items:i.ecommerce.add.products}):"removeFromCart"==i.event&&i.ecommerce.remove&&gtag("event","remove_from_cart",{items:i.ecommerce.remove.products})}else gtag("config",window.gtagTrackerID,{page_title:o,page_path:t});else gtag("event",t,{event_category:"tilda",event_label:o,value:n})}catch(e){}if(window.ga&&"tilda"!=window.mainTracker&&"gtag"!=window.mainTracker)if(r)if(i&&i.event){try{if(window.Tilda.isLoadGAEcommerce||(window.Tilda.isLoadGAEcommerce=!0,ga("require","ec")),ga("set","currencyCode",e("#allrecords").data("tilda-currency")),"purchase"==i.event){var l=i.ecommerce.purchase.products.length;for(u=0;u<l;u++)h=i.ecommerce.purchase.products[u],ga("ec:addProduct",{id:h.id||u,name:h.name,price:parseFloat(h.price).toFixed(2),quantity:h.quantity});ga("ec:setAction","purchase",{id:i.ecommerce.purchase.actionField.id,revenue:parseFloat(n).toFixed(2)})}else if("addToCart"==i.event&&i.ecommerce.add){l=i.ecommerce.add.products.length;for(u=0;u<l;u++)h=i.ecommerce.add.products[u],ga("ec:addProduct",{id:h.id||u,name:h.name,price:parseFloat(h.price).toFixed(2),quantity:h.quantity});ga("ec:setAction","add")}else if("removeFromCart"==i.event&&i.ecommerce.remove){var h,u;l=i.ecommerce.remove.products.length;for(u=0;u<l;u++)h=i.ecommerce.remove.products[u],ga("ec:addProduct",{id:h.id||u,name:h.name,price:parseFloat(h.price).toFixed(2),quantity:h.quantity});ga("ec:setAction","remove")}}catch(e){}ga("send",{hitType:"pageview",page:t,title:o,params:i})}else ga("send",{hitType:"pageview",page:t,title:o});else ga("send",{hitType:"event",eventCategory:"tilda",eventAction:t,eventLabel:o,eventValue:n});if(window.mainMetrika>""&&window[window.mainMetrika]&&(r?n>0?window[window.mainMetrika].hit(t,{title:o,order_price:n,params:i}):window[window.mainMetrika].hit(t,{title:o}):n>0?window[window.mainMetrika].reachGoal(t,{title:o,params:i,order_price:n}):window[window.mainMetrika].reachGoal(t,{title:o,referer:i})),null!=window.fbq&&0==c)if(r){var p=e("#allrecords").data("tilda-currency");-1==t.indexOf("tilda/")||-1==t.indexOf("/payment/")&&-1==t.indexOf("/submitted/")?-1!=t.indexOf("tilda/popup")?window.fbq("track","ViewContent",{content_name:o,content_category:"popup",content_ids:[t],content_type:"popup"}):window.fbq("track","ViewContent",{content_name:o,content_category:"event",content_ids:[t],content_type:"event"}):n>0&&p?window.fbq("track","InitiateCheckout",{content_name:o,content_category:t,value:n,currency:p}):window.fbq("track","Lead",{content_name:o,content_category:t})}else window.fbq("track",t,{content_name:o,value:n});"function"==typeof window.tildastat&&(r?(t.indexOf("payment")>0&&t.indexOf("tilda/form")>-1&&(t=t.replace("tilda/form","tilda/rec")),window.tildastat("pageview",{page:t})):window.tildastat("pageview",{page:"/tilda/event/"+t}))},Tilda.saveUTM=function(){try{var e=window.location.href,t="",o="";if(-1!==e.toLowerCase().indexOf("utm_")&&"string"==typeof(t=(t=(e=e.toLowerCase()).split("?"))[1])){var i,n=t.split("&");for(i in n)"utm_"==n[i].split("=")[0].substring(0,4)&&(o=o+n[i]+"|||");if(o.length>0){var r=new Date;r.setDate(r.getDate()+30),document.cookie="TILDAUTM="+encodeURIComponent(o)+"; path=/; expires="+r.toUTCString()}}}catch(e){}},e(document).ready(function(){var t=navigator.userAgent.toLowerCase(),o=-1!=t.indexOf("msie")&&parseInt(t.split("msie")[1]);8!=o&&9!=o||e(".t-btn").each(function(){var t=e(this).attr("href");e(this).find("table").length>0&&t>""&&-1==t.indexOf("#popup:")&&-1==t.indexOf("#price:")&&e(this).click(function(t){t.preventDefault();var o=e(this).attr("href");window.location.href=o})});try{1==e("#allrecords").length&&"no"==e("#allrecords").data("tilda-cookie")||Tilda.saveUTM()}catch(e){}e(".r").off("click","a.js-click-stat"),e(".r").on("click","a.js-click-stat",function(t){var o=e(this).data("tilda-event-name"),i=e(this).text(),n=e(this).attr("href")||"",r=e(this).attr("target");if(o||(o="/tilda/click/".$(this).closest(".r").attr("id")+"/?url="+n),Tilda.sendEventToStatistics(o,i),"http"==n.substring(0,4))return window.setTimeout(function(){var t,o,i="",a="";if("_blank"==r){if(-1!=n.indexOf("?")&&(i=n.split("?"),n=i[0],-1!=(i=i[1]).indexOf("#")&&(i=i.split("#"),n=n+"#"+i[1],i=i[0]),i=i.split("&")),0==e("#tildaredirectform").length?e("body").append('<form id="tildaredirectform" target="_blank" method="GET" action="'+n+'" style="display:none;"></form>'):e("#tildaredirectform").attr("method","GET").attr("action",n),a="",i.length>0)for(t in i)(o=i[t].split("="))&&o.length>0&&(a+='<input type="hidden" name="'+o[0]+'" value="'+(o[1]?o[1]:"")+'">');e("#tildaredirectform").html(a),e("#tildaredirectform").submit()}else window.location.href=n},300),t.preventDefault(),!1}),e("input.js-amount").each(function(){var t=e(this).val();t=t.replace(/,/g,"."),t=parseFloat(t.replace(/[^0-9\.]/g,"")),e(this).val(t)}),Tilda.showFormError=function(e,t){var o=e.find(".js-errorbox-all");o&&0!=o.length||(e.prepend('<div class="js-errorbox-all"></div>'),o=e.find(".js-errorbox-all"));var i=o.find(".js-rule-error-all");i&&0!=i.length||(o.append('<p class="js-rule-error-all"></p>'),i=o.find(".js-rule-error-all")),"string"==typeof t?i.html(t):t&&t.responseText?i.html(t.responseText+". Later, plaese try again."):t&&t.statusText?i.html("Error - "+t.statusText+". Later, plaese try again."):i.html("Unknown error. Later, plaese try again."),i.show(),o.show()},Tilda.robokassaPayment=function(t,o,i){return e.ajax({type:"POST",url:"https://forms.tildacdn.com/payment/robokassa/",data:t.serialize(),dataType:"text",success:function(n){o.removeClass("t-btn_sending"),o.data("form-sending-status","0"),o.data("submitform","");var r=o.closest(".r").attr("id");if("{"==n.substring(0,1)){if(window.JSON&&window.JSON.parse?json=window.JSON.parse(n):json=e.parseJSON(n),!json)return void Tilda.showFormError(t,!1);if(json.error>"")return void Tilda.showFormError(t,json.error)}else if("http"==n.substring(0,4)){Tilda.sendEventToStatistics("/tilda/payment/"+r+"/click/","Payment button: "+o.val(),"",i);var a=n;window.setTimeout(function(){window.location.href=a},500)}else Tilda.showFormError(t,n)},fail:function(e){o.removeClass("t-btn_sending"),o.data("form-sending-status","0"),o.data("submitform","");Tilda.showFormError(t,e)},timeout:15e3})}})}(jQuery);

function t268_init(recid) {
  var el = $("#rec" + recid);
  el.find(".t268__col-left").css({
      'height': (el.find(".t268__col-right").height() + 'px')
  });
  $(window).resize(function() {
      el.find(".t268__col-left").css({
          'height': (el.find(".t268__col-right").height() + 'px')
      })
  })
}

function t412_unifyHeights(recid) {
  var el = $("#rec" + recid);
  el.find('.t412__descr').css('height', "auto");
  $('#rec' + recid + ' .t412 .t-container').each(function() {
      var highestBox2 = 0;
      $('.t412__descr', this).each(function() {
          if ($(this).height() > highestBox2) highestBox2 = $(this).height()
      });
      if ($(window).width() >= 960 && $(this).is(':visible')) {
          $('.t412__descr', this).css('height', highestBox2)
      } else {
          $('.t412__descr', this).css('height', "auto")
      }
  });
  el.find('.t412__title').css('height', "auto");
  $('#rec' + recid + ' .t412 .t-container').each(function() {
      var highestBox3 = 0;
      $('.t412__title', this).each(function() {
          if ($(this).height() > highestBox3) highestBox3 = $(this).height()
      });
      if ($(window).width() >= 960 && $(this).is(':visible')) {
          $('.t412__title', this).css('height', highestBox3)
      } else {
          $('.t412__title', this).css('height', "auto")
      }
  });
  el.find('.t412__wrapper').css('height', "auto");
  $('#rec' + recid + ' .t412 .t-container').each(function() {
      var highestBox = 0;
      $('.t412__wrapper', this).each(function() {
          if ($(this).height() > highestBox) highestBox = $(this).height()
      });
      if ($(window).width() >= 960 && $(this).is(':visible')) {
          $('.t412__wrapper', this).css('height', highestBox)
      } else {
          $('.t412__wrapper', this).css('height', "auto")
      }
  })
}

function t456_setListMagin(recid, imglogo) {
  if ($(window).width() > 980) {
      var t456__menu = $('#rec' + recid + ' .t456');
      var t456__leftpart = t456__menu.find('.t456__leftwrapper');
      var t456__listpart = t456__menu.find('.t456__list');
      if (imglogo) {
          t456__listpart.css("margin-right", t456__leftpart.width())
      } else {
          t456__listpart.css("margin-right", t456__leftpart.width() + 30)
      }
  }
}

function t456_highlight() {
  var url = window.location.href;
  var pathname = window.location.pathname;
  if (url.substr(url.length - 1) == "/") {
      url = url.slice(0, -1)
  }
  if (pathname.substr(pathname.length - 1) == "/") {
      pathname = pathname.slice(0, -1)
  }
  if (pathname.charAt(0) == "/") {
      pathname = pathname.slice(1)
  }
  if (pathname == "") {
      pathname = "/"
  }
  $(".t456__list_item a[href='" + url + "']").addClass("t-active");
  $(".t456__list_item a[href='" + url + "/']").addClass("t-active");
  $(".t456__list_item a[href='" + pathname + "']").addClass("t-active");
  $(".t456__list_item a[href='/" + pathname + "']").addClass("t-active");
  $(".t456__list_item a[href='" + pathname + "/']").addClass("t-active");
  $(".t456__list_item a[href='/" + pathname + "/']").addClass("t-active")
}

function t456_checkAnchorLinks(recid) {
  if ($(window).width() >= 960) {
      var t456_navLinks = $("#rec" + recid + " .t456__list_item a:not(.tooltipstered)[href*='#']");
      if (t456_navLinks.length > 0) {
          t456_catchScroll(t456_navLinks)
      }
  }
}

function t456_catchScroll(t456_navLinks) {
  var t456_clickedSectionId = null,
      t456_sections = new Array(),
      t456_sectionIdTonavigationLink = [],
      t456_interval = 100,
      t456_lastCall, t456_timeoutId;
  t456_navLinks = $(t456_navLinks.get().reverse());
  t456_navLinks.each(function() {
      var t456_cursection = t456_getSectionByHref($(this));
      if (typeof t456_cursection.attr("id") != "undefined") {
          t456_sections.push(t456_cursection)
      }
      t456_sectionIdTonavigationLink[t456_cursection.attr("id")] = $(this)
  });
  $(window).bind('resize', t_throttle(function() {
      t456_updateSectionsOffsets(t456_sections)
  }, 200));
  $('.t456').bind('displayChanged', function() {
      t456_updateSectionsOffsets(t456_sections)
  });
  setInterval(function() {
      t456_updateSectionsOffsets(t456_sections)
  }, 5000);
  setTimeout(function() {
      t456_updateSectionsOffsets(t456_sections);
      t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId)
  }, 1000);
  t456_navLinks.click(function() {
      if (!$(this).hasClass("tooltipstered")) {
          t456_navLinks.removeClass('t-active');
          t456_sectionIdTonavigationLink[t456_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t456_clickedSectionId = t456_getSectionByHref($(this)).attr("id")
      }
  });
  $(window).scroll(function() {
      var t456_now = new Date().getTime();
      if (t456_lastCall && t456_now < (t456_lastCall + t456_interval)) {
          clearTimeout(t456_timeoutId);
          t456_timeoutId = setTimeout(function() {
              t456_lastCall = t456_now;
              t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId)
          }, t456_interval - (t456_now - t456_lastCall))
      } else {
          t456_lastCall = t456_now;
          t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId)
      }
  })
}

function t456_updateSectionsOffsets(sections) {
  $(sections).each(function() {
      var t456_curSection = $(this);
      t456_curSection.attr("data-offset-top", t456_curSection.offset().top)
  })
}

function t456_getSectionByHref(curlink) {
  var t456_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
  if (curlink.is('[href*="#rec"]')) {
      return $(".r[id='" + t456_curLinkValue.substring(1) + "']")
  } else {
      return $(".r[data-record-type='215']").has("a[name='" + t456_curLinkValue.substring(1) + "']")
  }
}

function t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId) {
  var t456_scrollPosition = $(window).scrollTop(),
      t456_valueToReturn = t456_clickedSectionId;
  if (t456_sections.length != 0 && t456_clickedSectionId == null && t456_sections[t456_sections.length - 1].attr("data-offset-top") > (t456_scrollPosition + 300)) {
      t456_navLinks.removeClass('t-active');
      return null
  }
  $(t456_sections).each(function(e) {
      var t456_curSection = $(this),
          t456_sectionTop = t456_curSection.attr("data-offset-top"),
          t456_id = t456_curSection.attr('id'),
          t456_navLink = t456_sectionIdTonavigationLink[t456_id];
      if (((t456_scrollPosition + 300) >= t456_sectionTop) || (t456_sections[0].attr("id") == t456_id && t456_scrollPosition >= $(document).height() - $(window).height())) {
          if (t456_clickedSectionId == null && !t456_navLink.hasClass('t-active')) {
              t456_navLinks.removeClass('t-active');
              t456_navLink.addClass('t-active');
              t456_valueToReturn = null
          } else {
              if (t456_clickedSectionId != null && t456_id == t456_clickedSectionId) {
                  t456_valueToReturn = null
              }
          }
          return !1
      }
  });
  return t456_valueToReturn
}

function t456_setPath() {}

function t456_setBg(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
      $(".t456").each(function() {
          var el = $(this);
          if (el.attr('data-bgcolor-setbyscript') == "yes") {
              var bgcolor = el.attr("data-bgcolor-rgba");
              el.css("background-color", bgcolor)
          }
      })
  } else {
      $(".t456").each(function() {
          var el = $(this);
          var bgcolor = el.attr("data-bgcolor-hex");
          el.css("background-color", bgcolor);
          el.attr("data-bgcolor-setbyscript", "yes")
      })
  }
}

function t456_appearMenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
      $(".t456").each(function() {
          var el = $(this);
          var appearoffset = el.attr("data-appearoffset");
          if (appearoffset != "") {
              if (appearoffset.indexOf('vh') > -1) {
                  appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)))
              }
              appearoffset = parseInt(appearoffset, 10);
              if ($(window).scrollTop() >= appearoffset) {
                  if (el.css('visibility') == 'hidden') {
                      el.finish();
                      el.css("top", "-50px");
                      el.css("visibility", "visible");
                      el.animate({
                          "opacity": "1",
                          "top": "0px"
                      }, 200, function() {})
                  }
              } else {
                  el.stop();
                  el.css("visibility", "hidden")
              }
          }
      })
  }
}

function t456_changebgopacitymenu(recid) {
  var window_width = $(window).width();
  if (window_width > 980) {
      $(".t456").each(function() {
          var el = $(this);
          var bgcolor = el.attr("data-bgcolor-rgba");
          var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
          var bgopacityone = el.attr("data-bgopacity");
          var bgopacitytwo = el.attr("data-bgopacity-two");
          var menushadow = el.attr("data-menushadow");
          if (menushadow == '100') {
              var menushadowvalue = menushadow
          } else {
              var menushadowvalue = '0.' + menushadow
          }
          if ($(window).scrollTop() > 20) {
              el.css("background-color", bgcolor_afterscroll);
              if (bgopacitytwo == '0' || menushadow == ' ') {
                  el.css("box-shadow", "none")
              } else {
                  el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")")
              }
          } else {
              el.css("background-color", bgcolor);
              if (bgopacityone == '0.0' || menushadow == ' ') {
                  el.css("box-shadow", "none")
              } else {
                  el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")")
              }
          }
      })
  }
}

function t456_createMobileMenu(recid) {
  var window_width = $(window).width(),
      el = $("#rec" + recid),
      menu = el.find(".t456"),
      burger = el.find(".t456__mobile");
  burger.click(function(e) {
      menu.fadeToggle(300);
      $(this).toggleClass("t456_opened")
  });
  $(window).bind('resize', t_throttle(function() {
      window_width = $(window).width();
      if (window_width > 980) {
          menu.fadeIn(0)
      }
  }, 200))
}

function t698_fixcontentheight(id) {
}

function t698_onSuccess(t698_form) {
  var t698_inputsWrapper = t698_form.find('.t-form__inputsbox');
  var t698_inputsHeight = t698_inputsWrapper.height();
  var t698_inputsOffset = t698_inputsWrapper.offset().top;
  var t698_inputsBottom = t698_inputsHeight + t698_inputsOffset;
  var t698_targetOffset = t698_form.find('.t-form__successbox').offset().top;
  if ($(window).width() > 960) {
      var t698_target = t698_targetOffset - 200
  } else {
      var t698_target = t698_targetOffset - 100
  }
  if (t698_targetOffset > $(window).scrollTop() || ($(document).height() - t698_inputsBottom) < ($(window).height() - 100)) {
      t698_inputsWrapper.addClass('t698__inputsbox_hidden');
      setTimeout(function() {
          if ($(window).height() > $('.t-body').height()) {
              $('.t-tildalabel').animate({
                  opacity: 0
              }, 50)
          }
      }, 300)
  } else {
      $('html, body').animate({
          scrollTop: t698_target
      }, 400);
      setTimeout(function() {
          t698_inputsWrapper.addClass('t698__inputsbox_hidden')
      }, 400)
  }
  var successurl = t698_form.data('success-url');
  if (successurl && successurl.length > 0) {
      setTimeout(function() {
          window.location.href = successurl
      }, 500)
  }
}