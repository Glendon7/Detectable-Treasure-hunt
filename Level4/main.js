

var story = [{m: "You are doing well. I shouldn't have underestimated you. "},
		   {m:"Sometimes as a detective you will have to make tough decisions in your career. "},
		   {m:" Criminals are smart but every criminal loves to leave a clue, your job is to know what is a clue and what is not, think like a criminal to out smart them. "},
           {m:	"It's time to develop an another important skill, scan the page look for the right path and develop your functional skill. "},
           {m:"Or just go with the flow."}
        ];

var lin=0;
var i=0
var images=["7","13","14","8","15"];

function ChangeImg(){

    

    document.getElementById("change").src= "Img/"+images[i]  +".png";

    i++;

}


function execute_diag(){
    
    if(story.length===lin){
        document.getElementById("UI").style.display = "none";
	document.getElementById("cont").style.visibility = "visible";
    document.getElementById("cont").style.display = "block";
    //sk();

    }
    
    while(lin < story.length){
        var current_line=story[lin];
        
        if(undefined !==current_line.m)
        {   
            document.getElementById("diag").innerHTML=current_line.m;   
            ChangeImg();
        
       }
       
       
       break;
       
    }
    lin=lin+1;
}

function ready() {
	document.getElementById("UI").style.display = "none";
	document.getElementById("cont").style.visibility = "visible";
	document.getElementById("cont").style.display = "block";
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