


function setup() {
    cheight = 600;
    cwidth = 800;
    createCanvas(cwidth, cheight);
    frameRate(40);
    balls = [];
    for( x=0; x<= 10; x++)
    {
        balls.push( new ball( createVector(10*x+40, 10*x+40), 10, createVector( x+1, -x+1)));
    }
}

function draw() {
    background(220);
    for( x=0; x < balls.length; x++ )
    {
        b = balls[x];
        b.addmomentum();
        if (b.collidesx(cwidth)) {
            b.momentum.x = -1 * b.momentum.x;
        }
        if (b.collidesy(cheight)) {
            b.momentum.y = b.momentum.y * -1;
        }

    }

    for ( x=0; x < balls.length; x++ )
    {
        b = balls [x];
        for ( p = 0; p < balls.length; p++ )
        {
            if (x === p) {
                continue;
            }
            bother = balls[p];
            b.collideswith(bother);
            if (b.collideswith(bother)) {
                b.momentum.x = -1 * b.momentum.x;
                b.momentum.y = -1 * b.momentum.y;
            }
        }
    }

    for( x=0; x < balls.length; x++ )
    {
        b = balls[x];
        b.draw();
    }
}