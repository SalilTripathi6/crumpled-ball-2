class Dustbin {
    constructor(){
      var options = {
          isStatic: true
      }
      this.leftedge = Bodies.rectangle(750,600,10,150,options);
      this.wallwidth = 10;
      this.wallheight = 150;
      World.add(world, this.leftedge);
    
      this.rightEdge = Bodies.rectangle(900,600,10,150,options);
      this.wallheight = 150;
      this.wallwidth = 10;
      World.add(world, this.rightEdge);

      this.bottomSurface = Bodies.rectangle(825,640,10,150,options);
      this.botttomheight = 17;
      this.bottomwidth = 165;
      World.add(world, this.bottomSurface);
      this.image = loadImage("dustbingreen.png")
    }
    display(){
      var pos =this.leftedge.position;
      rectMode(CENTER);
      fill("aqua");
      rect(pos.x, pos.y, this.wallwidth, this.wallheight);
      var pos1 = this.rightEdge.position;
      rectMode(CENTER);
      rect(pos1.x,pos1.y,this.wallwidth,this.wallheight);
      var pos2 = this.bottomSurface.position;
      rectMode(CENTER);
      fill("red");
      rect(pos2.x,pos2.y + 20,this.bottomwidth,this.botttomheight);
      image(this.image,pos.x-15,pos.y-150,18*this.wallwidth,2.5*this.wallheight);
    }
  };