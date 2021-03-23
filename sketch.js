
const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	s1 = new stone(400, 50, 50, 500);
	c1 = new bob(200, 200);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  s1.display();
  c1.display();
 
}
