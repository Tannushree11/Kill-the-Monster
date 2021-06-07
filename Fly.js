class Fly {
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    remove(){
        this.SlingShot.bodyA = null;
    }

    view(){ 

            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(0);
            noStroke();
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);     
            
        }
    }