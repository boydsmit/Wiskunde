class GameObject {
    constructor(point,pos,vel,acc){
        this.point = point;
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
        this.box = [0,800,0,450]

    }

    update()
    {
        if(this.pos.dx<0 || this.pos.dx > 800)
        {
            this.vel.dx = -this.vel.dx;
        }

        if(this.pos.dy<0 || this.pos.dy > 450)
        {
            this.vel.dy = -this.vel.dy;
        }

        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.point.x = this.pos.dx;
        this.point.y = this.pos.dy;
    }

    draw(context){
        this.point.draw(context);
    }
}