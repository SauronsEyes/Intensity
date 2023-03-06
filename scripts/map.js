function Map(imgname, x = 0, y = 0, width = 0, height = 0) {
    //put the name of the map image as the parameter, an create the object  background = Map("bg.png");
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.name = imgname;
    this.collision = false;

    this.depth_img;
    

    let depth_image_name = ((imgname.split(".")));
        depth_image_name.splice(1,0,"_depth.");
        depth_image_name = depth_image_name.join("");

    this.saved_settings = {
        //here we will specify the colliders and other stuffs for each map
        //top left (x,y will be x and y) bottom right (x,y) will be w and h
        "map_main.jpg": {
            colliders: [{ x: 745, y: -440, w: -525, h: -925, color:color("green") },
                 {h: -925, w: -2045, x: -830, y: -445, color:color("blue")}, { x: -1530, y: 450, w: -2045, h: -465, color:color("red") },
                 {x: -495, y: -695, w: -650, h: -745, color:color("blue")}
                ,
                 {x: -515, y: -700, w: -670, h: -750, color: color("blue")}
                 ,
                 {x: -690, y: -700, w: -855, h: -750, color: color("blue")}
                 ,
                 {x: -550, y: -720, w: -615, h: -785, color: color("blue")}
                ,
                 {x: -745, y: -735, w: -810, h: -785, color: color("blue")}
                ,
                 {x: -505, y: -880, w: -565, h: -925, color: color("blue")}
                 ,
                 {x: -500, y: -860, w: -570, h: -925, color: color("blue")}
                 ,
                 {x: -790, y: -865, w: -865, h: -925, color: color("blue")}],
            depth:{
                path:`assets/maps/${depth_image_name}`
            },
            enemiesCount:10
                 
        }

        
    }

    this.activate_colliders = function (X, Y) {
        this.collision = this.check_collision(X, Y);
        
    }

    this.check_collision = function (X, Y, is_enemy=false, enemy) {
        
        let has_collided = [false];
        let counter = 0;
        this.saved_settings[imgname].colliders.map((collider) => { //current_map is the name of the map
            if (debug_colliders){
            fill(collider.color);
            
            rect(20+(windowWidth/2 + bgImage.x - (collider.x+adjustDeviceColliderX)), 50+(windowHeight/2 + bgImage.y - (collider.y+adjustDeviceColliderY)), Math.abs(collider.x-collider.w), Math.abs(collider.y-collider.h));
            }
            // if (X < collider.x && X > collider.w && Y < collider.y && Y > collider.h) {
            if (!debug_colliders && !is_enemy){
                if (X-(adjustDeviceColliderX) < collider.x && X-(adjustDeviceColliderX) > collider.w && Y-(adjustDeviceColliderY) < collider.y && Y-(adjustDeviceColliderY) > collider.h) {
                // if (X < collider.x && X > collider.w && Y < collider.y && Y > collider.h) {
                has_collided.push(true);
                } else {
                    has_collided.push(false);
                }
            }

            if (!debug_colliders && is_enemy){
                
                if (X < -collider.x+enemy.x && X > -collider.w+enemy.x && Y < -collider.y+enemy.y && Y > -collider.h+enemy.y) {
                has_collided.push(true);
                console.log(
                    "enemy collided"
                );
                } else {
                    has_collided.push(false);
                }
            }

        })
        for (let i = 0; i < has_collided.length; i++) {
            if (has_collided[i]) {
                // console.log(bgImage.x, bgImage.y);
                return true;
            }
        }
        return false;

    }

    this.img;
    console.log(depth_image_name);
    this.init = function () { // this function runs automatically when the object is created
        let depth_image_is_there = false
        this.img = loadImage(`assets/maps/${imgname}`);
        try{
            this.depth_img = loadImage(`assets/maps/${depth_image_name}`);
            depth_image_is_there = true;
        } catch {
            depth_image_is_there = false;
            console.log("depth IMage is not there for this map");
        }
        
    }

    this.change = function (imgname) { // can change the image of the object which can be used when going through doors
        this.img = loadImage(`assets/maps/${this.name}`);
    }

    this.show = function () {
        // translate(width / 4, height / 4);
        if (this.width == 0 && this.height == 0) {
            image(this.img, this.x, this.y);
        } else {
            image(this.img, this.x, this.y, this.width)
            this.img.resize(this.width, this.height);
        }
        //can resize 
    }

    this.show_depth =  function (x=this.x,y=this.y) {
        image(this.depth_img, x,y );//for giving depth in the map  
    }

}