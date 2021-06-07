class Hero {
    constructor(x,y,r,angle){
        var options ={
            'density' : 1,
            'frictionAir' : 1,
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("superHero.png");
     
        this.scale = 1;
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world, this.body);
    }
    view(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();  
    }
}