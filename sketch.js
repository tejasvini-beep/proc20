var bgImg;
var bath;
var brush;
var gym;
var gym2;
var eat;
var sleep;
var move;
var drink;
var astronaut;



function preload() {
bgImg= loadImage("iss.png");
bath= loadAnimation("bath1.png", "bath2.png");
brush=loadImage("brush.png");
gym=loadAnimation("gym1.png", "gym2.png");
gym2=loadAnimation("gym11.png", "gym12.png");
eat=loadAnimation("eat1.png", "eat2.png");
sleep=loadImage("sleep.png");
move=loadAnimation("move.png");
drink= loadAnimation("drink1.png", "drink2.png");




}

function setup() {
  createCanvas(1550,750);
  
  astronaut = createSprite(750,400);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.2;
  
}

function draw() {
  background(bgImg);  
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",25, 40);
  textSize(15);
  text("Up Arrow = Brushing",25, 55);
  text("Right Arrow = Bathing",25, 100);
  text("Left Arrow = Eating",25, 85);
  text("Down Arrow = Gymming",25, 70);
  text("m key = Moving",25, 115);
  text("D key = drinking",25, 130);
  text("G key = gymming2",25, 145);

 

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

 if (keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("bathing", bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.x = 150;
  astronaut.y = 300;
  astronaut.velocityX = 0.5;
  astronaut.velocityY = 0.5;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("M")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.y = 300;
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}

if(keyDown("D")){
  astronaut.addAnimation("drinking", drink);
  astronaut.changeAnimation("drinking");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 
}

if(keyDown("G")){
  astronaut.addAnimation("gymming2", gym2);
  astronaut.changeAnimation("gymming2");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}


}