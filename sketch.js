
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	paper = new Paper(200,600,70);
	ground = new Ground(800,690,1600,70);
	binl = new Dustbin(1000,610,20,100);
	binm  = new Dustbin(1100,650,200,20);
	binr = new Dustbin(1200,610,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();    
  paper.display();
  ground.display();
  binl.display();
  binm.display();
  binr.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-100});   
	 }
   } 
 
