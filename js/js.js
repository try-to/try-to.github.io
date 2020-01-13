var web_style = $("#web_style").val();

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
});

function setCookie(key, value) {
    localStorage.setItem(key, value);
}

function getCookie(key) {
    var data = localStorage.getItem(key);
    return data
}

function updateStyle() {
    if (getCookie("style") == "white") {
        $("#footer").attr("style", "color: #51525d;");
        $(".flink").attr("style", "color: #51525d;");
        $(".ba").attr("style", "color: #51525d;");
        $("#bodyx").attr("class", "bg_while");
        $("#update_style").attr('checked', false);
    } else {
        $("#footer").attr("style", "");
        $(".flink").attr("style", "");
        $("#bodyx").attr("class", "");
        $(".ba").attr("style", "");
        $("#update_style").attr('checked', true);
    }
}

if (getCookie("style") == null) {
    setCookie("style", web_style)
    updateStyle();
} else if (getCookie("style") == "white") {
    setCookie("style", "white")
    updateStyle();
} else if (getCookie("style") == "black") {
    setCookie("style", "black")
    updateStyle();
}

$("#update_style").change(function() {
    var style = $("#update_style").is(':checked');
    if (style) {
        setCookie("style", "black")
        updateStyle();
    } else {
        setCookie("style", "white")
        updateStyle();
    }
});

(function(){if(document.getElementById("SOHUCS")){
var appid = "<%= theme.changyan.appId %>";
var conf = "<%= theme.changyan.appKey %>";
var width = window.innerWidth || document.documentElement.clientWidth;
if (width < 960) {
var head = document.getElementsByTagName('head')[0]||document.head||document.documentElement;
var script = document.createElement('script');
script.type = 'text/javascript';
script.charset = 'utf-8';
script.id = 'changyan_mobile_js';
script.src = 'https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf;
head.appendChild(script);
} else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("https://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } }})();