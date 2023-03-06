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
                 {x: -790, y: -865, w: -865, h: -925, color: color("blue")},

{x: -315, y: -925, w: -460, h: -990, color:  color("blue")}
,
{x: -275, y: -985, w: -370, h: -1020, color:  color("blue")}
,
{x: -265, y: -965, w: -365, h: -1035, color:  color("blue")}
,
{x: -855, y: -935, w: -935, h: -990, color: color("blue")}
,
{x: 815, y: -420, w: 715, h: -930, color: color("blue")}
,
{x: 790, y: -930, w: 710, h: -1005, color:  color("blue")}
,
{x: 450, y: -1145, w: 295, h: -1280, color: color("blue")}
,
{x: 465, y: -1150, w: 295, h: -1275, color: color("blue")}
,

{x: 640, y: -1140, w: 555, h: -1220, color: color("blue")}
,

{x: 500, y: -1280, w: 440, h: -1315, color: color("blue")}
,

{x: 510, y: -1280, w: 450, h: -1345, color:  color("blue")}
,

{x: 515, y: -1265, w: 435, h: -1355, color:  color("blue")}
,

{x: 660, y: -1155, w: 625, h: -1210, color:  color("blue")}
,

{x: 660, y: -1140, w: 630, h: -1225, color: color("blue")}
,

{x: 150, y: -1170, w: 85, h: -1250, color: color("blue")}
,

{x: 55, y: -1225, w: -40, h: -1300, color:  color("blue")}
,

{x: 615, y: -1475, w: 100, h: -1765, color: color("blue")}
,

{x: 140, y: -1490, w: -45, h: -1720, color:  color("blue")}
,

{x: 655, y: -1520, w: 575, h: -1710, color:  color("blue")}
,

{x: -1025, y: -1305, w: -1145, h: -1385, color: color("blue")}
,

{x: -1220, y: -1300, w: -1335, h: -1380, color: color("blue")}
,

{x: -1550, y: -975, w: -1915, h: -1240, color:  color("blue")}
,

{x: -1895, y: -1165, w: -2010, h: -1240, color: color("blue")}
,

{x: -1890, y: -940, w: -2095, h: -1080, color: color("blue")}
,

{x: -2130, y: -1320, w: -2245, h: -1400, color:  color("blue")}
,

{x: -1990, y: -1405, w: -2045, h: -1480, color: color("blue")}
,

{x: -1420, y: -1705, w: -1475, h: -1765, color: color("blue")},

{x: -195, y: -1405, w: -295, h: -1485, color: color("blue")}
,
 
{x: -140, y: -1290, w: -240, h: -1370, color: color("blue")}

 ,
{x: 160, y: -1170, w: 115, h: -1250, color: color("blue")}

 ,
{x: 805, y: -1215, w: 650, h: -1320, color: color("blue")}
,
 
{x: 810, y: -1235, w: 655, h: -1355, color: color("blue")}
,
 
{x: 805, y: -1225, w: 655, h: -1275, color: color("blue")}
,
 
{x: 650, y: -1265, w: 550, h: -1350, color: color("blue")}
,
 
{x: 545, y: -1340, w: 460, h: -1405, color: color("blue")}
,
 
{x: -145, y: -1275, w: -255, h: -1340, color: color("blue")}
,
 
