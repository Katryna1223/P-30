class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 150
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
       // body.position.x = this.sling.pointB.x;
       // body.position.y = this.sling.pointB.y;
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //push();
        }
    }
    
}