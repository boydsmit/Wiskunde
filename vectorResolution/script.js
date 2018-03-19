const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,10,"yellow","A");
let B = new Point(400,300,10,"blue","B");
let C = new Point(200,400,10,"red","C");

let v = new Vector2(B.x-A.x,B.y-A.y);
let l = new LineairFunction(1,1);
let m = new LineairFunction(1,1);

let lineVector = new Vector2(1,1);
let normalVector = new Vector2(1,1);

A.drag();
B.drag();
C.drag();

function  loop()
{
    context.clearRect(0, 0, 800, 450);
    requestAnimationFrame(loop);

    v.dx = B.x - A.x;
    v.dy = B.y - A.y;

    l.letTwoPointsDefineLine(A,C);
    m.letSlopeAndPointDefineLine(-1/l.slope,A);

    lineVector.dx = 1;
    lineVector.dy = l.slope;
    lineVector.r = 1;
    lineVector.r = lineVector.dot(v);

    normalVector.dx = -lineVector.dy;
    normalVector.dy = lineVector.dx;
    normalVector.r = 1;
    normalVector.r = normalVector.dot(v);

    lineVector.draw(context,A.x,A.y,1,"lv");
    normalVector.draw(context,A.x,A.y,1,"n");

    v.draw(context,A.x,A.y,1,"v");
    l.draw(0,800,"grey");
    m.draw(0,800,"grey");
    A.draw();
    B.draw();
    C.draw();
}

loop();