function Character(id=""){
    this.id = "";
    this.x =0;
    this.y =0;
    this.movement_speed = 5;
    this.default_speed = this.movement_speed; 
    this.direction = 'r'; //'l' is left 'r' is right 'u' and 'd' is up and down 
    this.img;

    this.images_back = [];
    this.images_front = [];
    this.images_left = [];
    this.images_right = [];
    
    this.init_images= function(path, no_of_frames){
        //place this function in the preload function
        //add a folder in the parameter the folder should have front, back,left and right sub folders
        //in the front folder select all and rename all to front do this for other folders

        for (let i=1;i<no_of_frames+1;i++){
            this.images_back[i-1]=loadImage(`${path}/back/back (${i}).png`)  
        }
        for (let i=1;i<no_of_frames+1;i++){
            this.images_front[i-1]=loadImage(`${path}/front/front (${i}).png`)
        }
        for (let i=1;i<no_of_frames+1;i++){
            this.images_left[i-1]=loadImage(`${path}/left/left (${i}).png`)
        }
        for (let i=1;i<no_of_frames+1;i++){
            this.images_right[i-1]=loadImage(`${path}/right/right (${i}).png`)
        }
    }
    let time=0;
    let x=0;

    this.change_frames=function(hit=false){
        //for this function to work create a frameToShow variable that changes the image in draw function
        //need to pass the frame to show variable by reference
        let frameSpeed = 5;
        if (hit){
            frameSpeed=0;
        }
        if (time > frameSpeed) {
            
            // move to the next index in the array
                
                frameToShow += 1;
        
            // keep the frame index within the range 0 to 
            if (frameToShow == this.images_back.length) {
              frameToShow = 0;
            }
            // reset frame timer
            time = 0;
            // console.log(frameToShow);
            // this.img=image(direction[frameToShow], this.x,this.y);
          }
          time++;
        //--------

    }

    this.show = function(img, x=this.x,y=this.y){
        image(img,x,y); //can resize the character image(img,x,y,width,height)
    }

    this.moveLeft = function (enemies){
        enemies.map((enemy)=>{
            enemy.x += this.movement_speed;
        })
        //this.x -= this.movement_speed;
        this.direction='l';
        this.change_frames();
    }
    this.moveUp = function (){
        enemies.map((enemy)=>{
            enemy.y += this.movement_speed;
        })
        //this.y -= this.movement_speed;
        this.direction='u';
        this.change_frames();
    }
    this.moveRight = function (){
        enemies.map((enemy)=>{
            enemy.x -= this.movement_speed;
        })
        //this.x += this.movement_speed;
        this.direction='r';
        this.change_frames();
    }
    this.moveDown = function (){
        enemies.map((enemy)=>{
            enemy.y -= this.movement_speed;
        })
        //this.y += this.movement_speed;
        this.direction='d';
        this.change_frames();

    }

}