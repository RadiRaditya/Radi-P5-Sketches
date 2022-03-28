var ourFont;//create an empty global variable
//var exampleText = "Get color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!"

function preload() {
	ourFont =loadFont("assets/Nightydemo.otf")
}

var points;

function setup() {
	createCanvas (1000,1000)
	textSize (200)

	textFont(ourFont)
	//text("Hello",100,800)

	fill (0)
	noStroke();
	//blendMode (MULTIPLY)
	//textSize(30);
	//fill (255, 0, 0);
	//text("hello world", 150, 150);
	points =ourFont.textToPoints ("hello",100,800,500);
	console.log(points);
}

function draw() {
	background(255)

	for (var i=0;i<points.length;i++){
		var circleRad = random(2,10)
		circle(points[i].x, points[i].y,circleRad)
	}


	//stroke(10, 77, 224 );

	//text("hello world",150,750)

	//stroke (10, 77, 224)
	//textSize (100)

//var leading = map(mouseY,0,height,50,150)

	//textLeading(leading)
	//text(exampleText,120,120,880,880)

}



function mousePressed() {
	saveCanvas("s1","png")
}