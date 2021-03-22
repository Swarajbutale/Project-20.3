var tom,jerry,garden;

function preload() {
    tomRunningAnimation=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg=loadImage("images/cat1.png");
    tomHappyImg=loadAnimation("images/cat4.png");
    jerryAnimation=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg=loadImage("images/mouse1.png");
    jerryHappyImg=loadAnimation("images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
    //load the images here
}

function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here
    garden=createSprite(450,350);
    garden.addImage(gardenImg);

    
    jerry=createSprite(200,500,10,10);
    jerry.addImage(jerryImg);
    jerry.addAnimation("jerryTeasing",jerryAnimation);
    jerry.addAnimation("jerryHappy",jerryHappyImg);
    //jerry.addImage(jerryHappyImg);
    jerry.scale=0.1;

    tom=createSprite(700,500,10,10);
    tom.addImage(tomImg);
    tom.addAnimation("tomRunning",tomRunningAnimation);
    tom.addAnimation("tomHappy",tomHappyImg);
    //tom.velocityX=-2;
    tom.scale=0.15;


}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    //keyPressed();

    if(tom.x-jerry.x<(tom.width-jerry.width)/2) {
      
    tom.velocityX=0;
    //jerry.addImage(jerryHappyImg);
    tom.changeAnimation("tomHappy",tomHappyImg);
    jerry.changeAnimation("jerryHappy",jerryHappyImg);
    tom.x=300;

    //tom.addImage(tomHappyImg);
    

   }

    
  // Text(mouseX+','+mouseY,10,45);
    drawSprites();
    //Text(mouseX+','+mouseY,10,45);
}


function keyPressed(){
    if(keyCode===LEFT_ARROW) {
        tom.velocityX=-3;
      // tom.addAnimation("tomRunning",tomRunningAnimation);
        tom.changeAnimation("tomRunning",tomRunningAnimation);
        jerry.changeAnimation("jerryTeasing",jerryAnimation);
        //tom.velocityX=0;
        
    }    
  //For moving and changing animation write code here
}
