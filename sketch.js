class ball {
    constructor(pos,radius,momentum){
        this.pos = pos;
        this.radius = radius;
        this.momentum = momentum;
    }
    draw() {
        ellipse(this.pos.x, this.pos.y, 2 * this.radius);
    }
    addmomentum() {
        this.pos = this.pos.add(this.momentum);
    }
    collidesx(canvaswidth) {
        return (this.pos.x < this.radius) || (this.pos.x > canvaswidth - this.radius);
    }
    collidesy(canvasheight) {
        return (this.pos.y < this.radius) || (this.pos.y > canvasheight - this.radius);
    }
}

function setup() {
    createCanvas(400, 400);
    frameRate(40);
    ball1 = new ball(createVector(200, 100), 10, createVector(10, -10));
    ball2 = new ball(createVector(100, 200), 15, createVector(5, -5));
}

function draw() {
    background(220);
    //x = x + a
    //y = y + a
    ball1.addmomentum();
    if (ball1.collidesx(400)) {
        ball1.momentum.x = -1 * ball1.momentum.x;
    }
    if (ball1.collidesy(400)) {
        ball1.momentum.y = ball1.momentum.y * -1;
    }
    ball1.draw();

    ball2.addmomentum();
    if (ball2.collidesx(400)) {
        ball2.momentum.x = -1 * ball2.momentum.x;
    }
    if (ball2.collidesy(400)) {
        ball2.momentum.y = ball2.momentum.y * -1;
    }
    ball2.draw();
}