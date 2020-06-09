window.onscroll = function(){
    polymove();
};

var leftPoly = document.getElementById('leftPoly');
var rightPoly = document.getElementById('rightPoly');


function polymove(){
    
var offset = document.getElementById("aos_offset");

offset.innerHTML = window.pageYOffset.toPrecision(4);

if(window.pageYOffset >= 820){
        leftPoly.style.animation = "moveUP 300ms ease-in forwards";
        rightPoly.style.animation = "moveDOWN 300ms ease-in forwards";
    } 
}
 








    
    
    
