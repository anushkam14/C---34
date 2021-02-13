class Ball {
    constructor(x, y) {
      var options = {
          'frictionAir':0.005,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.raduis = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position; 
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke ("yellow")
      fill("red");
      ellipse(0, 0, this.raduis, this.raduis);
      pop();
    }
  };
  