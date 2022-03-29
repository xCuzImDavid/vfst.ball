class Paddle{
    constructor(pos,width,height,momentum) {
        this.pos = pos;
        this.width = width;
        this.height = height;
        this.momentum = momentum;
    }

    collideswithball(ball) {
        if (ball.pos.y >= this.pos.y && ball.pos.y <= this.pos.y + this.height) {
            return this.pos.x === ball.pos.x;
        }
        return false;
    }

    collideswithcanvas(canvas) {
        this.pos.y = constraint(this.pos.y, 0, 700)
    }

    draw(){
        fill(50);
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }
}