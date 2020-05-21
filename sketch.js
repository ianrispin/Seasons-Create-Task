var season = "summer";
var flowerx = [];
var flowery = [];
//var colo = get(130, 130);
//var arrt = [0, 1, 2, 3];
//var arr = [0, 1];
//var flowerind = 0;

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
    //console.log(get(130, 130));
    //console.log(arr);
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
    for(i=0; i<60; i++) {
        flowerx.push(random(0, 800));
        flowery.push(random(500, 800));
        //colo =get(130, 130) === (4) [255, 255, 0, 255]
        //if (get(flowerx[i], flowery[i])[0] === (34 || 255)) {
            ellipse(flowerx[i], flowery[i], 6, 6);
        //} else {
            //i--;
        //}
    }
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
    //trunk
    stroke('saddlebrown');
    strokeWeight(14);
    line(135, 540, 135, 630);
    noStroke();
}

//function color() {
//    get(50, 50);
//}