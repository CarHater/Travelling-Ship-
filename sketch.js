var ship, shipImage; 
var sea, seaImage;


function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,400);

  sea = createSprite(0,0,500,200);
  sea.addAnimation("sea",seaImage);
  sea.x = sea.width/2;
  sea.velocityX = -4;
  sea.scale=1;

  ship = createSprite(50,160,20,50);
  ship.addAnimation("ship",shipImage);
  ship.scale = 0.2;

}

function draw() {
  
  background("blue");

  if (keyDown("left_arrow")){
    ship.x=ship.x-10;
  }

  if (keyDown("right_arrow")){
    ship.x=ship.x+10;
  }
  
  drawSprites();
  
}