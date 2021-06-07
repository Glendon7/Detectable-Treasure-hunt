var a;
var usna=localStorage.getItem("key_name");
var story = [
    { m: "Hard wasn't it?" },
    { m: `Well ${usna} that was just the start, from here on you are on your own. ` },
    { m: "There is a saying \"The world is full of obvious things which nobody by any chance ever observes.\"" },
    { m: "Observation skills are key and you have to observe every detail that's a attribute of a true detective. " },
    { m: "Time to pack your bags and get ready, your plane leave in an hour. You are going on your first case to an island in the middle of the Pacific." },
    { m: "Remember all that you have learnt this next one is going to be really really tough. Observe well and use your resources" },
    { m: "Good Luck!!! " }
];

var line = 0;
var i = 0
var images = ["3", "5", "13", "14", "16", "11", "4"];

function ChangeImg() {



    document.getElementById("change").src = "Img/" + images[i] + ".png";

    i++;

}


function execute_diag() {

    if (story.length === line) {
        window.location.replace("../Level6/Cryptography.html");
    }

    while (line < story.length) {
        var current_line = story[line];

        if (undefined !== current_line.m) {
            document.getElementById("diag").innerHTML = current_line.m;
            ChangeImg();

        }


        break;

    }
    line = line + 1;
}

