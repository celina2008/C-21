var fixedRect, movingRect;
var object1,object2,object3,object4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(200,200,50,60)
  object1.shapeColor="green"
object2=createSprite(300,200,50,60)
object2.shapeColor="green"
object3=createSprite(400,200,50,60)
object3.shapeColor="green"

object4=createSprite(500,200,50,60)
object4.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,object1)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  
  drawSprites();
}

function isTouching(obj1,obj2){

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {
  return true
}
else {
  return false
}
}
