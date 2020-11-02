class Ball extends BaseClass{
    constructor(x,y){
        super(x,y,20,20,);
        this.image = loadImage("ball-1.png");
      }
    
      display() {
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;
        super.display();
      }
    }
    