var cat, catImage1, catImage2, catImage3;
var mouse, mouseImage1, mouseImage2, mouseImage3;
var bkgnd, bkgndImage;

function preload() {
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation(
        "images/cat2.png",
        "images/cat3.png"
        );
    catImage3 = loadAnimation("images/cat4.png");

    mouseImage1 = loadAnimation(
        "images/mouse1.png",
        );
    mouseImage2 = loadAnimation(
        "images/mouse2.png",
        "images/mouse3.png"
        );
    mouseImage3 = loadAnimation(
        "images/mouse4.png"
        );

    bkgndImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(900, 550);
    
    bkgnd = createSprite(450, 200, windowWidth, windowHeight);
    bkgnd.addImage(bkgndImage);
    //bkgnd.velocityX = -4;
    //bkgnd.scale = 1.5;

    cat = createSprite(800, 450, 20, 20);
    cat.addAnimation("catInitialSit", catImage1);
    cat.addAnimation("catRunning", catImage2);
    cat.addAnimation("catFinalSit", catImage3);
    cat.changeAnimation("catInitialSit");
    cat.scale = 0.1;

    mouse = createSprite(80, 450, 20, 20);
    mouse.addAnimation("mouseCheeseGift", mouseImage1);
    mouse.addAnimation("mouseCalling", mouseImage2);
    mouse.addAnimation("mouseSearch", mouseImage3);
    mouse.changeAnimation("mouseCheeseGift", mouseImage1);
    mouse.scale = 0.1;
}

function draw() {
    background(0);
    text (mouseX + ', ' + mouseY, 45, 10);

    if (cat.x < (window.width/2)) {
        if ((cat.x - mouse.x) < (cat.width/2)) {
            cat.velocityX = 0;
            cat.changeAnimation("catFinalSit");
            mouse.changeAnimation("mouseSearch");
        }    
    }

    drawSprites();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW){
        cat.velocityX = -4;
        cat.changeAnimation("catRunning");
         mouse.changeAnimation("mouseCalling");
    }
}
