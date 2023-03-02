function Enemy(x,y){
    //Problem: when enemy is at the leftmost side of the screen enemy does not move
    this.x = x;
    this.y = y;
    this.r=40;
    this.images=[];
    this.xDir=1;
    this.yDir=0;

    const MAX_HEALTH = 30;
    const MIN_HEALTH = 20;
    this.health = Math.random() * (MAX_HEALTH - MIN_HEALTH) + MIN_HEALTH;

    this.movement_speed = Math.random() *2 + 2;
    let finalX = plyr.x+Math.floor((2*Math.random()-1)*40)-80;
        
    let finalY = plyr.y+Math.floor((2*Math.random()-1)*40)-80 ;
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
    }

    this.grow= function(){
        this.r = this.r-2; 
    }

    this.move= function(){
        
        if(Math.sqrt(Math.abs(Math.pow(plyr.x-this.x,2)+Math.pow(plyr.y - this.y,2)))<800)
        {
            let delta_x = finalX- this.x
            let delta_y = finalY - this.y
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
                this.x = finalX;
                this.y = finalY;
            
            }
            if(this.x == finalX && this.y == finalY)
            {
                cameraShake(8,20);
            }
        }
    }
}
