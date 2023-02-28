function Attack(x,y,dir,finalx=0,finaly=0, mouse=false){ //remove dir and mouse after mouse works
    this.x = x-30;
    this.y = y+30;
    this.r = 5;

    this.endX = finalx;
    this.endY = finaly;

    this.movement_speed = 15;
    this.toDelete = false;

    this.calc_trajectory=function(){
      

        
    }

    this.show = function(){
        noStroke();
        fill(236,165,0);
        ellipse(this.x, this.y,this.r*2,this.r*2);
        fill(255, 170, 51,4);
        for(i = 0; i < this.r*3; i++){
            ellipse(this.x,this.y, i*3);
          }
    }

    this.hits = function(flower){
        var d = dist(this.x-100, this.y-130, flower.x, flower.y);//changed the +20 and -20 for enemy.png
        if (d<this.r +flower.r)
        {
            return true;
        } else {
            return false;
        }
    }

    this.evaporate = function(){
            this.toDelete=true;

    }

    let xReached1 = false; //when both of these variables are true then the bullet dissappears
    let xReached2 = false; //when both of these variables are true then the bullet dissappears

    this.move = function(){
        if (!mouse){ 
            if (dir=="u"){
                this.y = this.y -this.movement_speed ;
            }
            if (dir=="d"){
                this.y = this.y +this.movement_speed ;
            }
            if (dir=="r"){
                this.x = this.x +this.movement_speed ;
            }
            if (dir=="l"){
                this.x = this.x -this.movement_speed ;
            }}
        
        if (mouse){
            let m = (this.y-this.endY)/(this.x-this.endX); //the slope of the line  
            //now the equation y-y1=m(x-x1)
            let initX = this.x; //initialX
            let initY= this.y;//initialY
            
            
            // while(this.x<this.endX & this.y<this.endY){
                if (this.x<this.endX){
                    this.x +=this.movement_speed;
                    xReached1 = true;
                } else if (this.x>this.endX){
                    this.x -=this.movement_speed;
                    xReached2 = true;
                } else {
                    xReached1 = true;
                    xReached2 = true;
                }

                if (this.y!=this.endY){
                    this.y = m*(this.x-initX)+initY;
                } 

                if (xReached1==true && xReached2==true){
                    this.toDelete=true;
                    
                }
                
                
                    
                
            // } 
            
        }
        
    }
}
