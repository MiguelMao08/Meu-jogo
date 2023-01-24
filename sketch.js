var heroi, inimigo;

function setup(){
createCanvas(1000,1000);
heroi=createSprite(width/2-500,height/2);
inimigo=createSprite(width/2+500,height/2);
}

function draw(){
  background("black");

  //biblioteca p5
  if(keyIsDown(RIGHT_ARROW)){
    heroi.x+=20; //biblioteca p5.play (p5: heroi.position.x += 20)
  }
  //camera do jogo
  camera.x = heroi.x;

  drawSprites();
}

