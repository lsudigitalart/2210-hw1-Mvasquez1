function setup()
{
    createCanvas(600, 1200);
}

 function draw()
 {
        //color for bg
    background(220);
    //bg circles
     fill(200);
    ellipse(100, 20, 80);

    fill(236);
    ellipse(390, 110, 150);

    fill(225)
    ellipse(210, 300, 100);

    fill(236)
    ellipse(256, 620, 148);

    fill(200)
    ellipse(40, 500, 120);

    fill(235)
    ellipse(550, 999, 200);
    
    fill(225)
    ellipse(10, 900, 150);

    fill(236);
    ellipse(220, 990, 90);





    for (var i = 0; i < 11; i++) 
    {
        
            //side-updown-size
        //black 0 
        fill('black');
        ellipse(500, 100 + i * 100, 100);
         fill(235);
        ellipse(500, 100 + i * 100, 50);
        
        fill('grey');
        ellipse(400, 100 + i * 100, 70 );
         fill(225);
        ellipse(400, 100 + i * 100, 40 );

        fill(180);
        ellipse(300, 100 + i * 100, 60 );
        fill(200);
        ellipse(300, 100 + i * 100, 30 );

        fill(200);
        ellipse(200, 100 + i * 100, 40 );
        fill(180);
        ellipse(200, 100 + i * 100, 20 );

        
        fill(225);
        ellipse(100, 100 + i * 100, 20 );
        fill(235);
        ellipse(100, 100 + i * 100, 10 );

        fill(235);
        noStroke()
        ellipse(40, 100 + i * 100, 6 );
        fill('white');
        noStroke()
        ellipse(40, 100 + i * 100, 3 );
    }
    
 }