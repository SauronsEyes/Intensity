function Enemy(x,y){
    //Problem: when enemy is at the leftmost side of the screen enemy does not move
    
    this.x = x;
    this.y = y;

    this.r=40;
    this.images=[];
    this.xDir=1;
    this.yDir=0;
    
    this.mapX = this.x;
    this.mapY = this.y;

    const MAX_HEALTH = 30;
    const MIN_HEALTH = 20;
    this.damage = 0.2;

    this.health = Math.random() * (MAX_HEALTH - MIN_HEALTH) + MIN_HEALTH;

    this.movement_speed = Math.random() *2 + 2;
    speed =  this.movement_speed;

    let finalX = plyr.x+Math.floor((2*Math.random()-1)*40)-80;
    // let finalX =0;
        
    let finalY = plyr.y+Math.floor((2*Math.random()-1)*40)-80 ;
    // let finalY =0;

    this.init_images = function(path="assets/enemy/idle/", no_of_frames = 12 ){
        //place this function in the preload function

        for (let i=0;i<no_of_frames;i++){
            
            this.images[i]=loadImage(`assets/enemy/idle/enemy (${i+1}).png`)
        }
        
   
    }

    this.show = function(img){
        // fill(0,255,0);
        // ellipse(this.x, this.y,this.r*2,this.r*2);
        image(img,this.x, this.y);
        // image(img,plyr.x, plyr.y);
        
        if (keyIsDown(76)){ // for debug when l is pressed
            this.movement_speed = 0;
            console.log("enemy",this.x,this.y);
        // console.log("enemyV2", bgImage.x-this.x+(finalX-plyr.x), bgImage.y-this.y+((finalY-plyr.y)));
        // console.log("player", bgImage.x-plyr.x, bgImage.y-plyr.y);
        console.log("enemyV2", bgImage.x-this.x+(finalX), bgImage.y-this.y+((finalY)));
        console.log("player", bgImage.x, bgImage.y);
        console.log("window_Width,window_height", windowWidth, windowHeight);
        } else {
            this.movement_speed = speed;
        }

        // fill(20, 20, 20,150);
        // ellipse(this.x+130,this.y+200, Math.random() * (60 - 50) + 50, Math.random() * (30 - 20) + 20); //shadow
    }

    this.grow = function(){
        this.r = this.r-2; 
    }

    this.move = function(){
        
        if(Math.sqrt(Math.abs(Math.pow(plyr.x-this.x,2)+Math.pow(plyr.y - this.y,2)))<800)
        {
            let delta_x = finalX- this.x
            let delta_y = finalY - this.y
            let dist = sqrt( (delta_x * delta_x) + (delta_y * delta_y) ) //using distance formula
            if (dist > this.movement_speed)
            {
                let ratio = this.movement_speed / dist;
                let x_move = ratio * delta_x;   //the ratio by which x should increase
                let y_move = ratio * delta_y; //the ratio by which y should increase
                // if ((bgImage.check_collision(bgImage.x-this.x+finalX,bgImage.y-this.y+finalY))){
                //     console.log("okay enemy collided");
                // }
                if ((bgImage.check_collision(bgImage.x-this.x+finalX,bgImage.y-this.y+finalY+this.movement_speed))){
                    console.log("okay enemy collidedx");
                    
                        console.log("okay enemy collidedy");
                        // this.y = - y_move + this.y;
                        this.x = x_move + this.x; 
                  
                    // this.x = - x_move + this.x;   
                } else if ((bgImage.check_collision(bgImage.x-this.x+finalX+this.movement_speed,bgImage.y-this.y+finalY))){
                    console.log("okay enemy collidedy");
                    // this.y = - y_move + this.y;
                    
                        this.y = y_move + this.y;
                    
                } else {
                    this.x = x_move + this.x;
                    this.y = y_move + this.y;
                }
                
                
            }
            else
            {   
                this.x = finalX;
                this.y = finalY;
            
            }
            if(this.x == finalX && this.y == finalY)
            {
                cameraShake(8,20);
                plyr.health -= this.damage;
            }
        }
    }
}
