class Box{
    constructor(x, y,width, height){
        var options = {
            restitution : 1.5
        }

        this.body = Bodies.rectangle(x, y ,width, height);
        this.w= width;
        this.h = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
       
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.w, this.h);
        

    }
}