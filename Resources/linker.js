$(document).ready(function(){
     
$('li').each(function(index){
    
$(this).hide().fadeIn(index*200);
    
var folderName = $(this).text().trim();
var location ="CSS/"+folderName+ "/index.html";

    
$(this).find('a').attr('href',location);
    
})
    
});