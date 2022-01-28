class Canon{
    constructor(x, y, width, heigth, angle){
    this.x = x;
    this.y = y; 

    this.width = width;
    this.heigth = heigth;
    this.angle = angle;
    }
    display(){
        
        if(keyIsDown(RIGHT_ARROW) && this.angle < -0.01){
            this.angle += 0.02;  
        }
           
        if(keyIsDown(LEFT_ARROW) && this.angle > -1.45){
            this.angle -= 0.02;  
        }
        fill("gray");
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.heigth);
        pop();
        arc(this.x -40, this.y +100, 80, 100, PI, TWO_PI);
          
        
    }
} 

