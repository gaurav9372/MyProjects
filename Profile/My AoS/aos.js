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
    
if(scrolled >= 50){
        navbar.style.animation = "navbarExpand 300ms linear forwards";
        navInner.style.animation = "navInner 300ms linear forwards";
    } else{
        navbar.style.animation = "navbarCollapse 300ms linear forwards";
    }
}
 












    
    
    
