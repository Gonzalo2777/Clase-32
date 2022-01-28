
class Tower {
    constructor(x, y, width, height) {
      var options = {  
        isStatic: true 
//set the static body(challenge 2)
      
      }
        //Load the image of the tower(challenge 5)
this.image = loadImage("assets/tower.png");
this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,this.width,this.height, options);
    World.add(world, this.body);
      //write the instruction to create a rectangular tower body(challenge1)
      //add the option inside the rectangular body(challenge 2)
      //Add this object to the World(challenge 2)
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
            //change the rect as image(challenge 5)
    //rect(0,0,this.width, this.height);
image(this.image,0,0,this.width,this.height); 
//display the rect function (challenge 3)
  pop();
  }
}