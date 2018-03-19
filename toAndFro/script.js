const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let forward = true;

let a = new Vector2(100,400);
let b = new Vector2(600,100);
let c = new Vector2(a.dx,a.dy);
let vel = new Vector2(1,1);



let A = new Point(a.dx,a.dy,10,"yellow");
let B = new Point(b.dx,b.dy,10,"blue");

let l = new LineairFunction(1/3,16.66);
let C = new Point(c.dx,c.dy,5,"redW");

function  loop()
{
    context.clearRect(0,0,800,450);
    requestAnimationFrame(loop);
    c.add(vel);

    C.x = c.dx; C.y = c.dy;
    A.draw();
    B.draw();
    C.draw();
    l.letTwoPointsDefineLine(A,B);
    l.drawLine(context,0,800);

    a.draw(context,0,0,1);
    b.draw(context,0,0,1);

    vel.defineVectorWithTwoPoints(a,b);

    if(forward == true)
    {
        vel.r = 5;
        if(C.distance(B) <= 5)
        {
         forward = false;
        }
    }
    else
    {
        vel.r = -5;
        if(C.distance(A) <= 2)
        {
            forward = true;
        }
    }

    vel.draw(context,a.dx,a.dy,1);
}

loop();