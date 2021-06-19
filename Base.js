class Base {

    constructor(x,y,w,h,angle){

        var options = {

            restitution : 1,
            friction : 2,
            density : 1
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(myWorld,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
        
    }
}