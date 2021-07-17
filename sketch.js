const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;

function preload(){

    bg = loadImage("bg.png");
}

function setup(){

    createCanvas(1200,800);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,790,1200,20);
    bird = new Bird(200,200);

    box1 = new Box(800,740);
    box2 = new Box(1000,740);
    pig1 = new Pig (900,740);
    log1 = new Log(900,700,300,PI);

    box3 = new Box(800,660);
    box4 = new Box(1000,660);
    pig2 = new Pig(900,660);
    log2 = new Log(900,620,300,PI);

    box5 = new Box(800,580);
    box6 = new Box(1000,580);
    pig3 = new Pig(900,580);
    log3 = new Log(900,540,300,PI);

    box7 = new Box(900,500);
    log4 = new Log(800,450,200,-3*PI/7);
    log5 = new Log(1000,450,200,3*PI/7);

    platform = new Ground(230,630,450,300);
    slingshot = new Slingshot(bird.body,{x : 370,y : 315});


   
}


function draw(){

    background(bg);

    Engine.update(myEngine);

    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    bird.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    box6.display();
    pig3.display();
    log3.display();
    log4.display();
    log5.display();
    box7.display();
    platform.display();
    slingshot.display();
    
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x : mouseX, y : mouseY});
}

function mouseReleased(){

    slingshot.fly();
}

