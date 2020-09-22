class Bubble {
   //class methods
  constructor(_xPos, _yPos, _rotation = 0, _size = 20) { 
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.rotation = _rotation; 
  this.size = _size;
  }
  display() {
  fill(168, 254, 255)
  circle (this.xPos, this.yPos, 30);
  }
  
  move(){
    this.rotation++;
    
  if (this.yPos <= height * .8){
    this.yPos +=2;
      }else{
        this.yPos = -height * .8;
  } 
  }
}