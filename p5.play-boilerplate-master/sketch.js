const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world;
 grd= new ground(400,380,800,15)
 box1=new box(600,350,50,50)
 box2=new box(600,300,50,50)
 box3=new box(600,250,50,50)
 box4=new box(600,200,50,50)
 ball=new ball(500,347,50,50,PI/2)
 rope=new rope(ball.body,{x:350,y:25})
} 

function draw() {
  background(0);
  Engine.update(engine)
  grd.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}