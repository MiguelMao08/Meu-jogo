var heroi, inimigo;
var imgFundo, imgHeroi, imgInimigo;
var soloInvisivel;

function preload(){
  imgFundo=loadImage("imagens/imagem_de_fundo_inicio.jpg")

}

function setup(){
createCanvas(windowWidth, windowHeight);
heroi=createSprite(width/2-500,height/2);
inimigo=createSprite(width/2+500,height/2);

//solo invisivel
soloInvisivel = createSprite(width/2-1000,height-135,2550,20);
}

function draw(){
  background(imgFundo);

  //biblioteca p5
  if(keyIsDown(RIGHT_ARROW)){
    heroi.x+=20; //biblioteca p5.play (p5: heroi.position.x += 20)
  }
  
  if(keyIsDown(LEFT_ARROW)){
    heroi.x-=20;
  }

  if(keyDown("space") && heroi.y>=551){
    heroi.y-=35
  }
  console.log(heroi.y);

  //camera do jogo
  camera.x = heroi.x;

  //gravidade
  heroi.velocityY+=2;

  //colisao
  heroi.collide(soloInvisivel);

  drawSprites();
}

