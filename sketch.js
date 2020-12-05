const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles={}
var plinkos={}
var divisons={}
var divHeight = 300;
var width = width
function preload()
{
	
}

function setup() {
	createCanvas(475, 710);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	part1 = new Particle(50,50,10,10)
	ground1 = new Ground(260,703,600,20)
	ground2 = new Ground(260,703,600,20)

	for (var k = 0; k <=width; k=k+80) {
		divisons.push(new Border(k,height-divHeight/2,10,divHeight))
	}
	
	for (var j = 40; j <=width; j=j+50) {
	plinkos.push(new Plinko(j,75))
	}
	
	if(frameCount%60===0){
		particles.push(new Particle(random(width/2-10,width/2+10),10,10))
	}
}

function draw() {
  rectMode(CENTER);
  background(56,44,44);
 part1.display()
 ground1.display()
 for (var k = 0; k <=divisons.length; k++) {
	 divisons[k].display();
}
}
