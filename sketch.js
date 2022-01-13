var backgroundImg, backgroundImage


function preload(){

  gameImg1 = loadImage("assets/scene1.jpg")
  backgroundImage = loadImage("assets/12.png")
  itext = loadImage("assets/io.png")
  runnerimg = loadImage("assets/runner1.png")


 ///GAME 1


  ground1Img = loadImage("assets/game_1/ground(1).png")
  jeepImg = loadImage("assets/game_1/jeep.png")
  jeepImg2 = loadImage("assets/game_1/jeep2.png")
  bagImg = loadImage("assets/game_1/bags.png")
  barrelsImg = loadImage("assets/game_1/barrel.png")
  barrels2Img = loadImage("assets/game_1/obj_barrels.png")
  missileImg = loadImage("assets/game_1/missile.png")
  enemyBase = loadImage("assets/game_1/obj_bags2.png")
  collidedSound = loadSound("assets/game_1/collided.wav")
  jumpSound = loadSound("assets/game_1/jump12.wav")
  wonSound = loadSound("assets/game_1/won.wav")
  missileSound = loadSound("assets/game_1/missile.wav")
  tickImage = loadImage("assets/game_1/tick.png")


  ///GAME 2


  HgroundImg = loadImage("assets/game_2/Hground.jpg")
  greenBgImg = loadImage("assets/game_2/green.jpg")
  ballImg = loadImage("assets/game_2/Ball.png")
  player1Img = loadImage("assets/game_2/player1.png")
  player2Img = loadImage("assets/game_2/player2.png")




  ///GAME 3




 
  game_3Img = loadImage("assets/game_3/BG.png")
  groundTileImg = loadImage ("assets/game_3/Untitled(2).png")
  ninjaR = loadAnimation("assets/game_3/run/Run__000.png","assets/game_3/run/Run__001.png","assets/game_3/run/Run__002.png","assets/game_3/run/Run__003.png","assets/game_3/run/Run__004.png","assets/game_3/run/Run__005.png","assets/game_3/run/Run__006.png","assets/game_3/run/Run__007.png","assets/game_3/run/Run__008.png","assets/game_3/run/Run__009.png")
  zombieA =loadAnimation("assets/game_3/zombieRUN/Attack (1).png","assets/game_3/zombieRUN/Attack (2).png","assets/game_3/zombieRUN/Attack (3).png","assets/game_3/zombieRUN/Attack (4).png","assets/game_3/zombieRUN/Attack (5).png","assets/game_3/zombieRUN/Attack (6).png","assets/game_3/zombieRUN/Attack (7).png")
  knifeImg = loadImage("assets/game_3/knife.png")


}

