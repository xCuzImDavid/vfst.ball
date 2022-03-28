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
    collideswith( ball ){
        return dist( this.pos.x, this.pos.y, ball.pos.x, ball.pos.y) <= this.radius + ball.radius;
    }
}