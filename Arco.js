class Arco{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('Cabeza.PNG');
        this.sling2 = loadImage('Pies.PNG');
        this.sling3 = loadImage('ñam');
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,500);
        image(this.sling2,202,569);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(2);
                line(pointA.x - 20, pointA.y, pointB.x +33, pointB.y+43);
                line(pointA.x - 20, pointA.y, pointB.x + 27, pointB.y - 17);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(1);
                line(pointA.x + 25, pointA.y, pointB.x +33, pointB.y+43);
                line(pointA.x + 25, pointA.y, pointB.x + 27, pointB.y - 17);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}