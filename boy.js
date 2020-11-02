class Boy extends BaseClass {
    constructor(x, y,width, height) {
        var options = {
            isStatic:true
        }
        super(x, y,width,height,options);
        this.image = loadImage("boy-cutout.png");
    }

    display() {
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;
        super.display();
    }
}