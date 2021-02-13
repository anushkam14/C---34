const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box (700,320,70,70);
    box2 = new Box (820,320,70,70);
    box3 = new Box (700,320,70,70);
    box4 = new Box (820,320,70,70);
    box5 = new Box (700,320,70,70);
    box6 = new Box (820,320,70,70);
    box7 = new Box (700,320,70,70);
    box8 = new Box (820,320,70,70);
    box9 = new Box (700,320,70,70);
    box10 = new Box (820,320,70,70);

   
    ball1 = new Ball(200,200)
    chain = new Rope(ball1.body, {x:600,y:20})
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ground.display();

    ball1.display();

    chain.display();

}

function mouseDragged (){
    Matter.Body.setPosition (ball1.body,{x:mouseX, y:mouseY})
}