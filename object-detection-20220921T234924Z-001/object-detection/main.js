img = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FFC0CB");
    text("Dog", 45, 75);
    noFill();
    stroke("#FFC0CB");
    rect(30, 60, 450, 350);

    fill("FFC0CB");
    text("Cat", 320, 120);
    noFill();
    stroke("#FFC0CB");
    rect(300, 90, 270, 320);
}