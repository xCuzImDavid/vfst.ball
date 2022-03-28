class Paddle{
    constructor(pos,height,momentum) {
        this.width = 10;
        this.pos = pos;
        this.height = height;
        this.momentum = momentum;
    }
    collideswithball(ball) {
      if(ball.pos.y >= this.pos.y && ball.pos.y <= this.pos.y+this.height) {
          return this.pos.x === ball.pos.x;
      }

      return false;
    }
    draw() {
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }
}