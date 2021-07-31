class Pig extends Base{

    constructor(x,y){

        super(x,y,85,85);
        this.image = loadImage("enemy.png");
        this.visiblity = 255;
    }

    display(){

        if(this.body.speed<2){
        super.display();
            
        }

        else{
            World.remove(myWorld,this.body);
            push();
            this.visiblity = this.visiblity-5;
            tint(255,this.visiblity)
            image(this.image,this.body.position.x,this.body.position.y,85,85);
            pop();
        }

      
    }
}