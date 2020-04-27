class Bubble {
  
  constructor() { 
    var allInstances = [];
    
    var radius = random(10,100);
    this.x = random(0, width);
    this.y = random(0, height);
    // Tried with fixed value of X and Y. This made all bubbles start from same position. 
    //this.x = 10;
    //this.y = 20;
    
    //this.width = radius;
    //this.height = radius;
    // changed width and height - this caused the shape of bubble change
    this.width = 2*radius;
    this.height = 3*radius;

    //this.color = "white";
    // Changed color of the bubble from white to red
    this.color = "red";
    // Chnaged the velocityx and velocity y that changed the movement of the bubbles
    //this.velocityX = random(-5, +5);
    //this.velocityY= random(-5, +5);
    this.velocityX = random(-2, +2);
    this.velocityY= random(-2, +2);
    //this.velocityX = 0;
    //this.velocityY= 1;
    
    this.display = function() {
      stroke(255);
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x = this.x + this.velocityX;
      this.y = this.y + this.velocityY;
    }
      
  }
}