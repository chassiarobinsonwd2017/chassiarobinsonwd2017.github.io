/*!function(){function g(){if("undefined"==typeof a){var a=window.addEventListener?"addEventListener":"attachEvent",b="attachEvent"==a?"onmessage":"message";k(window,b,h)}}function h(a){var b=a.data;if("string"==typeof b){var e=b.substring(0,10),f=b.substring(b.indexOf("html5makerhtml5")+15),g=b.substring(10,b.indexOf("html5maker"));f===d&&"changeSize"===e&&(c.style.height=g)}}function i(){var b=j(),h=b.id,i=b.h5mTag||"",k=b.responsive||0,m=(b.globalClickTag||0,"https:");window&&window.location&&["https:","http:"].indexOf(window.location.protocol)>=0&&(m=window.location.protocol),e=b.width,f=b.height,d=h;var n=m+"//cdn.html5maker.com/"+h+".html";(i&&"html5maker"!==i||k)&&(n+="?",i&&"html5maker"!==i&&(n+="clickTag="+i+"&"),k&&(n+="responsive="+k+"&",e="100%")),c=document.createElement("iframe"),c.src=n,c.setAttribute("width",e),c.setAttribute("height",f),c.setAttribute("frameborder","0"),c.setAttribute("scrolling","no"),c.setAttribute("allowTransparency","true"),h&&a&&a.parentNode&&(a.parentNode.insertBefore(c,a),1==k&&g())}function j(){var b={},c=a.src.match(/(\?|\&)([^=]+)\=([^&]+)/gi);return c&&c.length>0&&c.forEach(function(a,c){var d=a.replace(/[&\\?]/,"").split("=");b[d[0]]=d[1]}),b}function k(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}var a;if(document.currentScript)a=document.currentScript;else{var b=document.getElementsByTagName("script");a=b[b.length-1]}var c=null,d="",e=100,f=100;k(window,"load",i)}();*/
