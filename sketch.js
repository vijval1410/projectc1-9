var bubbles = [];

function setup() {
  createCanvas(600,400);
  
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  // Created new bubbles 4 and 5
  bubble4 = new Bubble();
  bubble5 = new Bubble();
}

function draw() {
  background(0);
  bubble1.move();
  bubble2.move();
  bubble3.move();
  // created movement of bubble 4 and 5
  bubble4.move();
  bubble5.move();
  
  bubble1.display();
  bubble2.display();
  bubble3.display();
  // displued the bubble
  bubble4.display();
  bubble5.display();
}

    