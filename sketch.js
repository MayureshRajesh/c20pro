var car,wall,speed,weight



function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 50, 50);
 speed=random(55,90)
 weight=random(400,1500)
 car.velocityX=speed;
 wall=createSprite(1500,200,60,height/2);

}

function draw() {
  background(255,255,255);
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
  if(deformation>180){
    car.shapeColor="red"
  }
  else if(deformation<100){
    car.shapeColor="green";
  }
  else{
    car.shapeColor="yellow";    
  }
  } 
 
  drawSprites();
}