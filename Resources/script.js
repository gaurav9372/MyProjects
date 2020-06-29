$(document).ready(function(){
     
    
$('#practiceButton').click
(
function(){
     
$(".practiceTab").toggleClass("active");
$(".projectTab").removeClass("active");
$('#projectButton').toggleClass("deactive");
    
    
$(this).toggleClass("movePracticeButton");
    
$(".panel").toggleClass("expandPanel"); 
     
});

    
$('#projectButton').click
(
function(){
     
$(".projectTab").toggleClass("active");
$(".procticeTab").removeClass("active");
$('#practiceButton').toggleClass("deactive");
    
    
$(this).toggleClass("moveProjectButton");
    
$(".panel").toggleClass("expandPanel"); 
     
});
    
    
    
    
    
    
    
    
    
    
});