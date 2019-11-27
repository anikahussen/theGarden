let seed1;
let posX;
let posY;
let seedArr = [];
let speed;
let randomY;
let posY2;
let stemlengthCurrent;
let stemlengthDesired;
let r;
let g;
let b;
let sizeSprout;
let sizeSproutDesired;
let a;
let petallengthDesired
let angle;
let rotSp;


function setup() {
  createCanvas(600, 600);



}

function draw() {
    background(184, 214, 233)

    textAlign(CENTER);
    textSize(24);
    text("PRESS TO PLANT THE SEED", width/2, 100);


  for (let x=0; x<seedArr.length;x++){
    seedArr[x].show();

  }


  noStroke()
  fill (135, 164, 133)
  rect(0, 500, width, 100)













console.log(mouseX, mouseY)










}



class Seed {
  constructor(startX, startY) {
      this.posX = startX;
      this.posY = startY;
      this.size = 6;
      this.speed = 1;
      this.stemlengthDesired = random(50, 300)
      this.stemlengthCurrent = 492;
      this.r = random(0, 255);
      this.b = random(0, 255);
      this.g = random(0, 255);
      this.a = 255;
      this.sizeSprout = 6;
      this.sizeSproutDesired = random(15, 50)
      this.petalWidth = this.sizeSproutDesired;
      this.petalWidthDesired = this.sizeSproutDesired *6;
      this.angle=0;
      this.rotSp = 0.005;

    }

    //petals speed up rotation
    closeBy(){
      let d = dist(this.posX, this.stemlengthDesired, mouseX, mouseY);
      if (d<100){
        this.rotSp = 0.1;
      }
      else{
        this.rotSp = 0.005;
      }
    }



    growPetals(){
     if (this.petalWidth<this.petalWidthDesired){
       this.petalWidth+=1;
      }
      else {
        this.closeBy();
      }
      rectMode(CENTER);
      fill(this.r, this.g, this.b, this.a/2)
      push();

      translate(this.posX,this.stemlengthDesired);
      rotate(this.angle);
      rect(0,0, this.petalWidth/2, this.sizeSprout );


      rect(0,0, this.sizeSprout, this.petalWidth/2);
      this.angle+=this.rotSp;
      pop();
      rectMode(CORNER);

    }


    growSprout(){
      if (this.sizeSprout<=this.sizeSproutDesired){
        this.sizeSprout+=0.1;
      }
      else {
        this.growPetals()
      }

    }



    mound(){
      if (this.size<=16){
        this.size+=0.1;
      }
      else{
        this.stem();
      }
    }

    stem(){

//      this.stemlengthCurrent = this.posY;
      //stroke(0)

       if (this.stemlengthCurrent >=this.stemlengthDesired){
          this.stemlengthCurrent-= 1;
          //console.log( "SLC:", this.stemlengthCurrent )
      }
      else {
        fill(this.r, this.g, this.b, this.a)
        this.growSprout();
        ellipse(this.posX, this.stemlengthDesired, this.sizeSprout, this.sizeSprout)
      }


        stroke(1);
        line(this.posX, 500-this.size/2, this.posX, this.stemlengthCurrent);




    }





  show(){
    noStroke();
    fill(255);
    ellipse(this.posX, this.posY, this.size, this.size);

    if (this.posY<=500){
    this.posY += this.speed;
   }
   else{
    this.mound();
   }



  }






}


class Bee {


}



function mousePressed(){
  if (mouseY<500){
    seedArr.push(new Seed(mouseX, mouseY));
  }
}
