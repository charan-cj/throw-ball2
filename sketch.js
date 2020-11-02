
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,boy,dust,throw1;
var backimg;


function preload()
{
	backimg = loadImage("trees.jpg");
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	// ball = new Ball(215,320,30,30);
	boy = new Boy(250,350,100,100);
	dust = new Dust(750,350,70,70);
	ball = new Ball(215,310);
	ground1 = new Ground(450,400,900,10);
	throw1 = new Throw(ball.body,{x:200,y:250});
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(backimg);
//   ballthrow();
  drawSprites();
  throw1.display();
  ball.display();
  boy.display();
  dust.display();
  ground1.display();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}
function mouseRelease(){
	throw1.fly();
}



