class Ball {
    constructor(x,y,w,h,g,vy){
    this.y = y;
    this.x = x;
    this.width = w;
    this.height = h;
    this.gravity = g;
    this.vy = vy;    
  }

  function Ball() {
    this.
  }

  drawBall(){   
    fill ('lightpink')
    ellipse(this.x,this.y,this.width,this.height)
    this.y = this.y + this.vy;


    if(this.y <= 0 || this.y >= 400){
      this.vy = -this.vy
    }
  
  }
}

function setup() {
  createCanvas(500, 400); 

  ball1 = new Ball(250,200,20,20,0,0);
}

function draw() {
  background('black');  
  
  ball1.drawBall(); 
}