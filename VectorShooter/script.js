const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2(100,100);
let direction = new Vector2(1,0);
let velocity = new Vector2(0,0);

let player = new Point(position.dx,position.dy,10,"Yellow","A");

window.addEventListener('keydownn',(evt) =>{
   console.log(evt.keyCode);
   switch (evt.keyCode){
       case 37:
           velocity.angle -= 0.1;
           break;

       case 39:
           velocity.angle += 0.1;
           break;

       case 38:
           velocity.r += 1;
           break;

       case 40:
           velocity.r -= 1;
           break;

       case 32:
           let bullet = {};
           bullet.position = new Vector2(position.dx,position.dy);
           bullet.point = new Point(bullet.position.dx,bullet.position.dy,15,"0000000","X");
           break;

       default:

   }
});

function animationLoop()
{
    context.clearRect(0,0,800,450);
    requestAnimationFrame(animationLoop);
    player.x = position.dx;
    player.y = position.dy;
    position.add(velocity);
    player.draw();
    velocity.draw(context,player.x,player.y);
    direction.draw(canvas,player.x,player.y);

    if(position.dx < 0){
        position.dx = 800;
    }

    if(position.dx > 800){
        position.dx = 0;
    }

    if(position.dy < 0){
        position.dy = 450;
    }

    if(position.dy > 450){
        position.dy = 0;
    }
}

animationLoop();

