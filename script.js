$(document).ready(function(){
    
    
    
$('#projectsButton').click
(
function(){
     
$(".projectTab").toggleClass("active");
$(".practiceTab").removeClass("active");
    
$(this).toggleClass("moveProject");
$(".panel").toggleClass("enlargeProjects");   
    
     
});

    
    
$('#practicesButton').click
(
function(){
     
$(".practiceTab").toggleClass("active");
$(".projectTab").removeClass("active");
    
$(this).toggleClass("movePractice");
$(".panel").toggleClass("enlargePractices"); 
     
});

    
    
    
    
    
    
    
    
    
    
});