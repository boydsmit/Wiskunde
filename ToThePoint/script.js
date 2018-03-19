const canvas = document.getElementById('Canvas');
const context = canvas.getContext('2d');

let a = new Point(40,30,10,"#FFFF00");
a.draw();
a.drag();

let b = new Point(520,160,10,"#00FF00");
b.draw();
b.drag();

let c = new Point(350,30,10,"#F42A2D");
c.draw();
c.drag();

let d = new Point(20,200,10,"#28DCE3");
d.draw();
d.drag();

let s = new Point(100,100,10,"#ffff");

let l = new Line(1/3,16.66);
let k = new Line(1/3,16.66);

setInterval(loop,1);

function loop(){
    context.clearRect(0,0,800,450);
    a.draw();
    b.draw();
    l.letTwoPointsDefineLine(a,b);
    l.drawLine(context,0,800);
    c.draw();
    d.draw();
    k.letTwoPointsDefineLine(c,d);
    k.drawLine(context,0,800);
    s.x = l.intersection(k).x;
    s.y = l.intersection(k).y;
    s.draw();
}