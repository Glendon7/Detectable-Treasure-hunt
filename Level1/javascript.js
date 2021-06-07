var countDownDate = new Date("Aug 30, 2020 02:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("time").innerHTML =`Time left: ${days}d ${hours}h ${minutes}m ${seconds}s `;
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "The event is done!!! Thank you for participating";
  }
}, 1000);

function myfun() {
    var a = document.getElementById("ans").value.toUpperCase();
    if (a == 'CORONA VIRUS') 
    {insert_value();storedata();
      alert('Not bad');window.location.replace('../Level2/Choices.html');}
    else if(a == 'CORONAVIRUS')
    { insert_value();storedata();alert('Not bad');window.location.replace( '../Level2/Choices.html');}
    else {alert('Wrong answer,try again ');}
}

var checker=7; 
var start_tm= new Date();
    var script_url ="https://script.google.com/macros/s/AKfycbwi-EJepVHEVFzlz_modMELud4tqUKf4J4Dp2Wy4lIX8Xh272UH/exec";

    function insert_value() {
  	var name= localStorage.getItem("key_name");
	var stage_name= "Stage 1";
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
 
  if( localStorage.getItem("checker")!=2){
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

  