function setup() {
  createCanvas(windowWidth, windowHeight-1);
  background('255');

  backgroundImg = createSprite(width /2,height /2-30,450,20);
  backgroundImg.addImage("backgroundImg",backgroundImage);
  backgroundImg.scale=1.93
  //backgroundImg.visible=false

  introtext = createSprite(width/2,height/2)
  introtext.addImage(itext)
  introtext.scale = 0.7

  introbox = createButton("Let's Start");
  introbox.position(width/2-70,height/2+70)
  introbox.mousePressed(start1)
  introbox.size(150,100)

  gameImg = createSprite(width/2,height/2)
  gameImg.addImage(gameImg1)
  gameImg.scale=1.8
  gameImg.visible=false;

  runner =createSprite(width/2-80,height/2+40)
  runner.addImage(runnerimg)
  runner.scale=0.06
  runner.visible=false;

  invisiblehouse1 = createSprite(width/2-175,height/2-120,160,130)
  invisiblehouse1.visible=false;
 
  invisiblehouse2 = createSprite(width/2+40,height/2-160,120,200)
  invisiblehouse2.visible=false;

  invisiblehouse3 = createSprite(width/2+20,height/2+130,85,140)
  invisiblehouse3.visible=false;

  /*goButton1 = createButton("GO");
  goButton1.position(width/2-192.5,height/2-75)
  goButton1.mousePressed(game1)*/




  ///GAME 1




  
  ground = createSprite(width/2,height/2)
  ground.addImage(ground1Img)
  ground.scale=0.9
  ground.visible=false

  jeep = createSprite(150,height/2)
  jeep.addImage(jeepImg)
  jeep.scale = 0.3
  jeep.visible=false

  jeep2 = createSprite(width-150,height/2)
  jeep2.addImage(jeepImg2)
  jeep2.scale = 0.3
  jeep2.visible=false

  jeepwall1=createSprite(width-260,height/2,20,height)
  jeepwall1.addImage(enemyBase)
  jeepwall1.visible=false
  jeepwall2=createSprite(width-260,height/2,20,height)
  jeepwall2.addImage(enemyBase)
  jeepwall2.visible=false
  jeepwall3=createSprite(width-260,height/2,20,height)
  jeepwall3.addImage(enemyBase)
  jeepwall3.visible=false
  jeepwall4=createSprite(width-260,height/2,20,height)
  jeepwall4.addImage(enemyBase)
  jeepwall4.visible=false

  bags = createSprite(350,100)
  bags.addImage(bagImg)
  bags.scale = 0.9
  bags.visible=false

  bags2 = createSprite(350,height-100)
  bags2.addImage(bagImg)
  bags2.scale = 0.9
  bags2.visible=false

  topEdge = createSprite(width/2,0,1000,0)
  topEdge.visible=false
  bottomEdge = createSprite(width/2,height,1000,0)
  bottomEdge.visible =false

  barrels = createSprite(width/3,height/2)
  barrels.addImage(barrelsImg)
  barrels.scale = 0.8
  barrels.velocityY=5
  barrels.visible=false

  barrels2 = createSprite(width/2,height/2)
  barrels2.addImage(barrelsImg)
  barrels2.scale = 0.8
  barrels2.velocityY=-5
  barrels2.visible=false

  barrels3 = createSprite(width/3+width/3,height/2)
  barrels3.addImage(barrelsImg)
  barrels3.scale = 0.8
  barrels3.velocityY=5
  barrels3.visible=false

  missileGroup = new Group();




  ///GAME 2



  greenBg = createSprite(width/2,height/2)
  greenBg.addImage(greenBgImg)
  greenBg.visible=false

  Hground = createSprite(width/2,height/2)
  Hground.addImage(HgroundImg)
  Hground.scale=1.2
  Hground.visible= false

  ball = createSprite(width/2, height/2+4)
  ball.addImage(ballImg)
  ball.scale=0.3
  ball.visible=false

  player1 = createSprite(width/2-200,height/2)
  player1.addImage(player1Img)
  player1.scale = 0.3
  player1.visible=false

  player2 = createSprite(width/2+200,height/2)
  player2.addImage(player2Img)
  player2.scale = 0.3
  player2.visible=false

  topEdge1=createSprite(width/2,0,1500,20)
  topEdge1.visible=false

  bottomEdge1=createSprite(width/2,height,1500,20)
  bottomEdge1.visible=false

  rightEdge1=createSprite(width-200,height/2,0,1000)
  rightEdge1.visible=false

  leftEdge1=createSprite(200,height/2,0,1000)
  leftEdge1.visible=false

  goalR = createSprite(350,height/2+5,10,200)
  goalR.visible = false
  goalB = createSprite(width-350,height/2+5,10,200)
  goalB.visible = false





///GAME 3




  game_3bg = createSprite(width/2,height/2+30)
  game_3bg.addImage(game_3Img)
  game_3bg.scale=0.8
  game_3bg.visible=false

  groundTile =createSprite(width/2,height-350)
  groundTile.addImage(groundTileImg)
  groundTile.scale = 0.8
  groundTile.visible=false

  ninja = createSprite(120,height-230)
  ninja.addAnimation("ninjaRunning",ninjaR)
  ninja.scale = 0.35
  ninja.visible=false


  zombie =createSprite(width-200,height/2-50)
  zombie.addAnimation("zombiehaha",zombieA)
  zombie.scale =1.0
  //zombie.velocityX=-3
  zombie.visible=false

  w1=createSprite(width-450,height/2,20,height)
  w1.visible=false
  w2=createSprite(width-450,height/2,20,height)
  w2.visible=false
  w3=createSprite(width-450,height/2,20,height)
  w3.visible=false
  w4=createSprite(width-450,height/2,20,height)
  w4.visible=false
  w5=createSprite(width-450,height/2,20,height)
  w5.visible=false
  w6=createSprite(width-450,height/2,20,height)
  w6.visible=false
  w7=createSprite(width-450,height/2,20,height)
  w7.visible=false
  w8=createSprite(width-450,height/2,20,height)
  w8.visible=false
  w9=createSprite(width-450,height/2,20,height)
  w9.visible=false
  

  
  
  
  zombieGroup = new Group();
  zombieGroup.add(zombie)
  knifeGroup = new Group();

  }
