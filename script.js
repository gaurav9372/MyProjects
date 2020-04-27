var cssAccord = document.getElementById('css_accord');
var jsAccord = document.getElementById('javascript_accord');

var cssItems = cssAccord.childElementCount;
var jsItems = jsAccord.childElementCount;

var arrow1 = document.getElementsByClassName("more")[0];
var arrow2 = document.getElementsByClassName("more")[1];




function css(){
    
    if(cssAccord.style.height = "0px"){
    arrow1.style.transform = "rotate(45deg)";
    arrow2.style.transform = "rotate(0deg)";
    cssAccord.style.height = (cssItems*40)+"px";
    jsAccord.style.height = "0px";
    }
    else{
        cssAccord.style.height = "0px";
        jsAccord.style.height = (jsItems*40)+"px";
    }
}

function js(){
    
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(45deg)";
    jsAccord.style.height = (jsItems*40)+"px";
    cssAccord.style.height = "0px";
}