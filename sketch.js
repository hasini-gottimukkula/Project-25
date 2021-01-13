
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground, dustbinImg;

function preload() {
	dustbinImage = loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 600, 70);

	dustbin = createSprite(640, 625, 20, 20);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.4;

	dustbin1 = new Dustbin(550, 620, 20, 10);
	dustbin2 = new Dustbin(635, 660, 150, 20);
	dustbin3 = new Dustbin(720, 620, 20, 10);

	ground = new Ground(400, 680, 800, 20);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin1.display();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 14, y: -14 });
	}
}



