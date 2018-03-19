const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let a = new Vector2 (100,400);
let b = new Vector2 (600,100);
let c = new Vector2 (600,300);
let z = new Vector2(a.dx, a.dy);
let distance = new Vector2();
let vel = new Vector2(1,1);

let A = new Point(a.dx, a.dy, 10,"blue");
let B = new Point(b.dx, b.dy, 10,"red");
let C = new Point(c.dx, c.dy, 10,"yellow");
let Z = new Point(a.dx, a.dy, 5, "black");

let array = [a,b,c];

let targetNumber = 1;
let target = {};
target = array[targetNumber];
vel.difVector(z,target);
vel.r =1;


function loop()
{
    context.clearRect(0,0,800,450);
    requestAnimationFrame(loop);
    z.add(vel);

    Z.x = z.dx; Z.y = z.dy;

    A.draw();
    B.draw();
    C.draw();
    Z.draw();

    vel.r = 1;
    vel.draw(context,z.dx, z.dy, 20);
    distance.difVector(z,target);

    //Change the target
    if (distance.r <= 2){
        targetNumber ++;
        //reset the target to initial when last is reached
        if (targetNumber >= array.length){
            targetNumber = 0;
        }
        //change direction of the point
        target = array[targetNumber];
        vel.difVector(z,target);
        vel.r =1;
    }

}
loop();
