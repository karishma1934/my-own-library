var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";


  rect1 = createSprite(200,100.20,80);
  rect1.shapeColor = "blue";
  rect2 = createSprite(600,300,20,80);
  rect2.shapeColor = "pink";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //function call
  if(isTouching(movingRect,rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    rect2.shapeColor = "blue";
  }


  drawSprites();
}
//function definition
