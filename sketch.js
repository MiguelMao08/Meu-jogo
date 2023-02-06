var heroi, caveira, maca, arvore;
var imgFundo, imgFundo2, imgHeroi, imgCaveira, imgMaca, imgArvore, imgEstrela, imgBomba, imgExplosao, imgExplosao, imgVida;
var soloInvisivel;
var groupCaveira, groupArvore;
var fundo, fundo2;

function preload(){
  imgFundo=loadImage("imagens/imagem_de_fundo_inicio.jpg");
  imgHeroi=loadImage("imagens/heroi.png");
  imgCaveira=loadImage("imagens/caveira.png");
  imgMaca=loadImage("imagens/maca.png");
  imgArvore=loadImage("imagens/arvore.png");
  imgEstrela=loadImage("imagens/estrela.png");
  imgBomba=loadImage("imagens/bomba.png");
  imgExplosao=loadImage("imagens/explosao.png");
  imgVida=loadImage("imagens/vida.png");
 
}

function setup(){
createCanvas(windowWidth, windowHeight);
fundo=createSprite(0,height/2,width,height);
fundo.addImage(imgFundo);
fundo.scale=0.135;
fundo2=createSprite(width,height/2,width,height);
fundo2.addImage(imgFundo);
fundo2.scale=0.135;
//sprite heroi
heroi=createSprite(width/2-500,height/2);
heroi.addImage("heroi", imgHeroi);
heroi.scale=0.3;

//solo invisivel
soloInvisivel = createSprite(width/2-1000,height-135,100000,20);

//velocidade caveira
//caveira

//grupos
groupCaveira=new Group();
groupArvore=new Group();;
}

function draw(){
  //background(imgFundo);

  //movimentacao do  fundo
  if(heroi.x-fundo.x>width){
    fundo.x=heroi.x+width;
  }

  if(heroi.x-fundo2.x>width){
    fundo2.x=heroi.x+width;
  }

  //biblioteca p5
  if(keyIsDown(RIGHT_ARROW)){
    heroi.x+=20; //biblioteca p5.play (p5: heroi.position.x += 20)
  }
  
  if(keyIsDown(LEFT_ARROW)){
    heroi.x-=20;
  }

  if(keyDown("space") && heroi.y>=height-135-76){
    heroi.y-=120
  }

  //movimento da caveira
  if(caveira<1100){
    caveira.velocityX+=0.5
  }
  //console.log(heroi.y);
  //console.log(soloInvisivel.y);
  //console.log(height-135);

  //camera do jogo
  camera.x = heroi.x;

  //gravidade
  heroi.velocityY+=1;
  groupCaveira.setVelocityYEach(3);
  //groupArvore.setVelocityXEach(-5);

  //colisao
  heroi.collide(soloInvisivel);
  groupCaveira.collide(soloInvisivel);

  //chamar funçao
  criarArvore();
  criarCaveira();

  drawSprites();
}

function criarArvore(){
  if(frameCount%100===0){
    arvore=createSprite(Math.round(random(width/2+460, width*30)),height/2+117);
  arvore.addImage("arvore", imgArvore);
  arvore.scale=0.7;
  groupArvore.add(arvore);
  }
}


function criarCaveira(){
  if(frameCount%100===0){
    caveira=createSprite(Math.round(random(width/2+500, width*30)),height/2);
  caveira.addImage("caveira", imgCaveira);
  caveira.scale=0.5;
  groupCaveira.add(caveira);
  heroi.depth=arvore.depth+1;
  }
}

