class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution: 1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius= radius
      World.add(world, this.body);
      this.image = loadImage("paper.png")
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("blue");
      image(this.image,pos.x, pos.y,3*this.radius,3*this.radius);
      
    }
  };