function draw() {
 
  drawSprites();


  var jeepY=jeep.y
  barrels.bounceOff(topEdge)
  barrels2.bounceOff(topEdge)
  barrels3.bounceOff(topEdge)
  barrels.bounceOff(bottomEdge)
  barrels2.bounceOff(bottomEdge)
  barrels3.bounceOff(bottomEdge)

  if (keyDown(UP_ARROW)&&gameImg.visible===true) {
    runner.y=runner.y-3
  }
  if (keyDown(DOWN_ARROW)&&gameImg.visible===true) {
    runner.y=runner.y+3
  }
  if (keyDown(LEFT_ARROW)&&gameImg.visible===true) {
    runner.x=runner.x-3
  }
  if (keyDown(RIGHT_ARROW)&&gameImg.visible===true) {
    runner.x=runner.x+3
  }

  if(runner.overlap(invisiblehouse1)){
    game1();
  }
  if(runner.overlap(invisiblehouse2)){
    game2();
  }
  if(runner.overlap(invisiblehouse3)){
    game_3();
  }




  ///GAME 1





  if (keyDown(UP_ARROW)&&ground.visible===true) {
    jeep.y=jeep.y-3
  }
  if (keyDown(DOWN_ARROW)&&ground.visible===true) {
    jeep.y=jeep.y+3
  }

  if (keyDown("space")&&ground.visible===true&&Hground.visible===false) {
    missile = createSprite(325,jeepY)
    missile.addImage(missileImg)
    missile.scale=0.1
    missile.velocityX=9
    missileGroup.add(missile);
    missileSound.play();
  }

  if (bags.overlap(missileGroup)) {
    missileGroup.destroyEach()
  }

  if (bags2.overlap(missileGroup)) {
    missileGroup.destroyEach()
  }

  if (jeep2.overlap(missileGroup)) {
    runner.visible=true
    jeep2.destroy();
    wonSound.play()
    runner.visible=true
    //start1();
    ground.destroy()
    jeep.destroy()
    bags.destroy()
    bags2.destroy()
    barrels.destroy()
    barrels2.destroy()
    barrels3.destroy()

    tick1 = createSprite(width/2-192.5,height/2-75)
    tick1.addImage(tickImage)
    tick1.scale = 0.03

    Swal.fire({
      icon: 'success',
      title: 'Yeah! You Won...',
      text: 'Congratulations! You have Won now play Other Levels and ENJOY!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'GO TO HOME'
    })

  }

  if (jeepwall1.overlap(missileGroup)) {
    jeepwall1.destroy();
    missileGroup.destroyEach();
    jumpSound.play();
  }

  if (jeepwall2.overlap(missileGroup)) {
    jeepwall2.destroy();
    missileGroup.destroyEach();
    jumpSound.play();
  }

  if (jeepwall3.overlap(missileGroup)) {
    jeepwall3.destroy();
    missileGroup.destroyEach();
    jumpSound.play();
  }

  if (jeepwall4.overlap(missileGroup)) {
    jeepwall4.destroy();
    missileGroup.destroyEach();
    jumpSound.play();
  }

  if (barrels.overlap(missileGroup)) {
    missileGroup.destroyEach();
    //jeep2.y = Math.round(random(0,windowHeight));
    collidedSound.play();
  }

  if (barrels2.overlap(missileGroup)) {
    missileGroup.destroyEach();
    //jeep2.y = Math.round(random(0,windowHeight));
    collidedSound.play();
  }

  if (barrels3.overlap(missileGroup)) {
    missileGroup.destroyEach();
    //jeep2.y = Math.round(random(0,windowHeight));
    collidedSound.play();
  }




  ///GAME 2




  ball.bounceOff(topEdge1)
  ball.bounceOff(bottomEdge1)
  ball.bounceOff(rightEdge1)
  ball.bounceOff(leftEdge1)

 if (keyDown("space")&&Hground.visible===true&&ball.velocityX===0&&ball.velocityY===0) {
   ball.velocityX=-2
   ball.velocityY=3
 }

 if (keyDown(UP_ARROW)&&Hground.visible===true) {
  player2.y=player2.y-3
 }
 if (keyDown(DOWN_ARROW)&&Hground.visible===true) {
  player2.y=player2.y+3
 }
if (keyDown(LEFT_ARROW)&&Hground.visible===true) {
  player2.x=player2.x-3
}
if (keyDown(RIGHT_ARROW)&&Hground.visible===true) {
  player2.x=player2.x+3
}
 if (ball.overlap(goalR)) {
   ball.velocityX=0
   ball.velocityY=0
   ball.position(width/2,height/2)
 }
 if (ball.overlap(goalB)) {
  ball.velocityX=0
  ball.velocityY=0
}






///GAME 3




if (frameCount % 240 === 0&&game_3bg.visible===true&&groundTile.visible===true&&ninja.visible===true) {

  

}

if (keyDown("space")&&game_3bg.visible===true&&groundTile.visible===true&&ninja.visible===true) {


  knife = createSprite(44,56)
  knife.addImage(knifeImg)
  knife.velocityX=9
  knife.scale=0.6
  knife.y=ninja.y
  knife.x=ninja.x+60

  knifeGroup.add(knife)
}

if (knifeGroup.overlap(zombieGroup)) {
  knifeGroup.destroyEach();
  zombieGroup.destroyEach();
  score=score+1
}
/*if(score===10){
  tick3 = createSprite(width/2,height/2)
    tick3.addImage(tickImage)
    tick3.scale = 0.03

    Swal.fire({
      icon: 'success',
      title: 'Yeah! You Won...',
      text: 'Congratulations! You have Won now play Other Levels and ENJOY!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'GO TO HOME'
    })
}*/
if (w1.overlap(knifeGroup)) {
  w1.destroy()
  knifeGroup.destroyEach();
}
if (w2.overlap(knifeGroup)) {
  w2.destroy()
  knifeGroup.destroyEach();
}
if (w3.overlap(knifeGroup)) {
  w3.destroy()
  knifeGroup.destroyEach();
}
if (w4.overlap(knifeGroup)) {
  w4.destroy()
  knifeGroup.destroyEach();
}
if (w5.overlap(knifeGroup)) {
  w5.destroy()
  knifeGroup.destroyEach();
}
if (w6.overlap(knifeGroup)) {
  w6.destroy()
  knifeGroup.destroyEach();
}
if (w7.overlap(knifeGroup)) {
  w7.destroy()
  knifeGroup.destroyEach();
}
if (w8.overlap(knifeGroup)) {
  w8.destroy()
  knifeGroup.destroyEach();
}
if (w9.overlap(knifeGroup)) {
  w9.destroy()
  knifeGroup.destroyEach();
}






  

}

