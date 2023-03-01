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

     enemy = loadImage("assets/enemy/idle/enemy (1).png"); 
    }

function setup(){
    // not connecting to firebase at the moment
    // connectPlayer();
    // livePlayersInfo();
    // livePlayersConnection();
    
    createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    let attack_width_pos=width/2+30;
    let attack_height_pos = height;
    if (plyr.direction=='u'){
        attack_height_pos = height+20;
    }

    attack = new Attack(width/2+30,attack_height_pos);
    for (let i=0;i<20;i++){
        enemies[i] = new Enemy(Math.random()*800+300,Math.random()*1920); 
   }
}

function draw(){
    var playerId = false;
    let playerObj = {};
    connected = true;//not connecting to firebase at the moment
    
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
        var edge = false;
    for (let i=0;i<enemies.length;i++){
        enemies[i].show(enemy);
        enemies[i].move();

        if (enemies[i].x+350>width || enemies[i].x-100<0){
            edge = true;
        }
    }

    

   for (let i=0;i<attacks.length;i++){
            attacks[i].show();
            attacks[i].move();
            for (let j=0;j<enemies.length;j++){
                if (attacks[i].hits(enemies[j])){
                    // enemies[j].grow();
                    enemies.splice(j,1);
                    attacks[i].evaporate();
                    console.log("Killed");
                    console.log("attack end",mouseX,mouseY);
                }
            }
    }
   for (let i=(attacks.length-1);i>=0;i--){
        if (attacks[i].toDelete){
            attacks.splice(i,1);
        }
    }
    
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){ //68 is d in wasd
            //Pass enemies array to function to modify it's x and y value
            plyr.moveRight(enemies);
            img = plyr.images_right;
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            // updatePlayer(playerObj);           
        } else  if (keyIsDown(LEFT_ARROW)|| keyIsDown(65)){
            plyr.moveLeft(enemies);
            img = plyr.images_left;
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            // updatePlayer(playerObj);
        } else  if (keyIsDown(UP_ARROW) || keyIsDown(87)){
            plyr.moveUp(enemies);
            img = plyr.images_back;
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            // updatePlayer(playerObj);
        } else  if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)){
            img = plyr.images_front;
            plyr.moveDown(enemies);
            onlinePlayer.info.x = plyr.x;
            onlinePlayer.info.y = plyr.y;
            // updatePlayer(playerObj);
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
    cameraShake(10,30);
    var attack = new Attack(plyr.x+60,plyr.y+20, plyr.direction, mouseX, mouseY, true);
        attacks.push(attack);
        plyr.change_frames(true);
        console.log("attack start",plyr.x,plyr.y);
}

function mouseReleased(){
    frameToShow = 0;
}

function keyPressed(){
    if (key===" "){
        var attack = new Attack(plyr.x+60,plyr.y+20, plyr.direction);
        attacks.push(attack);
        plyr.change_frames(true);
    }
}



