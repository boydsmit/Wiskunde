const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let g = new GameObject(new
    Point(1,1,10,"blue","g"),new Vector2(100,100),new
    Vector2(1,2), new Vector2(0,0));


let g = new GameObject(new
    Point(1,1,10,"blue","g"),new Vector2(100,100),new
    Vector2(1,2), new Vector2(0,0));


g.rad = new Vector2(1,1);
g.tan = new Vector2(1,1);


let p = new Point(400,225,12,"yellow");

function loop()
{
    context.clearRect(0,0,800,450);
    g.update();
    requestAnimationFrame(loop);


    g.rad.dx = p.x - g.pos.dx;
    g.rad.dy = p.y - g.pos.dy;

    g.tan.dx = - g.rad.dy;
    g.tan.dy =   g.rad.dx;
    g.rad.r = 1;
    g.tan.r = 1;
    g.rad.r = g.rad.dot(g.vel);

    if(g.point.distance(p)<=p.r + g.point.r)
    {
        g.rad.angle += Math.PI;
        g.vel.sumVector(g.rad,g.tan);
    }




    g.draw();

    g.vel.draw(context,g.pos.dx,g.pos.dy,35);
    g.rad.draw(context,g.pos.dx,g.pos.dy,35);
    g.tan.draw(context,g.pos.dx,g.pos.dy,35);




    p.draw();
}

loop();