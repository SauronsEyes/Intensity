function Map(imgname, x=0,y=0,width=0,height=0){
    //put the name of the map image as the parameter, an create the object  background = Map("bg.png");
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.name = imgname;
    this.collision = false;

    this.saved_settings = {
        //here we will specify the colliders and other stuffs for each map
        "bg.jpg":{colliders:[{x:220,y:60,w:120,h:-40}]}
    }

    this.activate_colliders = function (X, Y){
        this.collision =  this.check_collision(X,Y);      
    }

    this.check_collision = function (X,Y){
        let has_collided = false;
        this.saved_settings["bg.jpg"].colliders.map((collider)=>{
        
            if(X < collider.x && X > collider.w && Y < collider.y && Y > collider.h){
                has_collided = true; 
               } else {
                has_collided = false; 
               }

        })
        return has_collided;
    }

    this.img;

    this.init = function (){ // this function runs automatically when the object is created
        this.img = loadImage(`assets/maps/${this.name}`);
    }

    this.change =  function(imgname){ // can change the image of the object which can be used when going through doors
        this.img = loadImage(`assets/maps/${this.name}`);
    }

    this.show = function(){
        if (this.width==0 && this.height==0){
            image(this.img, this.x, this.y);
        } else {
            image(this.img, this.x, this.y, this.width)
            this.img.resize(this.width, this.height);
        }
        //can resize 
    }

}