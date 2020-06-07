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
}

//
//if(window.pageYOffset >= 380){
//        welcome.style.opacity = "1";
//        welcome.style.animation = "500ms move linear";
//        
//    } 