var season = "fall";

var flowerx = [];
var flowery = [];

var blossomx = [];
var blossomy = [];
var blossomcolors = ['deeppink', 'hotpink', 'lightpink', 'orchid', 'pink', 'violet'];
var blossomnums = [];
var blossomsize = [];

var leafx = [];
var leafy = [];
var leafcolors = ['chocolate', 'brown', 'crimson', 'darkorange', 'firebrick', 'orangered', 'orange'];
var leafnums = [];
var leafsize = [];

function setup() {
    createCanvas(800, 800);
    noStroke();
}

function draw() {
    if (season == "summer") {
        summer();
    }
    
    if (season == "spring") {
        spring();
    }
    
    if (season == "fall") {
        fall();
    }
    
    if (season == "winter") {
        winter();
    }
}

function circ(x, y) {
    ellipse(x, y, 50, 50)
}

function summer() {
    //sky
    background('skyblue');
    //hills
    fill('forestgreen');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    //sun
    fill('yellow');
    ellipse(130, 130, 75, 75);
    //flowers
    for(i=0; i<80; i++) {
        flowerx.push(random(0, 800));
        flowery.push(random(500, 800));
        if (get(flowerx[i], flowery[i])[0] === (34 || 255)) {
            ellipse(flowerx[i], flowery[i], 6, 6);
        }
    }
    //lake
    fill('aqua');
    ellipse(600, 585, 222, 45);
    //trunk
    stroke('saddlebrown');
    strokeWeight(14);
    line(135, 515, 135, 605);
    noStroke();
    //leaves
    fill('darkgreen');
    //fill(get(130, 130)); y-25
    circ(100, 525);
    circ(130, 510);
    circ(85, 495);
    circ(110, 455);
    circ(110, 485);
    circ(150, 455);
    circ(175, 475);
    circ(160, 500);
    circ(165, 520);
    circ(139, 482);
}

function spring() {
    //sky
    background("skyblue");
    //hills
    fill('forestgreen');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    //sun
    fill('yellow');
    ellipse(130, 130, 75, 75);
    //lake
    fill('aqua');
    ellipse(600, 585, 222, 45);
    //trunk
    stroke('saddlebrown');
    strokeWeight(14);//14, 8.4, 5.04, 3.024
    line(135, 515, 135, 605);
    strokeWeight(8.5);
    line(135, 515, 99, 427);
    line(135, 515, 154, 470);
    strokeWeight(5.3);
    line(99, 427, 61, 401);
    line(99, 427, 111, 362);
    line(154, 470, 170, 380);
    line(154, 470, 212, 447);
    strokeWeight(3.2);
    line(61, 401, 30, 400);
    line(61, 401, 50, 375);
    line(111, 362, 99, 318);
    line(111, 362, 128, 330);
    line(170, 380, 150, 354);
    line(170, 380, 187, 365);
    line(212, 447, 225, 420);
    line(212, 447, 250, 445);
    noStroke();
//    blossoms
    for(i=0; i<1000; i++) {
        blossomx.push(random(15, 265));
        blossomy.push(random(300, 500));
        blossomnums.push(Math.floor(Math.random()*5));
        blossomsize.push(random(0, 10));
        fill(blossomcolors[blossomnums[i]]);
        ellipse(blossomx[i], blossomy[i], blossomsize[i], blossomsize[i]);
    }
}

function fall() {
    //sky
    background("skyblue");
    //hills
    fill('forestgreen');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    //sun
    fill('yellow');
    ellipse(130, 130, 75, 75);
    //lake
    fill('aqua');
    ellipse(600, 585, 222, 45);
    //trunk
    stroke('saddlebrown');
    strokeWeight(14);//14, 8.4, 5.04, 3.024
    line(135, 515, 135, 605);
    strokeWeight(8.5);
    line(135, 515, 99, 427);
    line(135, 515, 154, 470);
    strokeWeight(5.3);
    line(99, 427, 61, 401);
    line(99, 427, 111, 362);
    line(154, 470, 170, 380);
    line(154, 470, 212, 447);
    strokeWeight(3.2);
    line(61, 401, 30, 400);
    line(61, 401, 50, 375);
    line(111, 362, 99, 318);
    line(111, 362, 128, 330);
    line(170, 380, 150, 354);
    line(170, 380, 187, 365);
    line(212, 447, 225, 420);
    line(212, 447, 250, 445);
    noStroke();
    //leaves
    for(i=0; i<500; i++) {
        leafx.push(random(15, 265));
        leafy.push(random(300, 500));
        leafnums.push(Math.floor(Math.random()*6));
        leafsize.push(random(0, 10));
        fill(leafcolors[leafnums[i]]);
        ellipse(leafx[i], leafy[i], leafsize[i], leafsize[i]);
    }
}

function winter() {
    //sky
    background("skyblue");
    //hills
    fill('forestgreen');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    //sun
    fill('yellow');
    ellipse(130, 130, 75, 75);
    //lake
    fill('aqua');
    ellipse(600, 585, 222, 45);
    //trunk
    stroke('saddlebrown');
    strokeWeight(14);//14, 8.4, 5.04, 3.024
    line(135, 515, 135, 605);
    strokeWeight(8.5);
    line(135, 515, 99, 427);
    line(135, 515, 154, 470);
    strokeWeight(5.3);
    line(99, 427, 61, 401);
    line(99, 427, 111, 362);
    line(154, 470, 170, 380);
    line(154, 470, 212, 447);
    strokeWeight(3.2);
    line(61, 401, 30, 400);
    line(61, 401, 50, 375);
    line(111, 362, 99, 318);
    line(111, 362, 128, 330);
    line(170, 380, 150, 354);
    line(170, 380, 187, 365);
    line(212, 447, 225, 420);
    line(212, 447, 250, 445);
    noStroke();
}