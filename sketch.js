var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1 = createSprite(width/2,height-50,200,20);
	line1.shapeColor=color("red");
	line2 = createSprite(510,610,20,100);
	line2.shapeColor=color("red");
	line3 = createSprite(310,610,20,100);
	line3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  package1Sprite.x= packageBody1.position.x 
  package1Sprite.y= packageBody1.position.y 

  package2Sprite.x= packageBody2.position.x 
  package2Sprite.y= packageBody2.position.y 

  packageSprite.collide(line1);
  package1Sprite.collide(line1);
  package2Sprite.collide(line1);

  packageSprite.collide(line1);
  package1Sprite.collide(line2);
  package2Sprite.collide(line3);

  packageSprite.collide(line3);
  package1Sprite.collide(line3);
  package2Sprite.collide(line3);
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setnon-Static(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



