
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball, ground, rect1, rect2, rect3;
var paperImage, dustbinImage;
function preload()
{
	paperImage=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperball=new Paper(100,667,30);

ground=new Ground(400, 670, 800, 20);
rect1=new Dustbin(607.5, 610.5, 15, 100);
rect2=new Dustbin(392.5, 610.5, 15, 100);
rect3=new Dustbin(500, 653, 200, 15);
paperball.addImage(paperImage)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperball.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if( keyCode=== UP_ARROW){
Matter.Body.applyForce(paperball.body, paperball.body.position, {x:1, y:-3})

	}


	
}

