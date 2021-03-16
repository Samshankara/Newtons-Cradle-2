
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var canvas;


function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;



	bob1 = new Bob(320,260,40);
	bob2 = new Bob(360,260,40);
	bob3 = new Bob(400,260,40);
	bob4 = new Bob(440,260,40);
	bob5 = new Bob(480,260,40);
	

	rope1 = new Rope(bob1.body,{x:320, y: 160});
	rope2 = new Rope(bob2.body,{x:360, y: 160});
	rope3 = new Rope(bob3.body,{x:400, y: 160});
	rope4 = new Rope(bob4.body,{x:440, y: 160});
	rope5 = new Rope(bob5.body,{x:480, y: 160});




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  
  drawSprites();

  
  rope1.display(); 
  bob1.display();
  rope2.display(); 
  bob2.display();
  rope3.display(); 
  bob3.display();
  rope4.display(); 
  bob4.display();
  rope5.display(); 
  bob5.display();

}

function mouseDragged(){

Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})

}