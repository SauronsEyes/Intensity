var plyr;
let connected = false;
var enemy;
var enemies = [];
var attacks = [];
var img=[];
var frameToShow=0; //do not attempt to change this variable
//frame to show variable will be channged in plyr.js to make the character when key is pressed

let bg;


function preload(){
     plyr = new Character();
     plyr.init_images("assets/character/images",4);
     img = plyr.images_right;//starting image direction
     plyr.direction = 'r'; //.direction is needed for projectile direction when pressing space
     plyr.x=300;
     plyr.y=300;
    }

function setup(){
    connectPlayer();
    livePlayersInfo();
    livePlayersConnection();
    
    createCanvas(windowWidth, windowHeight);
    console.log(onlinePlayers);
}

function draw(){
    var playerId = false;
    let playerObj = {};
    
    if (getPlayerId()!="")
    {
         playerId=getPlayerId();
         connected = true;
         playerObj =onlinePlayer.info;
    }
    
    background(51);
    
    if (connected)
    {
        plyr.show(img[frameToShow],plyr.x,plyr.y);
    
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
            plyr.moveRight();
            img = plyr.images_right;
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            updatePlayer(playerObj);           
        } else  if (keyIsDown(LEFT_ARROW)|| keyIsDown(65)){
            plyr.moveLeft();
            img = plyr.images_left;
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            updatePlayer(playerObj);
        } else  if (keyIsDown(UP_ARROW) || keyIsDown(87)){
            plyr.moveUp();
            img = plyr.images_back;
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            updatePlayer(playerObj);
        } else  if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)){
            img = plyr.images_front;
            plyr.moveDown();
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            updatePlayer(playerObj);

        }
        if (keyIsDown(SHIFT)){
                plyr.movement_speed = 10;
        }
    }
    // console.log(winMouseX, winMouseY);
}

function keyReleased(){
    frameToShow = 0;
    plyr.movement_speed = plyr.default_speed;
}

function mousePressed(){
}

function mouseReleased(){
    frameToShow = 0;
}

function keyPressed(){

}



