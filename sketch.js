var heroi, caveira, maca, arvore, estrela;
var imgFundo, imgHeroi, imgCaveira, imgMaca, imgArvore, ImgEstrela;
var soloInvisivel;
var groupCaveira, groupArvore;

function preload(){
  imgFundo=loadImage("imagens/imagem_de_fundo_inicio.jpg");
  imgHeroi=loadImage("imagens/heroi.png");
  imgCaveira=loadImage("imagens/caveira.png");
  imgMaca=loadImage("imagens/maca.png");
  imgArvore=loadImage("imagens/arvore.png");
  ImgEstrela=loadImage("imagens/estrela.png");

}

function setup(){
createCanvas(windowWidth, windowHeight);

//sprite heroi
heroi=createSprite(width/2-500,height/2);
heroi.addImage("heroi", imgHeroi);
heroi.scale=0.05;

//solo invisivel
soloInvisivel = createSprite(width/2-1000,height-135,100000,20);

//velocidade caveira
caveira

//grupos
groupCaveira=new Group();
groupArvore=new Group();;
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

  if(keyDown("space") && heroi.y>=543){
    heroi.y-=100
  }

  //movimento da caveira
  if(caveira<1100){
    caveira.velocityX+=0.5
  }
  console.log(heroi.y);

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
    arvore=createSprite(Math.round(random(width/2+460, width*30)),height/2+90);
  arvore.addImage("arvore", imgArvore);
  arvore.scale=0.09;
  groupArvore.add(arvore);
  }
}


function criarCaveira(){
  if(frameCount%100===0){
    caveira=createSprite(Math.round(random(width/2+500, width*30)),height/2);
  caveira.addImage("caveira", imgCaveira);
  caveira.scale=0.05;
  groupCaveira.add(caveira);
  heroi.depth=arvore.depth+1;
  }
}

