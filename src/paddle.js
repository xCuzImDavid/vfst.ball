class Paddle{
    constructor(pos,width,height,momentum) {
        this.pos = pos;
        this.width = width;                             //Welche Werte soll das Paddel haben
        this.height = height;
        this.momentum = momentum;
    }

    collideswithball(ball) {
        if (ball.pos.y + ball.radius >= this.pos.y && ball.pos.y + ball.radius <= this.pos.y + this.height) {
            return this.pos.x === ball.pos.x;                                                                   //Wann trifft der Ball das Paddel
        }
    }

    collideswithcanvas() {
        return (this.pos.y <= this.height || this.pos.y >= cheight - this.height);         //Wann trifft das Paddel den Rand
    }

    draw(){
        fill(0);                                                            //Paddel wird gefärbt
        rect(this.pos.x, this.pos.y, this.width, this.height);              //Paddel soll ein Rechteck sein
    }
}