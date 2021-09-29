var gravity = 0.01;
//let img;
//function preload() {
  //img = loadImage('images/pacman.png');
//}
class Ball {
  constructor(x, y, w, h, vy,) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vy = vy;
  }
  
  
  drawBall() {
    fill("yellow")


    this.vy += gravity;
    
    if (this.y < 390) { 
      this.y = this.y + this.vy;
    }
     ellipse(this.x, this.y, this.width, this.height);
    //image(img, this.x, this.y, this.width, this.height);
  }
}

class Rect {
  constructor(x, y, w, h, vx, color) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.color = color
  }
  
  drawRect() {
   fill(this.color)
   rect(this.x, this.y, this.width, this.height);
   this.x = this.x +this.vx;
  } 
}


var gravity, ball1;

function keyPressed(spacebar){  
  ball1.vy = ball1.vy - 5;
}
 

var pipes = [];
function setup() {
  createCanvas(600, 400);
  gravity = 0.25;
  ball1 = new Ball(250, 200, 20, 20, 0);
  
}

function draw() {
  background('lightblue');
  ball1.drawBall();
  
  if(frameCount % 80 == 0){
    let randomHeight = random(height - 100);

    recta = new Rect(800, 0, 40, randomHeight, -3,"lightgreen");
    rectb = new Rect(800, randomHeight + 100, 40, 600, -3,"lightgreen");  
   

    pipes.push(recta);
    pipes.push(rectb);

  }

  pipes.forEach(p => p.drawRect());  
}
function isColliding(){
  colliding = false; 

  

}
