function preload() {
}

function setup() {
    canvas=createCanvas(620, 620);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,125,125,350,350);
    stroke("goldenrod");
    fill("goldenrod");
    rect(60,60,480,40);
    rect(60,60,40,480);
    rect(60,520,480,40);
    rect(520,60,40,500);
    fill("rebeccapurple");
    stroke("rebeccapurple");
    circle(60,60,100);
    circle(560,60,100);
    circle(60,560,100);
    circle(560,560,100);
}

function take_snapshot() {
    save('tearsofthekingdom.png')
}