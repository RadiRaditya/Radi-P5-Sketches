let circleX = 100;

function setup() {
	createCanvas(1000,1000)
	


	rectMode(CENTER);

}

function draw (){

	background(255);
	noStroke ();
	fill (0,mouseY+1)
	circle (circleX,200,200,50)
	circleX = circleX+6;

	push();
	frameRate(20);
		translate(500,500)
		rotate(frameRate)
		//rect(0,0,200,50)
	pop();

 push()
  let step = frameCount % 10;
  let angle = map(step, 0, 20, -PI / 4, PI / 4);
  //background(255);
  translate(50, 50);
  fill (255,0,0)
  // equivalent to shearX(angle);
  let shear_factor = 1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);
  rect(350, 200, 150, 40);
pop()



}
function mousePressed() {
	background(255)

	circleX=0;
}
function mousePressed() {
	//this is to save the image evertime you click with mous
saveCanvas("s1","png")

}