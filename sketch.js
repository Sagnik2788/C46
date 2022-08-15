var Bg,Vaccine,Soap,Win,Lose,Boy,invisibleground,Alpha,rand

var BgIMG,VaccineIMG,SoapIMG,WinIMG,GOIMG,BoyIMG,DeltaIMG,AlphaIMG,OmiIMG
var Score = 0

function preload() {
  DeltaIMG = loadImage("Delta.png")
  BoyIMG = loadAnimation("Lidd7Me5T-unscreen.gif")
  BgIMG = loadImage("Backg.png")
  VaccineIMG = loadImage("Vaccine.png")
  SoapIMG = loadImage("Soap.png")
  WinIMG = loadImage("Win.jpg")
  GOIMG = loadImage("gameover.jpg")
  AlphaIMG = loadImage("Alpha.png")
  OmiIMG = loadImage("Omi.png")
}


function setup(){
 createCanvas(600,400)

  Bg = createSprite(300,200,600,400)
  Bg.addImage(BgIMG)
  Bg.scale = 0.8  
  Bg.velocityX = -3.3

  Boy = createSprite(180,180) 
  Boy.addAnimation("running",BoyIMG)
  Boy.scale= 0.16 


  


   /* Delta=createSprite(80,290)
    Delta.addImage("chasing",DeltaIMG)
    Delta.scale = 0.12 */
  
   invisibleground = createSprite(185,315,10,10)
  invisibleground.visible = false

  Win = createSprite(270,120,600,400)
  Win.addImage(WinIMG)
  Win.scale = 0.85
  Win.visible = false
  
  
 
  
  
//soap y position 239
    Soapgroup = createGroup()
    CoronaGroup = createGroup()
      

    
}


function draw(){
  
  background("Cyan")
   
  if(Soapgroup.isTouching(Boy))
  {
  Soapgroup.destroyEach()
  }
  if(Bg.x < 270){
    Bg.x = Bg.width/2.5;
    
    }



  if(keyDown("space") && Boy.y>= 250){
    Boy.velocityY=-13
  }
  Boy.velocityY=Boy.velocityY+.8
  Boy.collide(invisibleground)
  if(keyDown("up") && Boy.y>= 250){
    Boy.velocityY=-13
  }
  
   
  drawSprites();
  fill("Blue")
  text("Score = 0",447,37)
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
 

  
    spawnSoap()
    spawnCorona()
}




function spawnSoap(){
  if(frameCount%110===0){
    Soap=createSprite(525,220,20,20)

    Soap.addImage(SoapIMG)
    Soap.y=Math.round(random(150,220))
    Soap.velocityX=-2
    Soap.scale=0.1
    Soapgroup.add(Soap)
  }}


  function spawnCorona(){

    if(frameCount%130===0){
      Alpha = createSprite(525,290,20,20)
      Alpha.velocityX = -3
     /* rand = Math.random(1,3)
      if(rand===1){
        Alpha.addImage(AlphaIMG)


      }
      else if(rand===2){
        Alpha.addImage(DeltaIMG)
      }
      else {
        Alpha.addImage(OmiIMG)
      }*/

    }
  }
