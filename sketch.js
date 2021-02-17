function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(220);
  fill(97, 123, 255)
  rect(0, 0, width/2, height)
  fill(255, 66, 66)
  rect(width/2, 0, width, height)
  strokeWeight(5)
  line(width/2, 0, width/2, height)
}
