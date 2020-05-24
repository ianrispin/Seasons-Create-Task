var select;
var cnv;
var duck;

var flowerx = [];
var flowery = [];

var blossomcolors = ['deeppink', 'hotpink', 'lightpink', 'orchid', 'pink', 'violet'];
var leafcolors = ['green', 'darkgreen', 'limegreen', 'springgreen', 'lightgreen', 'palegreen'];
var dleafcolors = ['chocolate', 'brown', 'crimson', 'darkorange', 'orangered', 'orange'];

var x = [];
var y = [];
var colornums = [];
var size = [];

function setup() {
    cnv = createCanvas(800, 800);
    cnv.position(0, 0);
    
    duck = createSprite(600, 580);
    duck.scale = 0.1;
    
    //duck.
    
    select = createSelect();
    select.position(5, 5);
    select.option('spring');
    select.option('summer');
    select.option('fall');
    select.option('winter');
    select.changed(reset);
    select.style('font-size', '15px');
    select.style('cursor', 'pointer');
    //select.style('text-align', 'right');
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
    leaves(blossomcolors, 1000);
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
    leaves(leafcolors, 1500);
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
    leaves(dleafcolors, 500);
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

function leaves(colors, num) {
    for(i=0; i<num; i++) {
        x.push(random(15, 265));
        y.push(random(300, 500));
        colornums.push(Math.floor(Math.random()*6));
        size.push(random(0, 10));
        fill(colors[colornums[i]]);
        ellipse(x[i], y[i], size[i], size[i]);
    }
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
    
    x = [];
    y = [];
    colornums = [];
    size = [];
}