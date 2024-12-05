class tors
{
  test
 constructor(multiZ,multiX,incZ,incX,randZ,randX,rotSpeedX,rotSpeedY,rotSpeedZ,radius,opacity)
  {

    this.zAngle = multiZ * incZ + randZ;
    console.log(this.zAngle, "this.zangle");
    this.xAngle = multiX * incX + randX;
    this.a = rotSpeedX;
    this.b = rotSpeedY;
    this.c = rotSpeedZ;
    this.r = radius;
    this.opacity = opacity
      strokeWeight(3);
  stroke(32, 8, 64,opacity);

      
  }
  disp()
  {
    
  push();

  
  specularMaterial(32, 8, 64);
  pointLight(255, 255, 255, mouseX, mouseY, 0);
      //direction from center
      rotateZ(this.zAngle);
      rotateX(this.xAngle);

      //Move distance from radius
      translate(0, this.r, 0);
      rotateZ(frameCount*this.a);
      rotateX(frameCount*this.b);
      rotateY(frameCount*this.c);
      torus(this.r/2,this.r/4,5,10);

  pop();
  }
  
}