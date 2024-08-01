function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw(){
  
    stroke("black");
    fill("pink");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 20);
    }
  }
  