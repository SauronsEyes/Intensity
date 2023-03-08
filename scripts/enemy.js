function Enemy(x,y){
    //Problem: when enemy is at the leftmost side of the screen enemy does not move
    
    this.x = x;
    this.y = y;
    this.renderReady=false;
    this.r=40;
    this.images=[];
    this.xDir=1;
    this.yDir=0;
    
    this.mapX = this.x;
    this.mapY = this.y;

    this.MAX_HEALTH = 5;
    this.MIN_HEALTH = 1;
    this.damage = 1;

    this.images_back = [];
    this.images_front = [];
    this.images_left = [];
    this.images_right = [];

    this.current_image_array = [];

    this.health = Math.random() * (this.MAX_HEALTH - this.MIN_HEALTH) + this.MIN_HEALTH;

    this.movement_speed = Math.random() *6 + 2;
    speed =  this.movement_speed;

    let finalX = plyr.x+Math.floor((2*Math.random()-1)*50)-20;
    // let finalX =0;
        
    let finalY = plyr.y+Math.floor((2*Math.random()-1)*50)-20 ;
    // let finalY =0;

    this.init_images = function(path="assets/enemy/idle/", no_of_frames = 12 ){
        //place this function in the preload function

        for (let i=0;i<no_of_frames;i++){
            
            this.images[i]=loadImage(`assets/enemy/idle/enemy/(${i+1}).png`)
        }
        
   
    }

    this.init_goblin_images= function(path, no_of_frames){
        //place this function in the preload function
        //add a folder in the parameter the folder should have front, back,left and right sub folders
        //in the front folder select all and rename all to front do this for other folders
        // \assets\enemy\goblin
        //not using all the images for saving memory pusposes
        // for (let i=1;i<no_of_frames+1;i++){
        //     this.images_back[i-1]=loadImage(`${path}/back/back (${i}).png`)  
        // }
        for (let i=1;i<no_of_frames+1;i++){
            this.images_front[i-1]=loadImage(`${path}/front/front (${i}).png`)
        }
        // for (let i=1;i<no_of_frames+1;i++){
        //     this.images_left[i-1]=loadImage(`${path}/left/left (${i}).png`)
        // }
        // for (let i=1;i<no_of_frames+1;i++){
        //     this.images_right[i-1]=loadImage(`${path}/right/right (${i}).png`)
        // }
    }

    this.show = function(img){
        noStroke();
        fill(20, 20, 20,150);
        ellipse(this.x+50,this.y+80, Math.random() * (50 - 40) + 40, Math.random() * (20 - 10) + 10); //shadow

        if (this.x>-100 && this.x < windowWidth && this.y < windowHeight && this.y>-100 ){
            image(img,this.x, this.y,  100,100);
        } 
        
        // image(img,plyr.x, plyr.y);
        
        if (keyIsDown(76)){ // for debug when l is pressed
            this.movement_speed = 0;
            console.log("enemy",this.x,this.y);
        // console.log("enemyV2", bgImage.x-this.x+(finalX-plyr.x), bgImage.y-this.y+((finalY-plyr.y)));
        // console.log("player", bgImage.x-plyr.x, bgImage.y-plyr.y);
        // console.log("enemyV2", bgImage.x-this.x+(finalX), bgImage.y-this.y+((finalY)));
        // console.log("player", bgImage.x, bgImage.y);
        // console.log("window_Width,window_height", windowWidth, windowHeight);
        plyr.health = 100;
        } else {
            this.movement_speed = speed;
        }
        
    }

    this.grow = function(){
        this.r = this.r-2; 
    }

    this.move = function(){
        
        if(Math.sqrt(Math.abs(Math.pow(plyr.x-this.x,2)+Math.pow(plyr.y - this.y,2)))<1000)
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
                    // console.log("okay enemy collidedx");
                    
                        // console.log("okay enemy collidedy");
                        // this.y = - y_move + this.y;
                        this.x = x_move + this.x; 
                  
                    // this.x = - x_move + this.x;   
                } else if ((bgImage.check_collision(bgImage.x-this.x+finalX+this.movement_speed,bgImage.y-this.y+finalY))){
                    // console.log("okay enemy collidedy");
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
                if (plyr.health>0){
                    cameraShake(8,20);
                    plyr.health -= this.damage;
                }
                
            }
        }
    }
}
