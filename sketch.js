var canvas, backgroundImage;
var kid, kidAwake, kidSleeping;
var level1Task1,level1Task2,level2Task1,level2Task2,level3Task1,level3Task2;
var player;
var goalPost;
var football;
var footballImage;
var kickCounter = 0;
var gameState = "start";

function preload(){
  kidAwake = loadImage("images/KidAwake.png");
  kidSleeping = loadImage("images/kidSleeping.png");
  footballImage = loadImage("images/goodFootball.png");
  goalImage = loadImage("images/goal.png");

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);

  
  kid = createSprite(displayWidth-100, displayHeight-100);
  kid.addImage("sleeping",kidSleeping);

  goalPost = createSprite(170,170,30,30);
  goalPost.addImage("goal",goalImage);
  goalPost.visible = false;

  
  football = createSprite(900,600,20,20);
  football.addImage(footballImage);
  football.scale = 0.3;
  football.visible = false;
  

  startButton = createButton("START");

  
  
}



function draw(){
 
  if(gameState==="start"){
    
    background("turquoise");
    textSize(30);
    fill("ivory");
    text("I've been dreaming of.. tasks. They say I need to complete these in order to wake up, Will you help me?", displayWidth/16,displayHeight/4);
    
    text("There are 6 tasks in all,",displayWidth/16,displayHeight/4+50);
    text("one of them being the main task.",displayWidth/16,displayHeight/4+100);
    text("task 1 - level 1",displayWidth/16,displayHeight/4+150);
    text("task 2 - level 1",displayWidth/16,displayHeight/4+200);
    text("task 1 - level 2",displayWidth/16,displayHeight/4+250);
    text("task 2 - level 2",displayWidth/16,displayHeight/4+300);
    text("task 1 - level 3",displayWidth/16,displayHeight/4+350);

    fill("red");
    text("task 2 - level 3 - FINAL",displayWidth/16,displayHeight/4+400);

    startButton.position(displayWidth/2,displayHeight/3+50);
  }



    startButton.mousePressed(()=>{
      background("green");
      
      startButton.hide();
      gameState="T1L1";
      
    })

    if(gameState === "T1L1"){
      level1Task1 = new Task1Level1(football);
      level1Task1.display();
      football.x = 900;
      football.y = 600;
      kid.visible = false;
    }
    
    if(keyDown(UP_ARROW)&& gameState === "T1L1"){
      gameState = "T1L1_START";
      football.velocityX = -5.5;
      football.velocityY = -3;
      //background("green");
      
    }

    if(football.isTouching(goalPost)){
      level1Task1.display();
      kickCounter = kickCounter + 1;
      football.bounceOff(goalPost);
      text(kickCounter,300,50);
      gameState = "T1L1";
   
    }
    
   
    
  
 
  drawSprites();
}