{x: -140, y: -1275, w: -250, h: -1310, color: color("blue")}
, 
{x: -150, y: -1275, w: -250, h: -1305, color: color("blue")}
, 
{x: 535, y: -1320, w: 485, h: -1365, color: color("blue")}
, 
{x: -295, y: -1945, w: -410, h: -1975, color: color("blue")}
, 
{x: -310, y: -1940, w: -410, h: -2040, color: color("blue")}
, 
{x: -300, y: -1950, w: -350, h: -1975, color: color("blue")}
, 
{x: -535, y: -1760, w: -695, h: -1855, color: color("blue")}
, 
{x: 735, y: -1365, w: 650, h: -1435, color: color("blue")}
, 
{x: -265, y: -2320, w: -325, h: -2395, color: color("blue")}
, 
{x: -500, y: -1800, w: -575, h: -1865, color: color("blue")}
, 
{x: -520, y: -1755, w: -705, h: -1840, color: color("blue")}
, 
{x: -525, y: -1760, w: -690, h: -1835, color: color("blue")}
, 
{x: -1275, y: -1910, w: -1460, h: -1985, color: color("blue")}
, 
{x: -1330, y: -1965, w: -1410, h: -2025, color: color("blue")}
, 
{x: -1305, y: -1950, w: -1345, h: -2000, color: color("blue")}
, 
{x: -1290, y: -1900, w: -1465, h: -1935, color: color("blue")}
, 
{x: -1380, y: -1950, w: -1445, h: -2010, color: color("blue")}
, 
{x: -670, y: -2045, w: -1550, h: -2090, color: color("blue")}
, 
{x: -655, y: -2040, w: -1560, h: -2110, color: color("blue")}
, 
{x: -2330, y: -1345, w: -2385, h: -1410, color: color("blue")}
, 
{x: -2740, y: -1060, w: -3020, h: -1130, color: color("blue")}
, 
{x: -2330, y: -1345, w: -2390, h: -1410, color: color("blue")}
, 
{x: -2735, y: -1060, w: -3020, h: -1140, color: color("blue")}
, 
{x: -2465, y: -670, w: -2585, h: -750, color: color("blue")}
, 
{x: -2650, y: -410, w: -3070, h: -660, color: color("blue")}
, 
{x: -2515, y: -420, w: -2685, h: -520, color: color("blue")}
, 
{x: -2595, y: -485, w: -2690, h: -580, color: color("blue")}
, 
{x: -3050, y: -570, w: -3115, h: -660, color: color("blue")}
, 
{x: -3050, y: -415, w: -3155, h: -505, color: color("blue")}
, 
{x: -1505, y: -2050, w: -1560, h: -2430, color: color("blue")}
, 
{x: -1415, y: -2375, w: -1565, h: -2425, color: color("blue")}
, 
{x: -1420, y: -2370, w: -1565, h: -2445, color: color("blue")}
, 
{x: -805, y: -2085, w: -1380, h: -2345, color: color("blue")}
, 
{x: -780, y: -2060, w: -830, h: -2335, color: color("blue")}
, 
{x: -650, y: -2055, w: -700, h: -2375, color: color("blue")}
, 
{x: -660, y: -2325, w: -775, h: -2395, color: color("blue")}
, 
{x: -1315, y: -2310, w: -1385, h: -2360, color: color("blue")}
, 
{x: 80, y: 460, w: -1200, h: 315, color: color("blue")}
, 
{x: -545, y: 345, w: -810, h: 265, color: color("blue")}
, 
{x: -490, y: 335, w: -560, h: 280, color: color("blue")}
, 
{x: -520, y: 305, w: -565, h: 285, color: color("blue")}
, 
{x: -515, y: 295, w: -560, h: 285, color: color("blue")}
, 
{x: -525, y: 320, w: -570, h: 275, color: color("blue")}
, 
{x: 200, y: 460, w: 45, h: 415, color: color("blue")}
, 
{x: 175, y: 460, w: 55, h: 400, color: color("blue")}
, 
{x: 165, y: 430, w: 45, h: 360, color: color("blue")}
, 
{x: 140, y: 400, w: 60, h: 345, color: color("blue")}
, 
{x: 125, y: 380, w: 65, h: 340, color: color("blue")}
, 
{x: 115, y: 375, w: 45, h: 305, color: color("blue")}
, 
{x: -795, y: 340, w: -855, h: 280, color: color("blue")}
, 
{x: -1190, y: 470, w: -1315, h: 405, color: color("blue")}
, 
{x: -1190, y: 435, w: -1230, h: 350, color: color("blue")}
, 
{x: -1230, y: 440, w: -1270, h: 395, color: color("blue")}
, 
{x: -1215, y: 445, w: -1265, h: 375, color: color("blue")}
, 
{x: -1180, y: 395, w: -1225, h: 345, color: color("blue")}
, 
{x: -1225, y: 395, w: -1260, h: 380, color: color("blue")}
, 
{x: -1715, y: -1940, w: -2640, h: -2030, color: color("blue")}
, 
{x: -2040, y: -1920, w: -2400, h: -1980, color: color("blue")}
, 
{x: -2580, y: -1965, w: -2650, h: -2400, color: color("blue")}
, 
{x: -410, y: -2025, w: -605, h: -2095, color: color("blue")}
, 
{x: -435, y: -2070, w: -585, h: -2150, color: color("blue")}
, 
{x: -525, y: -2085, w: -680, h: -2195, color: color("blue")}
, 
{x: -2025, y: -85, w: -2230, h: -190, color: color("blue")}
, 
{x: -2065, y: -50, w: -2230, h: -100, color: color("blue")}
, 
{x: -2415, y: 450, w: -2680, h: 340, color: color("blue")}
, 
{x: -2555, y: 410, w: -2650, h: 325, color: color("blue")}
, 
{x: -2610, y: 355, w: -2680, h: 245, color:color("blue")}
                ],
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
    // console.log(depth_image_name);
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