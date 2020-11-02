class Throw {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.throwball = Constraint.create(options);
        World.add(world, this.throwball);
    }
    fly() {
        this.throwball.bodyA = null;
    }

    display() {
        if (this.throwball.bodyA) {
            var pointA = this.throwball.bodyA.position;
            var pointB = this.throwball.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }

}