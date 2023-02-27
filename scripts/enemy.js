function Enemy(x,y){
    this.x = x;
    this.y = y;
    this.r=40;
    this.images;
    this.xDir=1;
    this.yDir=0;
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
        this.x = this.x + this.xDir ;
        this.y = this.y + this.yDir ;
    }
}
