
var images = ["1", "2", "10", "2", "3", "7", "4", "11", "9", "6", "3"];

var n;

var story = [
    { m: "Hey there" },
    { m: "Who are you?" },
    { m: " You look familiar" },
    { m: " What is your name?" },
    { entername: "" },
    { m: " Looks like your name is not on the list." },
    { m: "That's OK all are invited. I'll add your name to the list." },
    { m: "My name is Agent P and I'll be your trainer" },
    { m: "Hmmm...  you don't look smart, well you can't judge a book by its cover, lets see what you have got." },
    { m: " Pass this entrance test to prove your self and gain my respect. " },
    { m: "I hope you know french you may need it, just kidding " }
];

i = 0;

function ChangeImg() {

    document.getElementById("change").src = "Img/" + images[i] + ".png";
    i++;
}
var line = 0;
function execute_diag() {

    if (story.length === line) {
        
        storedata();
        window.location.replace("../Level1/1st question page.html");

    }

    while (line < story.length) {
        var current_line = story[line];

        if (undefined !== current_line.m) {
            document.getElementById("diag").innerHTML = current_line.m;
            ChangeImg();

        }
        else if (undefined !== current_line.entername) {
            do {
                n = prompt("Enter Your Full Name: ", "Name Surname");
                let k = {
                    m: "Hey\t" + n + "\t welcome to the Andrean Detective Academy"
                }
                story.splice(5, 0, k);
            } while (n == null || n == "");                                 //this loop makes it compulsory for the user to enter his name
            insert_value();   
        }

        break;

    }
    line = line + 1;
}

var start_tm = new Date();
var script_url = "https://script.google.com/macros/s/AKfycbwi-EJepVHEVFzlz_modMELud4tqUKf4J4Dp2Wy4lIX8Xh272UH/exec";

function insert_value() {
    var name = n;
    var stage_name = "Intro";
    var timestamp = start_tm;
    var end_time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    var url = script_url + "?callback=ctrlq&end_time=" + end_time + "&timestamp=" + timestamp + "&stage_name=" + stage_name + "&name=" + name + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

function storedata() {
    var checker = 2;

    localStorage.setItem("key_name", n);
    localStorage.setItem("checker", checker);
}