function Map(imgname, x = 0, y = 0, width = 0, height = 0) {
    //put the name of the map image as the parameter, an create the object  background = Map("bg.png");
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.name = imgname;
    this.collision = false;

    this.saved_settings = {
        //here we will specify the colliders and other stuffs for each map
        //top left (x,y will be x and y) bottom right (x,y) will be w and h
        "current_map": {
            colliders: [{ x: 745, y: -440, w: -525, h: -925, color:color("green") },
                 {h: -925, w: -2045, x: -830, y: -445, color:color("blue")}, { x: -1530, y: 450, w: -2045, h: -465, color:color("red") }]
                 
        }
    }

    this.activate_colliders = function (X, Y) {
        this.collision = this.check_collision(X, Y);
        
    }

    this.check_collision = function (X, Y) {
        let adjustDeviceColliderX = (windowWidth-nativeWidth)/2;
        let adjustDeviceColliderY = (windowHeight-nativeHeight)/2;


        let has_collided = [false];
        let counter = 0;
        this.saved_settings["current_map"].colliders.map((collider) => {
            if (debug_colliders!=true){
            fill(collider.color);
            
            rect(20+(windowWidth/2 + bgImage.x - (collider.x+resolutionDifferenceX)), 50+(windowHeight/2 + bgImage.y - (collider.y+resolutionDifferenceY)), Math.abs(collider.x-collider.w), Math.abs(collider.y-collider.h));
            }
            // if (X < collider.x && X > collider.w && Y < collider.y && Y > collider.h) {
            if (X-(adjustDeviceColliderX) < collider.x && X-(adjustDeviceColliderX) > collider.w && Y-(adjustDeviceColliderY) < collider.y && Y-(adjustDeviceColliderY) > collider.h) {

                
                has_collided.push(true);

            } else {
                has_collided.push(false);
            }

        })
        for (let i = 0; i < has_collided.length; i++) {
            if (has_collided[i]) {
                console.log(bgImage.x, bgImage.y);
                return true;
            }
        }
        return false;

    }

    this.img;

    this.init = function () { // this function runs automatically when the object is created
        this.img = loadImage(`assets/maps/${this.name}`);
    }

    this.change = function (imgname) { // can change the image of the object which can be used when going through doors
        this.img = loadImage(`assets/maps/${this.name}`);
    }

    this.show = function () {
        if (this.width == 0 && this.height == 0) {
            image(this.img, this.x, this.y);
        } else {
            image(this.img, this.x, this.y, this.width)
            this.img.resize(this.width, this.height);
        }
        //can resize 
    }

}