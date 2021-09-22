var gravity = 0.01;
class Ball {
  constructor(x, y, w, h, vy,) {
    this.y = y;
    this.x = x;
    this.width = w;
    this.height = h;
    this.vy = vy;
  }

  drawBall() {
    fill('lightpink')   
    

    this.vy += gravity;
    
    if (this.y < 400) { 
      this.y = this.y + this.vy;
    }
   
    ellipse(this.x, this.y, this.width, this.height);
  }
}

var gravity, ball1;

function keyPressed(spacebar){  
  ball1.vy = ball1.vy - 5;
}
 


function setup() {
  createCanvas(500, 400);
  gravity = 0.25;

  ball1 = new Ball(250, 200, 20, 20, 0);
}

function draw() {
  background('lightblue');

  ball1.drawBall();
}