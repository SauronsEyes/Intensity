function Enemy(x,y){
    this.x = x;
    this.y = y;
    this.r=40;
    this.images;
    this.xDir=1;
    this.yDir=0;
    this.movement_speed = 3;
    this.init_images= function(path, no_of_frames){
        //place this function in the preload function

        for (let i=1;i<no_of_frames+1;i++){
            this.images[i-1]=loadImage(`${path}/enemy (${i}).png`)
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
        let delta_x = plyr.x- this.x
        let delta_y = plyr.y - this.y
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
            this.x = plyr.x
            this.y = plyr.y
           
        }
    }
}
