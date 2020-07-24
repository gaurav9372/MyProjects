$(document).ready(function(){
     

    
$('li').each(function(index){
    
$(this).hide().fadeIn(index*100);
$(this).prepend("<div></div>")
    

    
var folderName = $(this).text().trim();
var folderName2 = $(this).text();
var location =folderName+ "/index.html";
var sspath = "url("+'"'+folderName+"/Screenshot.png"+'"'+")";
      

$(this).find('div').css({
"background": sspath,
    "height": "90%",
    "width": "100%",
    "background-size": "75%",
    "background-repeat": "no-repeat",
    "background-position": "50% 50%",
}); 
    
$(this).find('a').attr('href',location);
    
})
    
});