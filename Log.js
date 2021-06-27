class Log extends Base{

    constructor(x,y,w,angle){

        super(x,y,w,20);
        Matter.Body.setAngle(this.body,angle);

        this.image = loadImage("wood2.png");

}


display(){

    super.display();

  
}
}