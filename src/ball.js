class ball {
    constructor(pos,radius,momentum){
        this.pos = pos;
        this.radius = radius;                   //Welche Werte soll der Ball haben
        this.momentum = momentum;
    }

    draw() {
        noStroke();
        fill(200,200,200);                                          //Ball wird gefärtbt
        ellipse(this.pos.x, this.pos.y, 2 * this.radius);               //Ball wird erschaffen
    }

    addmomentum() {
        this.pos = this.pos.add(this.momentum);                     //Dem Ball Momentum geben
    }

    collidesx(canvaswidth) {
        return (this.pos.x < this.radius) || (this.pos.x > canvaswidth - this.radius);
    }
                                                                                                                //Beschreibt wann der Ball reflektiert werden soll
    collidesy(canvasheight) {
        return (this.pos.y < this.radius) || (this.pos.y > canvasheight - this.radius);
    }

    collideswith(ball){
        return dist(this.pos.x, this.pos.y, ball.pos.x, ball.pos.y) <= this.radius + ball.radius;           //Wenn er mit anderen Bällen kollidieren soll
    }                                                                                                       //Nur bei mehreren Bällen nötig

}