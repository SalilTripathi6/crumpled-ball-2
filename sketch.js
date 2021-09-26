
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground= new Ground(600,680,1200,40);
    dustbin = new Dustbin()
	 ball= new Ball (50,660,16);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210,210,45);
  dustbin.display();
  ball.display();
  ground.display();
  drawSprites();
 
}

function keyPressed () {
	console.log("sjjs")
	if (keyCode === UP_ARROW){
      console.log("bjbj")
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.01,y:-0.01})
	}
}



