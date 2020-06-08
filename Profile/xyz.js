var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};
 

//          AOS



window.onscroll = function(){
    measure();
};

//var welcome = document.getElementById("hello");

function measure(){
    var offset = document.getElementById("offset");
    
    offset.innerHTML = window.pageYOffset;

    
//if(window.pageYOffset >= 300){
//        welcome.style.opacity = "1";
//        welcome.style.animation = "500ms move linear";
//        
//    } 
}

//
//if(window.pageYOffset >= 380){
//        welcome.style.opacity = "1";
//        welcome.style.animation = "500ms move linear";
//        
//    } 