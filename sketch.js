var select;
var cnv;
var duck;
var duckvel = -.75;
var iswinter = false;
var happy = false;

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
    
    duck = createSprite(675, 561);
    duck.scale = 0.2;
    duck.addAnimation('left', 'the-duck-left.png');//this and the images below are all edited versions of an image from this site: https://cdn3.iconfinder.com/data/icons/birdies/256/duck-512.png
    duck.addAnimation('right', 'the-duck-right.png');
    duck.addAnimation('winter', 'duck-hat.png');
    duck.addAnimation('left-happy', 'the-duck-left-happy.png');
    duck.addAnimation('right-happy', 'the-duck-right-happy.png');
    duck.addAnimation('winter-happy', 'duck-hat-happy.png');//the hat is a different image from here: https://freesvg.org/img/bobcap.png
    
    select = createSelect();//createSelect() function found on: https://p5js.org/reference/#/p5/createSelect
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
//main algorithm
function spring() {
    background('skyblue');
    fill('forestgreen');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    fill('yellow');
    ellipse(130, 130, 75, 75);
    fill('aqua');
    ellipse(600, 585, 222, 45);
    stroke('saddlebrown');
    branches();
    leaves(blossomcolors, 1000);
    updateDuck();
    drawSprites();
}

function summer() {
    background('skyblue');
    fill('forestgreen');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    fill('yellow');
    ellipse(130, 130, 75, 75);
    for(i=0; i<100; i++) {
        flowerx.push(random(0, 800));
        flowery.push(random(500, 800));
        if (get(flowerx[i], flowery[i])[0] === (34 || 255)) {//get() function found on: https://p5js.org/reference/#/p5/get
            ellipse(flowerx[i], flowery[i], 6, 6);
        }
    }
    fill('aqua');
    ellipse(600, 585, 222, 45);
    stroke('saddlebrown');
    branches();
    leaves(leafcolors, 1000);
    updateDuck();
    duck.velocity.x*=1.5;
    drawSprites();
}

function fall() {
    background('skyblue');
    fill('forestgreen');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    fill('yellow');
    ellipse(130, 130, 75, 75);
    fill('aqua');
    ellipse(600, 585, 222, 45);
    stroke('saddlebrown');
    branches();
    leaves(dleafcolors, 1000);
    updateDuck();
    drawSprites();
}

function winter() {
    background('darkgrey');
    fill('snow');
    ellipse(200, 850, 700, 600);
    ellipse(600, 800, 700, 600);
    fill('yellow');
    ellipse(130, 130, 75, 75);
    fill('paleturquoise');
    ellipse(600, 585, 222, 45);
    stroke('rgba(245, 245, 245, 0.5)');
    branches();
    updateDuck();
    drawSprites();
}
//sub-algorithm 1
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
//sub-algorithm 2
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
//sub-algorithm 3
function updateDuck() {
    if (select.value() == 'winter') {
        duck.changeAnimation('winter');
        happy = false;
        duck.position.x = 735;
        duck.position.y = 590;
    } else {
        duck.velocity.x = duckvel;
        if (duck.position.x < 535) {
            duck.changeAnimation('right');
            happy = false;
            duckvel =  .75;
        } else if (duck.position.x > 675) {
            duck.changeAnimation('left');
            happy = false;
            duckvel =  -.75;
        }
    }
    if (duck.overlapPoint(mouseX, mouseY) && happy == false) {//overlapPoint() method found on: https://molleindustria.github.io/p5.play/docs/classes/Sprite.html#method-overlapPoint
            duck.changeAnimation(duck.getAnimationLabel() + '-happy');//getAnimationLabel() method found on: https://molleindustria.github.io/p5.play/docs/classes/Sprite.html#method-getAnimationLabel
        happy = true;
    } else if (duck.overlapPoint(mouseX, mouseY) == false && happy == true) {
        duck.changeAnimation(duck.getAnimationLabel().slice(0, -6));
        happy = false;
    }
}

function reset() {
    flowerx = [];
    flowery = [];
    x = [];
    y = [];
    colornums = [];
    size = [];
    
    if (iswinter == true) {
        duck.changeAnimation('left');
        duck.position.x = 675;
        duck.position.y = 561;
    }
    if (select.value() == 'winter') {
        iswinter = true;
    } else {
        iswinter = false;
    }
}