function start1(){

  introtext.destroy();
  introbox.hide();
  

  gameImg.visible=true;
  runner.visible=true;

}
  
function game1(){

  //runner.visible=false
  ground.visible=true;
  jeep.visible=true;
  jeep2.visible=true;
  bags.visible=true;
  bags2.visible=true;
  barrels.visible=true;
  barrels2.visible=true;
  barrels3.visible=true;
  jeepwall1.visible=true
  jeepwall2.visible=true
  jeepwall3.visible=true
  jeepwall4.visible=true
  barrels.bounceOff(topEdge)
  barrels2.bounceOff(topEdge)
  barrels3.bounceOff(topEdge)
  barrels.bounceOff(bottomEdge)
  barrels2.bounceOff(bottomEdge)
  barrels2.bounceOff(bottomEdge)
  
}

function game2(){
  
  score=0
  fill(255);
  textSize(30);
  text("Score: "+score, width/2-50, 100);
  textAlign(CENTER, CENTER);
  Hground.visible= true
  greenBg.visible=true
  ball.visible=true
  player1.visible=true
  player2.visible=true

  

}

function game_3(){


  game_3bg.visible=true
  groundTile.visible=true
  ninja.visible=true
  zombie.visible=true

  score=0
  fill(000);
  textSize(30);
  text("Score:"+score, width/2, height/2);
}
