class Dust extends BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        super(x, y,width,height,options);
        this.image = loadImage("dust.png");
    }
    display(){
        super.display();
    }
}