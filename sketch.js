function setup() {
    cwidth = 800;                   //Canvas mit cwidth = x und cheight = y
    cheight = 600;
    createCanvas(cwidth, cheight);

    paddle = new Paddle(createVector(50, cheight/2 - 50), -10, 100, createVector(5, -5));
    paddlegegner = new Paddle(createVector(750, cheight/2 - 50), 10,100, createVector(5, -5));    //Paddel innerhalb des Canvas einfügen

    balls = [];
    for( x=0; x<= 0; x++)       //Beliebig viele Bälle hinzufügen, man muss nur den 0 Wert bei: "x<=0" zu etwas anderem ändern (Wert ist immer einer mehr. D.h. "x<=1" sind 2 Bälle und nicht nur einer)
    {
        balls.push(new ball(createVector(10*x+400, 10*x+300), 10, createVector( x+5, -x+5)));        //Mehrere Bälle werden hinzugefügt mit anderen Startpunkten
    }                                                                                                      //Bälle hängen noch teilweise ineinander, wenn zu viele generiert werden
}

function draw() {
    background('rgba(0,255,0, 0.6)');            //Hintergrund mit Farbe
    for( x=0; x < balls.length; x++ )
    {
        b = balls[x];
        b.addmomentum();
        if (b.collidesx(cwidth)) {
            b.momentum.x = -1 * b.momentum.x;           //Wenn der Ball and eine Wand fliegt, fliegt er mit dem Ausfallwinkel wieder zurück
        }
        if (b.collidesy(cheight)) {
            b.momentum.y = b.momentum.y * -1;
        }

    }

/*
     for ( x=0; x < balls.length; x++ )
    {
        b = balls [x];
        for ( p = 0; p < balls.length; p++ )
        {
            if (x === p) {                              //Kollisionsphysik zwischen mehreren Bällen
                continue;                               //Nur wichtig, wenn man mehrere Bälle beutzt
            }
            bother = balls[p];
            b.collideswith(bother);
            if (b.collideswith(bother)) {
                b.momentum.x = -1 * b.momentum.x;
                b.momentum.y = -1 * b.momentum.y;
            }
        }
    }
*/

    for ( x=0; x < balls.length; x++ )
    {
        b = balls [x];
            if (paddle.collideswithball(b)) {
                b.momentum.x = -1 * b.momentum.x;
                b.momentum.y =  1 * b.momentum.y;
            }                                               //Wenn der Ball an ein Paddel fliegt, fliegt er mit dem richtigen Ausgallswinkel wieder zurück
            if (paddlegegner.collideswithball(b)) {
                b.momentum.x = -1 * b.momentum.x;
                b.momentum.y =  1 * b.momentum.y;
            }
    }

    for( x=0; x < balls.length; x++ )
    {
        b = balls[x];                                   //Die Anzahl der Bälle die man generiert hat, werden nun gemalt
        b.draw();
    }

    if (keyIsDown(UP_ARROW)) {
        paddlegegner.pos.y = paddlegegner.pos.y - 7;
    }                                                       //Man muss nur eine Taste gedrückt halten und die Funktion wird ausgeführt

    if (keyIsDown (DOWN_ARROW)) {
        paddlegegner.pos.y = paddlegegner.pos.y + 7;        //Mehr addieren/substrahieren = schnelleres Paddel
    }

    if (keyIsDown (87)) {                                   //Zahlencode 87 = 'w'
        paddle.pos.y = paddle.pos.y - 7;
    }

    if (keyIsDown (83)) {                                   //Zahlencode 83 = 's'
        paddle.pos.y = paddle.pos.y + 7;
    }


    paddlegegner.draw();                        //Beide Paddel werden in der Welt generiert
    paddle.draw();
    line(400, 0, 400, 600);                     //Mittellinie
}

