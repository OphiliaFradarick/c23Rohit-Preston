const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas, engine, world

function setup(){
  canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,390,400,20);

  box1 = new Box(240,50,80,100);
  box2 = new Box(200,100,50,50);

}
function draw()
{
  background(0);
  Engine.update(engine);

 ground.display();
 box1.display();
 box2.display();
  
}
