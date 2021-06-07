class Ground {
    constructor(x,y,height,width){
        var options ={
            isStatic : true
        }

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

		this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    view(){
        var groundPos = this.body.position;		

			push();
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
            stroke("white");
			fill(255);
			rect(0,0,this.width, this.height);
			pop();
    }
}