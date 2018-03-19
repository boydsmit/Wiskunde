const canvas = document.getElementById('Canvas');
const context = canvas.getContext('2d');

let ball = new Point(100,100,10);
let position = new Vector(400,225);
let velocity = new Vector(1,5);
let acceleration = new Vector(0,1);

function animationLoop(){
    requestAnimationFrame(animationLoop);
    //context.clearRect(0,0,800,450);
    ball.x = position.dx;
    ball.y = position.dy;
    position.add(velocity);
    velocity.add(acceleration);
    if(position.dx < 0 || position.dx > 800)
    {
        velocity.dx = -velocity.dx;
    }

    if(position.dy < 0 || position.dy > 450)
    {
        velocity.dy = -velocity.dy;
    }
    ball.draw();
}


animationLoop();
