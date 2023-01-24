var heroi, inimigo;

function setup(){
createCanvas(windowWidth,windowHeight);
heroi=createSprite(width/2-500,height/2);
inimigo=createSprite(width/2+500,height/2);
}

function draw(){
  background("black");

  if(keyDown("right")){
    heroi.x+=2;
  }

  drawSprites();
}

