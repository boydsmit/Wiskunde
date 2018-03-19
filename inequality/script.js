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


let l = new Line(1/3,16.66);



setInterval(loop,1);

function loop(){
    context.clearRect(0,0,800,450);
    a.draw();
    b.draw();
    l.letTwoPointsDefineLine(a,b);
    l.drawLine(context,0,800);
    if(c.y<c.x*l.slope+l.yIntercept)
    {
        c.color = "black";
    }
    else
    {
        c.color = "white";
    }
    c.draw();
    s.draw();
}

