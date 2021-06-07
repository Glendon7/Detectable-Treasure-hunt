var story = [{m: "Everything was easy until now. It gets tough from here so get ready. The next one is an anagram. "},
		   {m:" Do you know what an anagram is?"},
		   {m:"  Well if you don't Google it."},
		   {m:	" Learn to use all resources at your disposal for the good and learn something new everyday. Keep that brain sharp. "}];

var line=0;
var i=0
var images=["8","10","12","13"];

function ChangeImg(){

    

    document.getElementById("change").src= "Img/"+images[i]  +".png";

    i++;

}


function execute_diag(){
    
    if(story.length===line){
        document.getElementById("UI").style.display = "none";
	document.getElementById("cont").style.visibility = "visible";
	document.getElementById("cont").style.display = "block";

    }
    
    while(line < story.length){
        var current_line=story[line];
        
        if(undefined !==current_line.m)
        {   
            document.getElementById("diag").innerHTML=current_line.m;   
            ChangeImg();
        
       }
       
       
       break;
       
    }
    line=line+1;
}

function ready() {
	document.getElementById("UI").style.display = "none";
	document.getElementById("cont").style.visibility = "visible";
	document.getElementById("cont").style.display = "block";
}

function checkAnswers() {
	var score=0;
		
	if (formatAnswer(document.form1.a1.value)  == "cybersecurity")
		{	
			score++;
			document.form1.a1.style.background = '#0be881';
		}
		else{
			document.form1.a1.style.background="#f0ece3";
		}


	if (formatAnswer(document.form1.a2.value) == "encryption")
		{	
			score++;
			document.form1.a2.style.background = '#0be881';
		}
		else{
			document.form1.a2.style.background="#f0ece3";
		}

	if (formatAnswer(document.form1.a3.value) == "bigdata")
		{	
			score++;
			document.form1.a3.style.background = '#0be881';
		}
		else{
			document.form1.a3.style.background="#f0ece3";
		}

	if (formatAnswer(document.form1.a4.value) == "compiler")
		{	
			score++;
			document.form1.a4.style.background = '#0be881';
		}
		else{
			document.form1.a4.style.background="#f0ece3";
		}

	if (formatAnswer(document.form1.a5.value) == "cryptography")
		{	
			score++;
			document.form1.a5.style.background = '#0be881';
		}
		else{
			document.form1.a5.style.background="#f0ece3";
		}

	if (formatAnswer(document.form1.a6.value) == "kernel")
		{	
			score++;
			document.form1.a6.style.background = '#0be881';
		}
		else{
			document.form1.a6.style.background="#f0ece3";
		}

	alert("You got "+score+" answers right");
	if(score==6)
	{insert_value();storedata();alert("You completed the Anagram");window.location.replace("../intro/Lv6intro.html");}
}


function formatAnswer(val) {
	val = val.trim().split(" ").join("");
	val = val.toLowerCase();
	return val;
}


var checker=31; 
var start_tm= new Date();
    var script_url ="https://script.google.com/macros/s/AKfycbwi-EJepVHEVFzlz_modMELud4tqUKf4J4Dp2Wy4lIX8Xh272UH/exec";

    function insert_value() {
  	var name= localStorage.getItem("key_name");
	var stage_name= "Stage 5";
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
 
  if( localStorage.getItem("checker")!=27){
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

