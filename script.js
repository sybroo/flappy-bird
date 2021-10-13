var gravity = 0.01;
var gravity, ball1;
var pipes = [];
var gameState = 0;
//let img;
//function preload() {
//img = loadImage('images/pacman.png');
//}
 class Ball {
  constructor(x, y, w, h, vy, ) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vy = vy;
  }


  drawBall() {
    fill("yellow");


    this.vy += gravity;

    if (this.y < 390) {
      this.y = this.y + this.vy;
    }
    rect(this.x, this.y, this.width, this.height);
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
    this.x = this.x + this.vx;
  }

  checkCollision() {
    //console.log(ball1.x,this.x, this.width)
    if (ball1.x + ball1.width > this.x && ball1.x < this.x + this.width)
    if (ball1.y + ball1.height > this.y && ball1.y < this.y + this.height)
     {
      if(1){
        this.color = "red";
      }
      }

    else {
      this.color = "lightgreen";
    }
  }
}


function keyPressed(spacebar) {
  ball1.vy = ball1.vy - 5;
}


function setup() {
  createCanvas(600, 400);
  gravity = 0.25;
  ball1 = new Ball(250, 200, 20, 20, 0);
}

function draw() {
  background('lightblue');
  ball1.drawBall();

  if (frameCount % 80 == 0) {
    let randomHeight = random(height - 100);

    recta = new Rect(800, 0, 40, randomHeight, -3, "lightgreen");
    rectb = new Rect(800, randomHeight + 100, 40, 600, -3, "lightgreen");


    pipes.push(recta);
    pipes.push(rectb);

    if (pipes.length > 8) {
      pipes.splice(0, 2);
    }
  }

  pipes.forEach((p) => {
    p.drawRect();
    p.checkCollision();
  });

  if (gameState == 0){
    menu();
  }

  if (gameState == 1){
    game();
  }

  if (gameState == 2){
    gameover();
  }
}


function menu(){
  background('black')
  text("Press Spacebar", 250, 300)
  text("gemaakt door Noa en Syb", 250, 325)
}

function keyPressed(){

  if (keyCode == 13) {
    gameState = 0;
  }
}