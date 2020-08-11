$(document).ready(function(){
   
    $("#date").html(function(){
        
    var longDate = new Date();
    var yearM = longDate.getFullYear();
    var monthM = longDate.getMonth();
    var dateM = longDate.getDate();
    var dayM = longDate.getDay();
    
    var monthsM = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    var daysM = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    var currentDate = dateM;
    var currentMonth = monthsM[monthM];
    var currentDay = daysM[dayM];
    
    return (currentDate+" "+currentMonth+" , "+currentDay);
    
    });
    
//    SignUp form
    
$('input').focus(function(){
  $(this).prev().addClass('focused');
});
$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).prev().removeClass('focused');  
  } else {
    $(this).prev().addClass('focused');
  }
});
    
    
    
//$('.memo').click(function(){
//    
//    
//$("#priNavbar").hide();
//$("#secNavbar").hide();
//$("#newMemo").hide();
//    
//$(this).addClass("expand");
//    
//$(".memoNavbar").removeClass("hide").addClass("show"); 
//
//    
    
 
});
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


//{
//    "position":"absolute",
//    "top":"0px",
//    "left":"0px",
//    "height":"100%",
//    "width":"100%",
//    "display":"flex",
//    "border-radius":"0px",
//    "margin": "0px",
//    "background-color": "#fff",
//    "border":"0px",
//    "flex-direction":" column",
//    "padding": "20px",
//    "color": "#000",
//    "margin-top": "0px",
//    "cursor":"default"
//}