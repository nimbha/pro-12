var boy,boyImage,path,pathImage
var leftBoundry,rightBoundry
function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
boyImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
path.addImage(pathImage)
path.velocityY=4;
path.scale=1.2;

boy=createSprite(200,350,50,50)
boy.addAnimation("running",boyImage)
boy.scale=0.1

leftBoundry=createSprite(100,200,10,400)
leftBoundry.visible=false

rightBoundry=createSprite(300,200,10,400)
rightBoundry.visible=false

}

function draw() {
  background(0);
if (path.y >400){
  path.y=height/2;
}

boy.x=World.mouseX




  drawSprites()
}
