class Monster {
    constructor(x,y,r,angle){
        var options ={
            'density' : 1,
            'friction' : 1,
            'mass' : 1,
            'restitution' : 2
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("monster.png");
     
        this.scale = 1;
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world, this.body);
    }
    view(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop(); 
    }
}