const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,10,"yellow","A");
let B = new Point(400,300,10,"blue","B");
let g = {};
    g.pos = new Vector2(250,300);
    g.point = new Point(g.pos.dx,g.pos.dy,10, "red", "g");
    g.vel = new Vector2(4,5);
    g.update = () =>
    {
        g.pos.add(g.vel);
        g.point.x = g.pos.dx;
        g.point.y = g.pos.dy;
        if(g.pos.dx > 800-g.point.r || g.pos.dx < g.point.r){
            g.vel.dx = -g.vel.dx;
        }
        if(g.pos.dy > 450-g.point.r || g.pos.dy < g.point.r){
            g.vel.dy = -g.vel.dy;
        }
    };

let h = {};
    h.pos = new  Vector2(1,1);
    h.point = new Point(450,100,10,"yellow","h");
    h.update = () =>{
        h.point.x = h.pos.dx;
        h.point.y = h.pos.dy;
    };

let l = new LineairFunction(1,1);
let m = new LineairFunction(1,1);

let rad = new Vector2(1,1);
let tan = new Vector2(1,1);

A.drag();
B.drag();

function  loop()
{
    requestAnimationFrame(loop);
    context.clearRect(0,0,800,450);

    l.draw(0,800);
    l.letTwoPointsDefineLine(A,B);

    m.letSlopeAndPointDefineLine(-1/l.slope,g.point);
    m.draw(0,800);

    g.update();
    g.point.draw();

    h.pos.dx = l.intersection(m).x;
    h.pos.dy = l.intersection(m).y;
    h.update();
    g.vel.draw(context,g.pos.dx,g.pos.dy,8);
    h.point.draw();

    A.draw();
    B.draw();
}

loop();