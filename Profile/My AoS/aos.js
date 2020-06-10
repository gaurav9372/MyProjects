window.onscroll = function(){
    aos();
};

var leftPoly = document.getElementById('leftPoly');

var rightPoly = document.getElementById('rightPoly');

var navbar = document.getElementById('navbar');

var navInner = document.getElementById('navInner');


function aos(){
    
var offset = document.getElementById("aos_offset");

var scrolled = document.body.scrollTop || document.documentElement.scrollTop ;
    
offset.innerHTML = scrolled.toPrecision(4);
    
if(scrolled >= 700){
        leftPoly.style.animation = "moveUP 300ms ease-in forwards";
        rightPoly.style.animation = "moveDOWN 300ms ease-in forwards";
    };
    
if(scrolled > 0){
        navbar.style.padding = "0px";
        navInner.style.borderRadius = "0px";
    navInner.style.boxShadow = "0px 0px 35px 0px rgba(0,0,0,0.2)"
    }  
else{
    navbar.style.padding = "10px 10px 0px";
    navInner.style.borderRadius = "5px";
    navInner.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.7)"
    };
}
 












    
    
    
