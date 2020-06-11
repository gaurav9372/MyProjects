var mainframe = document.getElementById("mainframe");

var mainButtonCont = document.getElementById("mainButtonCont");

var content = document.getElementById("content");

function openChat(){
    mainButtonCont.style.display = "none";
    mainframe.style.display = "flex";
}

function closeChat(){
    
    mainButtonCont.style.display = "block";
    mainframe.style.display = "none";
    
}

