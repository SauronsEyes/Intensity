
function Attack(x,y,dir,finalx=0,finaly=0, mouse=false){ //remove dir and mouse after mouse works
    this.x = x-30;
    this.y = y+30;
    this.r = 5;

    this.endX = finalx;
    this.endY = finaly;

    this.movement_speed = 30;
    this.toDelete = false;

    this.calc_trajectory=function(){
      

        
    }

    this.show = function(){
        noStroke();
        fill(236,165,0);
        // fill(255,255,255);
        ellipse(this.x, this.y,this.r*2,this.r*2);
        fill(255, 170, 51,4);
        // fill(220,220,220,4);

        for(i = 0; i < this.r*10; i++){
            ellipse(this.x,this.y, i*3);
          }
        
          if (bgImage.check_collision(this.x,this.y)){
            console.log("hhello");
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
            
                let delta_x = this.endX - this.x
                let delta_y = this.endY - this.y
                let dist = sqrt( (delta_x * delta_x) + (delta_y * delta_y) ) //using distance formula
                if (dist > this.movement_speed)
                {
                    let ratio = this.movement_speed / dist
                    let x_move = ratio * delta_x   //the ratio by which x should increase
                    let y_move = ratio * delta_y //the ratio by which y should increase
                    this.x = x_move + this.x 
                    this.y = y_move + this.y
                }
                else
                {   
                    this.x = this.endx 
                    this.y = this.endY
                    
                    this.evaporate();
                }

                
            // } 
        }
        
    }
}
