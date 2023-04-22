function setup() {
  createCanvas(600,600);
  background(255,255,255);
  frameRate(90);
}
function draw() {
  stroke(frameCount*9,frameCount*6,frameCount*7)
  v=frameCount*10;
  line(v,0,600,v);
  line(v,600,0,v);
  line(600-v,0,0,v);
  line(600-v,600,600,v);
}