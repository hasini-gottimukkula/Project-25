
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground, dustbinImg;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 600, 50);

	dustbin = new Dustbin(640, 625, 100, 120);

	ground = new Ground(400, 680, 800, 20);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	ground.display();
	paper.display();
	dustbin.display();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 200, y: -230 });
	}
}



