var i = 0;
var o = 0;
var bool = false;
var startAnim = false;


function setup() {
createCanvas(1000, 1000);
}

function draw() {
background(220);
}
function setup(){
createCanvas(1000, 1000);
background(100);
angleMode(DEGREES);
frameRate(120);
}
function draw(){

if (i <= 270 && startAnim == true){
push();
translate(width/2, height/2);
noFill(255);
stroke(0);
rect(0, 0, 300, 200);

rotate(i);
rect(0, 0, 300, 200);
pop();
i++;
}
if( i >= 90){
bool = true;
}

if (o <= 500 && bool == true) {
translate(width/2, height/2);
push();
noFill();
stroke(0);
rect(0, 0 + o, 300, 200);
pop();
o++;
}
}
function mouseClicked(){
startAnim = true;
}

function keyPressed(){
if (key == 's'){
saveCanvas("sketch-22", "png");
}
mouseCheck();
}

function mouseCheck(){
if (mouseX <=500 && mouseY <= 500){
background(114, 137, 173);
}
}


