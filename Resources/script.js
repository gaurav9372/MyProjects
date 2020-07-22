$(document).ready(function(){
     

$('#practiceButton').click
(
function(){
$("#navbar").toggleClass("hide");
$(".practiceTab").toggleClass("show");
$(".projectTab").removeClass("show");
$('#projectButton').toggleClass("hide");
    
$(this).toggleClass("movePracticeButton");
    
$(".cover").toggleClass("expandCover"); 
     
});

    
$('#projectButton').click
(
function(){
$("#navbar").toggleClass("hide");
$(".projectTab").toggleClass("show");
$(".procticeTab").removeClass("show");
$('#practiceButton').toggleClass("hide");
    
$(this).toggleClass("moveProjectButton");
    
$(".cover").toggleClass("expandCover"); 
     
});  
    
});