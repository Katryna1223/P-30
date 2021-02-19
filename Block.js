class Block{
    constructor(x, y){
        var options={
            isStatic: false,
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x, y, 30, 50, options);
       
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 50;
        this.vis=255;
        World.add(world, this.body);
    }
    display(r, g, b){
        if(this.body.speed<=5){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(r, g, b);
        rect(0, 0, this.width, this.height);
        pop();
    } else{
        //fix the fact that the blocks dissapear as they fall. THEY SHOULD BE FADING AWAY!!!!!!!!!!!!!!!
        World.remove(world, this.body);
        push();
        this.vis = this.vis-5;
        //tint(255, this.vis);
        //fill(r,g,b);
        //rect(this.body.position.x, this.body.position.y, 30, 50);
        pop();
      
    }

    }
}