var ourFont;
//var pt;
var vehicles= [];

function preload (){
  ourFont = loadFont ('asset/SPACEARE.TTF')
}

function setup() {
  createCanvas (1000,1000);
  background (202, 131, 246)
  //textFont (font);
  //fill (202, 131, 246);
  //noStroke ()
  //textSize (150)
  //text ('Q',100,200)

 // background (255);
  //frameRate (fr);
 // clr = color (255,0,0);



 stroke (255);
 strokeWeight (4);


 pt = ourFont.textToPoints('q',100,200,300);
 //console.log (pt);

// console.log(pt[5])

 for (var i = 0; i< pt.length; i++) {
   var pt = pt [i];
   var vehicle = new Vehicle (pt.x,pt.y);
   vehicles.push (Vehicle);

   //point (pt[i].x,pt[i].y)
 }
}


function draw () {
 background (51);
 for (var i=0; i < vehicles.length;i++){
   var v = vehicles[i];
   console.log(v)
   v.update();
   v.show();

 }
}