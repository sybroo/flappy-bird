var gravity = 0.01;
var gravity, ball1;
var pipes = [];
var gameState = 1;
var score = 0;
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
      if (ball1.y + ball1.height > this.y && ball1.y < this.y + this.height) {
        gameState = 2
          ;
      }
  }
}



function setup() {
  createCanvas(600, 400);
  gravity = 0.25;
  ball1 = new Ball(250, 200, 20, 20, 0);
}

function draw() {


  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    gameover();
  }
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode == 32) {
    ball1.vy = ball1.vy - 5;
  }
  if (keyCode == 27) {
    gameState = 0;
  }

  if (keyCode == 13) {
    if (gameState != 1) {
      ball1 = new Ball(250, 200, 20, 20, 0);
      score = 0;
      pipes = [];
      gameState = 1;
    }
  }
}


function menu() {
  background('black')
  text("Press enter to play again", 150, 200)
  text("Welcome!", 150, 100)
  text("gemaakt door Noa en Syb", 150, 325)
}

function game() {
  background('lightblue');
  ball1.drawBall();
  textSize(24);
  text("Score: " + score, 10, 30);

  if (frameCount % 80 == 0) {
    let randomHeight = random(height - 100);

    recta = new Rect(800, 0, 40, randomHeight, -3, "lightgreen");
    rectb = new Rect(800, randomHeight + 100, 40, 600, -3, "lightgreen");

    pipes.push(recta);
    pipes.push(rectb);

    if (pipes.length > 8) {
      pipes.splice(0, 2);

      if (rectb.y < 250)
        score++;
    }
  }

  pipes.forEach((p) => {
    p.drawRect();
    p.checkCollision();
  });
}

function gameover() {
  background('black')
  text("Press Esc to play again", 150, 200)
  text("You lost", 150, 100)
  text("gemaakt door Noa en Syb", 150, 325)
}