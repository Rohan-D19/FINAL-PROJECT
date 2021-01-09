var backgroundImg;
var hot;
var game;


function preload(){
    backgroundImg = loadImage("IcePath.png");
    flameImg = loadImage("flame.png");
}
function setup(){
  hot = createSprite(displayWidth/2, displayHeight/2, 50, 75)
  hot.addImage(flameImg);
  hot.scale = 0.225;
  backgroundImg.scale = 0.5;
    createCanvas(displayWidth, displayHeight);      
 ;
}
function draw(){
  //background(rgb(198,135,103));
  image(backgroundImg, 0,-displayHeight*4,displayWidth*2, displayHeight*5);   
     if(keyIsDown(DOWN_ARROW)){
    hot.y = hot.y + 10;
  }
  if(keyIsDown(UP_ARROW)){
    hot.y = hot.y - 10;
  } 
  if(keyIsDown(RIGHT_ARROW)){
    hot.x = hot.x + 10;
  }
  if(keyIsDown(LEFT_ARROW)){
    hot.x = hot.x - 10;
  } 
  if(keyDown("r")){
    reset();
  }
     camera.position.x = hot.x;
    camera.position.y = hot.y;
     drawSprites();
}

function reset(){
  image(backgroundImg, 0,-displayHeight*4,displayWidth*2, displayHeight*5);   
  hot.x = displayWidth/2;
  hot.y = displayHeight/2;
}