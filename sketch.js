function setup() {
  createCanvas(1000,700);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  function setup() {
    createCanvas(720, 400);
    noStroke();
  }
  
  
    background(0);
    // Scale the mouseX value from 0 to 720 to a range between 0 and 175
    let c = map(mouseX, 0, width, 0, 175);
    // Scale the mouseX value from 0 to 720 to a range between 40 and 300
    let d = map(mouseX, 0, width, 40, 300);

    fill(255, c, 0);
    ellipse(width/2,height/2, d, d);
  
  
 h = hour();
text('Current hour:\n' + h, 100, 50);
 m = minute();
text('Current minute: \n' + m, 300, 50);
 s = second();
text('Current second: \n' + m, 500, 50);

sAngle=map(s,0,60,0,360)





  drawsprites();
  

}