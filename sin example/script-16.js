
var points; //declaring empty variable (global)
var font;   //declaring empty variable (global)

function preload() {
    font = loadFont('assets/JMH Psychedelic CAPS.otf') //loading an external font file before the sketch loads.
}

function setup() {
    createCanvas(1000,1000)
    noStroke()
    colorMode(HSB)
    fill(0,255,25)
    // frameRate(5)
    
     points = font.textToPoints("Q",100,800,900, {
        sampleFactor: 0.05,
        simplifyThreshold: 0
      }) //converts font to points

    
        console.log(points)


        var radi = "raditya";

      var family = [
            {name:"Laura",age:"39"},
            {name:"Rose",age:"4"},
            {name:"Lila",age:"6 weeks"},
            {name:"Ali", age:"40"}
      ]


        console.log(radi)
        console.log(family[0])
        console.log(family.length)

        for(i=0;i<family.length;i++) {
            console.log(family[i].name+" is "+family[i].age)
        }

    // beginShape()        //the shape function, has three parts: BEGINNING
    // for (i=0;i<points.length;i++) {
    //     var mapX = map(sin(points[i].x*0.05),-1,1,-20,20);
    //     var xPos = points[i].x+mapX;
    //     vertex(xPos, points[i].y)       //THEN ALL THE VERTICES of the SHAPE
    // }
    // endShape(CLOSE) //THEN ENDING

}


function draw() {
    // background(255)
    

    // background(255)
    // random([min], [max])
    // noise(x, y, z)
    //noise()
    
    
    

    var circleX = sin(frameCount/100)
    var circleY = map(noise(frameCount/200), 0,1,20,height-20);
    var fillColor = map(sin(frameCount/150),-1,1,0,360);
    
    //circleX = map(circleX,-1,1,20,width-20)
    

    fill(fillColor,255,255)
    circle(circleX,circleY,40)

    

    beginShape()

    for (i=0;i<points.length;i++) {

        var xPosition;
        var yPosition;
        
        if (i % 2 == 0) {
            yPosition = points[i].y;
            xPosition = points[i].x+map(sin(mouseX/100),-1,1,-50,50);
        } else {
            yPosition = points[i].y+map(noise(mouseY/100),-1,1,-50,50);

            xPosition = points[i].x
        }
        

         curveVertex(xPosition,yPosition)
    }
    endShape(CLOSE)

}