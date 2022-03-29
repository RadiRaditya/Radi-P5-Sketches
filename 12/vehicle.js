function Vehicle (x,y) {
this.pos = createVector (x,y)
this.target = createVector (x,y)
this.vel = p5.Vector.random2D ();
this.acc = createVector ();
this.r = 8;
this.maxspeed =5;
}

Vehicle.prototype.update= function (){
    this.pos.add (this.vel);
    this.vel.add (this.acc);
    this.acc.mult(0);

}

Vehicle.prototype.show = function () {
    stroke(255);
    strokeWeight (8);
    point (this.pos.x, this.pos.y);
}


Vehicle.prototype.behaviours = function () {
var seek = this.seek (this.target);
this.applyForce (seek);

}

Vehicle.prototype.applyForce = function (f){
   this.acc.add(f); 
}



Vehicle.prototype.seek = function (target){
    var desired = p5.vector.sub (target, this,pos);
    desired.setmag(this.maxspeed);
    var steer = p5.vector.sub(desired, this.vel);
    return steer;

}