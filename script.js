var gravity = 0.01;
class Ball {
  constructor(x, y, w, h, vy,) {
    this.x = x;
    this.y = y;
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
 


function setup() {
  createCanvas(600, 400);
  gravity = 0.25;

  ball1 = new Ball(250, 200, 20, 20, 0);
  rect1 = new Rect(800, 300, 30, 200, -3,"blue");
  rect2 = new Rect(800, 0, 30, 200, -3,"blue");
}

function draw() {

  background('lightblue');

  ball1.drawBall();
  rect1.drawRect();
  rect2.drawRect();
}

