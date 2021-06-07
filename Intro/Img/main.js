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

  
function storedata(){
  var checker=0;
  localStorage.setItem("checker",checker);
}
function check() {
    var c = localStorage.getItem("checker");
    if (c == 2) {
        window.location.replace("Level1/1st question page.html");
    }
    else if (c == 7) {
        window.location.replace('Level2/Choices.html');
    }
    else if (c == 11) { window.location.replace('Level3/Logic.html'); }
    else if (c == 14) { window.location.replace('Level4/Labyrinth.html'); }
    else if (c == 27) { window.location.replace('Level5/Anagram.html'); }
    else if (c == 31) { window.location.replace('Intro/Lv6intro.html'); }
    else if (c == 43) { window.location.replace('Level7/index.html'); }
    else if (c == 64) { window.location.replace('Level7/TheTime.html'); }
    else if (c == 72) { window.location.replace('Level7/TheMurder.html'); }
    else if (c == 89) { window.location.replace('Level7/End.html'); }


else{
    window.location.replace("Intro/index.html");
    storedata();
}

}