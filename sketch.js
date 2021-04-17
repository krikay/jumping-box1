var canvas;
var music;
var block1
var block2
var block3
var block4
var ball
var edges

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(50,580,250,30);
block1.shapeColor="blue";

block2=createSprite(285,580,220,30);
block2.shapeColor="orange";

block3=createSprite(515,580,250,30);
block3.shapeColor="red";

block4=createSprite(740,580,250,30);
block4.shapeColor="green";

ball=createSprite(random(20,750),100,40,40);

    //create box sprite and give velocity
ball.shapeColor="white"
ball.setVelocity(4,9)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);





//add condition to check if box touching surface and make it box
if(block1.isTouching(ball)&&ball.bounceOff(block1)){
    ball.shapeColor="blue";
    music.play();
}

if(block2.isTouching(ball)){
    ball.shapeColor="orange";
    music.stop();
    ball.setVelocity(0,0);
}

if(block3.isTouching(ball)&&ball.bounceOff(block3)){
    ball.shapeColor="red";
    
}

if(block4.isTouching(ball)&&ball.bounceOff(block4)){
    ball.shapeColor="green";
    
}
drawSprites();
}
