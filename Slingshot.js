class Slingshot {

    constructor(bodyA,pointB){

        var ab = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.02,
            length : 10
        }

        this.pointB = pointB;
        this.img1 = loadImage("sling1.png");
        this.img2 = loadImage("sling2.png");
        this.img3 = loadImage("sling3.png");
        this.sling = Constraint.create(ab);
        World.add(myWorld,this.sling);

    }

    fly(){

        this.sling.bodyA = null;
    }

    attach(body){
      this.sling.bodyA = body
    }

    display(){

        image(this.img1,380,282);
        image(this.img2,350,282);
        if(this.sling.bodyA){

          var pointA = this.sling.bodyA.position;
          var pointB = this.sling.pointB;

          push();

          stroke(48,22,8);

          if(pointA.x<350){
            strokeWeight(8);
            line(pointA.x -20,pointA.y,pointB.x -10,pointB.y);
            line(pointA.x -20,pointA.y,pointB.x +30,pointB.y -3);
            image(this.img3,pointA.x -30,pointA.y -10,15,30);
          }

          else {
            strokeWeight(4);
            line(pointA.x +25,pointA.y,pointB.x -10,pointB.y);
            line(pointA.x +25,pointA.y,pointB.x +30,pointB.y -3);
            image(this.img3,pointA.x +25,pointA.y -10,15,30);
              
          }

          pop();
        }
    }
}