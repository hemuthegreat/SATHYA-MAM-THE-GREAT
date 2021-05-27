var ob1,ob2
function setup() {
  createCanvas(800,400);
  ob1 = createSprite(400, 200, 50, 50);
  ob2 = createSprite(400,400,100,150)
  ob1.shapeColor = "green"
  ob2.shapeColor = "green"
  ball1 = createSprite(10,10,10,10);
  ball2 = createSprite(10,100,10,10);
  ball1.velocityY = 3
  ball2.velocityY = -3
}

function draw() {
  background(255,255,255);  
  ob2.x = mouseX
  ob2.y = mouseY

bounceOff(ball1,ball2)
 
  drawSprites();
}
function bounceOff(ob1,ob2){
 if(ob2.x-ob1.x <=ob2.width/2+ob1.width/2&&
     ob1.x-ob2.x <=ob2.width/2+ob1.width/2)
 {
   ob1.velocityX = (-1)*ob1.velocityX
   ob2.velocityX = (-1)*ob2.velocityX    
  }
  if(ob2.y-ob1.y <=ob2.height/2+ob1.height/2&&
     ob1.y-ob2.y <=ob2.height/2+ob1.height/2)
 {
  ob1.velocityY = (-1)*ob1.velocityY
   ob2.velocityY = (-1)*ob2.velocityY
  }
 

}





