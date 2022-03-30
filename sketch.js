function setup() {
    cwidth = 800;                   //Canvas mit cwidth = x und cheight = y
    cheight = 600;
    createCanvas(cwidth, cheight);

    paddle = new Paddle(createVector(50, cheight/2 - 50), -5, 100, createVector(5, -5));
    paddlegegner = new Paddle(createVector(750, cheight/2 - 50), 5,100, createVector(5, -5));    //Paddel innerhalb des Canvas einfügen

    balls = [];
    for( x=0; x<= 0; x++)       //Beliebig viele Bälle hinzufügen, man muss nur den 0 Wert bei: "x<=0" zu etwas anderem ändern (Wert ist immer einer mehr. D.h. "x<=1" sind 2 Bälle und nicht nur einer)
    {
        balls.push(new ball(createVector(25*x+400, 25*x+300), 10, createVector( x+7, -x+7)));        //Mehrere Bälle werden hinzugefügt mit anderen Startpunkten
    }
    //Bälle hängen noch teilweise ineinander, wenn zu viele generiert werden
    leftscore = 0;
    rightscore = 0;
}

function draw() {
    background('rgba(50,150,100,0.9)');            //Hintergrund mit Farbe
    for( x=0; x < balls.length; x++ )
    {
        b = balls[x];
        b.addmomentum();
        if (b.collidesx(cwidth) && b.pos.x >= cwidth) {
            leftscore++;
            b.pos.x = 400;
            b.pos.y = 300;
            b.momentum.x = 7;
            b.momentum.y = 7;
        }

        if (b.collidesx(cwidth) && b.pos.x <= 0) {
            rightscore++;
            b.pos.x = 400;
            b.pos.y = 300;
            b.momentum.x = -7;
            b.momentum.y = 7;
        }

        if (b.collidesy(cheight)) {
            b.momentum.y = b.momentum.y * -1;
        }
    }

    if (paddle.collideswithcanvas(cheight) && paddle.pos.y <= 0) {
        paddle.pos.y = 0;
    }

    if (paddle.collideswithcanvas(cheight) && paddle.pos.y >= 500) {
        paddle.pos.y = cheight - paddle.height;
    }                                                                                                           //Lässt die Paddel nicht aus dem Canvas verschwinden

    if (paddlegegner.collideswithcanvas(cheight) && paddlegegner.pos.y <= 0) {
        paddlegegner.pos.y = 0;
    }

    if (paddlegegner.collideswithcanvas(cheight) && paddlegegner.pos.y >= cheight - paddlegegner.height)
        paddlegegner.pos.y =  cheight - paddlegegner.height;


     for ( x=0; x < balls.length; x++ )
    {
        b = balls [x];
        for ( p = 0; p < balls.length; p++ )
        {
            if (x === p) {                              //Kollisionsphysik zwischen mehreren Bällen
                continue;                               //Nur wichtig, wenn man mehrere Bälle benutzt
            }
            var bother = balls[p];
            b.collideswith(bother);
            if (b.collideswith(bother)) {
                b.momentum.x = -1 * b.momentum.x;
                b.momentum.y = -1 * b.momentum.y;
            }
        }
    }


    for ( x=0; x < balls.length; x++ )
    {
        b = balls [x];
        if (paddle.collideswithball(b)) {
            b.momentum.x = -1 * b.momentum.x;
        }                                               //Wenn der Ball an ein Paddel fliegt, fliegt er mit dem richtigen Ausgallswinkel wieder zurück
        if (paddlegegner.collideswithball(b)) {
            b.momentum.x = -1 * b.momentum.x;
        }
    }

    for( x=0; x < balls.length; x++ )
    {

        b = balls[x];                                   //Die Anzahl der Bälle die man generiert hat, werden nun gemalt
        b.draw();
    }

    if (keyIsDown(UP_ARROW)) {
        paddlegegner.pos.y = paddlegegner.pos.y - 8;
    }                                                       //Man muss nur eine Taste gedrückt halten und die Funktion wird ausgeführt

    if (keyIsDown (DOWN_ARROW)) {
        paddlegegner.pos.y = paddlegegner.pos.y + 8;        //Mehr addieren/substrahieren = schnelleres Paddel
    }
    if (keyIsDown (87)) {                                   //Zahlencode 87 = 'w'
        paddle.pos.y = paddle.pos.y - 8;
    }

    if (keyIsDown (83)) {                                   //Zahlencode 83 = 's'
        paddle.pos.y = paddle.pos.y + 8;
    }


    paddlegegner.draw();                        //Beide Paddel werden in der Welt generiert
    paddle.draw();

    fill(255,255,255);
    textSize(30);
    text('Score', 368, 30);
    text(leftscore, 250, 80);
    text(rightscore, 550, 80);


}

