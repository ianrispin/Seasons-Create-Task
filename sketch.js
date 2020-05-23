var select;
var cnv;

var blossomx = [];
var blossomy = [];
var blossomcolors = ['deeppink', 'hotpink', 'lightpink', 'orchid', 'pink', 'violet'];
var blossomnums = [];
var blossomsize = [];

var flowerx = [];
var flowery = [];
var leafx = [];
var leafy = [];
var leafcolors = ['green', 'darkgreen', 'limegreen'];
var leafnums = [];
var leafsize = [];

var dleafx = [];
var dleafy = [];
var dleafcolors = ['chocolate', 'brown', 'crimson', 'darkorange', 'firebrick', 'orangered', 'orange'];
var dleafnums = [];
var dleafsize = [];

function setup() {
    cnv = createCanvas(800, 800);
    cnv.position(0, 0);
    select = createSelect();
    select.position(5, 5);
    select.option('spring');
    select.option('summer');
    select.option('fall');
    select.option('winter');
    select.changed(reset);
    select.style('font-size', '15px');
    select.style('cursor', 'pointer');
    noStroke();
}

function draw() {
    if (select.value() == 'spring') {
        spring();
    }
    
    if (select.value() == 'summer') {
        summer();
    }
    
    if (select.value() == 'fall') {
        fall();
    }
    
    if (select.value() == 'winter') {
        winter();
    }
}

function spring() {
    //sky
    background('skyblue');
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
    branches();
    //blossoms
    for(i=0; i<1000; i++) {
        blossomx.push(random(15, 265));
        blossomy.push(random(300, 500));
        blossomnums.push(Math.floor(Math.random()*6));
        blossomsize.push(random(0, 10));
        fill(blossomcolors[blossomnums[i]]);
        ellipse(blossomx[i], blossomy[i], blossomsize[i], blossomsize[i]);
    }
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
    for(i=0; i<100; i++) {
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
    branches();
    //leaves
    for(i=0; i<1500; i++) {
        leafx.push(random(15, 265));
        leafy.push(random(300, 500));
        leafnums.push(Math.floor(Math.random()*3));
        leafsize.push(random(0, 10));
        fill(leafcolors[leafnums[i]]);
        ellipse(leafx[i], leafy[i], leafsize[i], leafsize[i]);
    }
}

function fall() {
    //sky
    background('skyblue');
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
    branches();
    //leaves
    for(i=0; i<500; i++) {
        dleafx.push(random(15, 265));
        dleafy.push(random(300, 500));
        dleafnums.push(Math.floor(Math.random()*7));
        dleafsize.push(random(0, 10));
        fill(dleafcolors[dleafnums[i]]);
        ellipse(dleafx[i], dleafy[i], dleafsize[i], dleafsize[i]);
    }
}

function winter() {
    //sky
    background('darkgrey');
    //hills
    fill('snow');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    //sun
    fill('yellow');
    ellipse(130, 130, 75, 75);
    //lake
    fill('paleturquoise');
    ellipse(600, 585, 222, 45);
    //trunk
    stroke('rgba(245, 245, 245, 0.5)');
    branches();
}

function branches() {
    strokeWeight(14);
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

function leaves() {
    
}

function reset() {
    blossomx = [];
    blossomy = [];
    blossomnums = [];
    blossomsize = [];
    flowerx = [];
    flowery = [];
    leafx = [];
    leafy = [];
    leafnums = [];
    leafsize = [];
}