window.onscroll = function(){
    polymove();
};

var leftPoly = document.getElementById('leftPoly');
var rightPoly = document.getElementById('rightPoly');


function polymove(){
    
var offset = document.getElementById("aos_offset");

var scrolled = document.body.scrollTop || document.documentElement.scrollTop ;
    
offset.innerHTML = scrolled.toPrecision(4);
    
if(scrolled >= 820){
        leftPoly.style.animation = "moveUP 300ms ease-in forwards";
        rightPoly.style.animation = "moveDOWN 300ms ease-in forwards";
    } 
}
 








    
    
    
