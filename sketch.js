var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.30;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY=2

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	console.log(starBody.position.x)
	console.log(starBody.position.y)
	Engine.run(engine);

	fairy.debug = true
	fairy.setCollider("rectangle",500,-20,100,100)
}


function draw() {
  background(bgImg);

  
if(keyDown("left_Arrow")){
	fairy.x-=10
}
if(keyDown("right_Arrow")){
	fairy.x+=10
}
if(fairy.isTouching(star)){
	star.velocityY=0
}
  drawSprites();

}
/*
function keyPressed(){
	if( keyCode === Up_Arrow){ //ascii for space = 32


	}
}






	  */