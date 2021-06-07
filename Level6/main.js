
document.addEventListener("DOMContentLoaded", function(event) {
     



//Make the DIV element draggagle:
dragElement(document.getElementById("img1"));
dragElement(document.getElementById("img2"));
dragElement(document.getElementById("img3"));
dragElement(document.getElementById("img4"));
dragElement(document.getElementById("img5"));
dragElement(document.getElementById("img6"));
dragElement(document.getElementById("img7"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchmove=dragMouseDown;
    
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.ontouchend=closeDragElement;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove=mobdrag;
    elmnt.style.zIndex="19";
    elmnt.style.transform="rotate(0deg)";
    
  }

  function mobdrag(e){
    var touchLoc=e.targetTouches[0];
    elmnt.style.left=touchLoc.pageX-50+"px";
    elmnt.style.top=touchLoc.pageY-250+"px";
    event.preventDefault();
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.zIndex="9";
    document.ontouchend=null;
    document.ontouchmove=null;

  }
}
/*
var elmnt=document.getElementById("img1");

    

    elmnt.addEventListener('touchmove',function(e){
        var touchLoc=e.targetTouches[0];

        elmnt.style.left=touchLoc.pageX+"px";
        elmnt.style.top=touchLoc.pageY+"px";


   })*/
   var modal = document.getElementById("myModal");
  
   
var img = document.getElementById("cl");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display="block";
  modalImg.src=this.src;

}

var span=document.getElementsByClassName("close")[0];

span.onclick=function(){
  modal.style.display="none";
}
});
function chk(){
 ch=document.getElementById("check");
 a =String.fromCharCode(0x77,0x61,0x74,0x65,0x72);
  //sol=document.q.q1.value.toLowerCase();
 sol = document.getElementById("check").value.toLowerCase();
if(a==sol)
{ch.style.background='#0be881';
insert_value();storedata();alert("AMAZING!!! ");
window.location.replace("../level7/index.html");
//document.q.q1.style.background = '#0be881';
//document.q.q1.readOnly=true;
}
else{
  ch.style.background="red";
 // alert("Sorry wrong answer. Try again!!! dont quit");
}
}

var checker=43; 
var start_tm= new Date();
    var script_url ="https://script.google.com/macros/s/AKfycbwi-EJepVHEVFzlz_modMELud4tqUKf4J4Dp2Wy4lIX8Xh272UH/exec";

    function insert_value() {
  	var name= localStorage.getItem("key_name");
	var stage_name= "Stage 6";
	var timestamp= start_tm;
	var end_time= new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");;
   var url = script_url+"?callback=ctrlq&end_time="+end_time+"&timestamp="+timestamp+"&stage_name="+stage_name+"&name="+name+"&action=insert"; 
    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });
}

function check(){
 
  if( localStorage.getItem("checker")!=31){
    localStorage.setItem("checker","0");
    alert("Looks like you are lost let me help you");
    window.location.replace("../Intro/index.html");
  }
  else{
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  }
  
}
function storedata(){
  
  localStorage.setItem("checker",checker);
}

var countDownDate = new Date("Aug 30, 2020 02:00:00").getTime();


var x = setInterval(function () {


    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("time").innerHTML = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s `;


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "The event is done!!! Thank you for participating";
    }
}, 1000);