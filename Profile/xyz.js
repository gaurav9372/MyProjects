var textblock = document.getElementById("textblock");

setInterval(function(){textblock.style.width = "71px";},5000);
clearInterval();


//Typing

var i = 0,text;
text ='I am doing what I can.';

function typing() {
  if (i<text.length){
      document.getElementById("heading").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,100);
  }
}
typing();

