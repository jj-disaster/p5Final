let tor = []
let zInc = 30; //degrees per Z step
let xInc = 50; //degrees per X step
let zSteps = (180)/zInc; //degrees per Z step
let xSteps = (360)/xInc; //degrees per X step
function setup() {
  
  createCanvas(windowWidth, windowHeight, WEBGL); 
  angleMode(DEGREES);
  //create new 
  //rotate around x axis
  for (let zi = 0; zi < zSteps; zi++) {
    //rotate around circle per z step
    for (let xi = 0; xi < xSteps; xi++) {
      tor.push(new tors(zi,xi,zInc,xInc,random(0,2),random(0,3),random(0,3),random(0,3),random(0,3),1000,random(100,255)))
    }
  }
 
}

function draw() {
  background(250, 180, 200,255);


  // Call every frame to adjust camera based on mouse/touch
  orbitControl();
  for(let i = 0; i < zSteps * xSteps; i++)
  {
  tor[i].disp(); 
  }
}
