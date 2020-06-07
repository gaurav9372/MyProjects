window.onscroll = function(){
    measure();
};

var welcome = document.getElementById("hello");

function measure(){
    
    
    var offset = document.getElementById("offset");
    
    offset.innerHTML = window.pageYOffset;

    
if(window.pageYOffset >= 300){
        welcome.style.opacity = "1";
        welcome.style.animation = "500ms move linear";
        
    } 
}







    
    
    
