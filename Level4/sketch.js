//function sk(){
  let cols, rows, Size;
let k = 0;
let n = 20;
let sizeX = 400;
let sizeY = 400;
let grid = [];
let current;
let count = 0;
let stack = [];
let buttonUP, buttonRIGHT, buttonDOWN, buttonLEFT;
let ButtonArray = ["UP", "RIGHT", "DOWN", "LEFT"];
let buttonSize = 50;
let ball;
let canvas, cnv, main, left, right, up, down, header, footer;

function setup() {
  canvas = createCanvas(sizeX, sizeY);
  main = document.getElementById('main');
  canvas.parent(main);

  buttonLEFT = createImg('Joystick/left.png', 'left');
  buttonLEFT.style('width', '100px', 'height', '100px');
  left = document.getElementById('left');
  buttonLEFT.parent(left);

  buttonUP = createImg('Joystick/up.png', 'up');
  buttonUP.style('width', '100px', 'height', '100px');
  up = document.getElementById('up');
  buttonUP.parent(up);

  buttonDOWN = createImg('Joystick/down.png', 'down');
  buttonDOWN.style('width', '100px', 'height', '100px');
  down = document.getElementById('down');
  buttonDOWN.parent(down);

  buttonRIGHT = createImg('Joystick/right.png', 'right');
  buttonRIGHT.style('width', '100px', 'height', '100px');
  right = document.getElementById('right');
  buttonRIGHT.parent(right);

  cols = floor(sizeX / n);
  rows = floor(sizeY / n);

  for (let j = k; j < rows - k; j++) {
    for (let i = k; i < cols - k; i++) {
      //let cell = new Cell(i, j);
      grid.push(new Cell(i, j));

    }
  }
  current = grid[0];

  ball = new Ball(n / 2, n / 2, n / 2);
}

function draw() {
  background(51, 255);

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  let next = current.checkNeighbours(grid);
  if (next) {
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
    count++;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
  if (count == ((n * n) - 1)) {
    ball.show();
    noStroke();
    fill(0, 0, 255, 100);
    rect(grid[0].x, grid[0].y, n, n);
    rect(grid[399].x, grid[399].y, n, n);
    buttonUP.mouseClicked(moveUP);
    buttonRIGHT.mouseClicked(moveRIGHT);
    buttonDOWN.mouseClicked(moveDOWN);
    buttonLEFT.mouseClicked(moveLEFT);
  }
  if (ball.x > (width - n) && ball.y > (height - n)) {
    noLoop();
    insert_value();
    if (confirm("CONGRATULATIONS !!! \nYou've crossed the Labyrinth. ")) {
      storedata();location.replace("../level5/Anagram.html");
    }
  }
}

function moveUP() {
  let a = (ball.x - (n / 2)) / n;
  let b = (ball.y - (n / 2)) / n;
  if (!grid[a + b * cols].walls[0]) {
    ball.move(0);
  }
}

function moveRIGHT() {
  let a = (ball.x - (n / 2)) / n;
  let b = (ball.y - (n / 2)) / n;
  if (!grid[a + b * cols].walls[1]) {
    ball.move(1);
  }
}

function moveDOWN() {
  let a = (ball.x - (n / 2)) / n;
  let b = (ball.y - (n / 2)) / n;
  if (!grid[a + b * cols].walls[2]) {
    ball.move(2);
  }
}

function moveLEFT() {
  let a = (ball.x - (n / 2)) / n;
  let b = (ball.y - (n / 2)) / n;
  if (!grid[a + b * cols].walls[3]) {
    ball.move(3);
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return (i + j * cols);
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    moveUP();
    buttonUP.style('transform', 'scale(0.96)', 'filter', 'drop-shadow(0 0 0.3rem rgba(45, 136, 68, 0.705))');
  } else if (keyCode === DOWN_ARROW) {
    moveDOWN();
    buttonDOWN.style('transform', 'scale(0.96)', 'filter', 'drop-shadow(0 0 0.3rem rgba(45, 136, 68, 0.705))');
  } else if (keyCode === LEFT_ARROW) {
    moveLEFT();
    buttonLEFT.style('transform', 'scale(0.96)', 'filter', 'drop-shadow(0 0 0.3rem rgba(45, 136, 68, 0.705))');
  } else if (keyCode === RIGHT_ARROW) {
    moveRIGHT();
    buttonRIGHT.style('transform', 'scale(0.96)', 'filter', 'drop-shadow(0 0 0.3rem rgba(45, 136, 68, 0.705))');
  }
  return false;
}


function keyReleased() {
  if (keyCode === UP_ARROW) {
    buttonUP.style('transform', 'scale(1)', 'filter', 'none');
  } else if (keyCode === DOWN_ARROW) {
    buttonDOWN.style('transform', 'scale(1)', 'filter', 'none');
  } else if (keyCode === LEFT_ARROW) {
    buttonLEFT.style('transform', 'scale(1)', 'filter', 'none');
  } else if (keyCode === RIGHT_ARROW) {
    buttonRIGHT.style('transform', 'scale(1)', 'filter', 'none');
  }
  return false;
}
//}

var checker=27; 
var start_tm= new Date();
    var script_url ="https://script.google.com/macros/s/AKfycbwi-EJepVHEVFzlz_modMELud4tqUKf4J4Dp2Wy4lIX8Xh272UH/exec";

    function insert_value() {
  	var name= localStorage.getItem("key_name");
	var stage_name= "Stage 4";
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
 
  if( localStorage.getItem("checker")!=14){
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

  