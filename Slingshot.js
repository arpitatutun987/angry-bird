class Slingshot {

    constructor(bodyA,pointB){

        var ab = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.5,
            length : 20
        }

        this.pointB = pointB;
        this.sling = Constraint.create(ab);
        World.add(myWorld,this.sling);

    }

    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;

        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}