class Base {

    constructor(x,y,w,h,angle){

        var options = {

            restitution : 0.5,
            friction : 5,
            density : 1
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("base.png");
        World.add(myWorld,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
       imageMode(CENTER);
       image(this.image,0,0,this.w,this.h);
        pop();
        
    }
}