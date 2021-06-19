const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){

    createCanvas(1200,800);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,790,1200,20);

   
}

function draw(){

    background(0);

    Engine.update(myEngine);

    ground.display();


}
