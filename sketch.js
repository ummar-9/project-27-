
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(600,200,600,20);
    bob1 = new Bob(600,400); 
    rope1 = new Rope(bob1.body,{x:600,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 roof1.display();
 bob1.display();
 rope1.display();
  drawSprites();
 
}



