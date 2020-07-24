$(document).ready(function(){
   
var rows = 0;
var cols = 0;
var time = 0;
    
var rows = $('#rows').val();
var cols = $('#cols').val();
var time = $('#time').val();
    
$("#error").hide();     

    
$('#runButton').on('click',function(){
    
var rows = $('#rows').val();
var cols = $('#cols').val();
var time = $('#time').val();
    
if(rows==0){
    $("#error").show();
//    alert("enter value");
}else{
    
$('#modal').hide();
$("#error").hide();


setTimeout(function(){

    
var $bWidth = $(window).width()/cols;
var $bHeight = $(window).height()/rows;


var totalNewBlock = rows*cols;

var i;
var count = totalNewBlock-1;

for(i=1;i<=count;i++){
    
$('body').append("<div class='block'></div>");
};
    
$('.block').width($bWidth);
$('.block').height($bHeight);
    
$('.block').each(function(index){
    
$(this).hide().fadeIn(index*time);

});

    
 
},100);
    
    
    
    
};
    
    
    
    
    
    
    
    
    
});
    

    

    
    
    
    
    
    
    
    
    
    
    
});