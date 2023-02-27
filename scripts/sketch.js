var plyr;
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
    createCanvas(windowWidth, windowHeight);
    let attack_width_pos=width/2+30;
    let attack_height_pos = height;
    if (plyr.direction=='u'){
        attack_height_pos = height+20;
    }

    attack = new Attack(width/2+30,attack_height_pos);
    for (let i=0;i<2;i++){
         enemies[i] = new Enemy(i*300+300,20); 
    }

    bg=loadImage('assets/cave.jpg');
}

function draw(){
    background(bg);
    plyr.show(img[frameToShow],plyr.x,plyr.y);
    
    
    var edge = false;
    for (let i=0;i<enemies.length;i++){
        enemies[i].show(enemy);
        enemies[i].move();

        if (enemies[i].x+350>width || enemies[i].x-100<0){
            edge = true;
        }
    }

    if (edge){
    for (let i=0;i<enemies.length;i++){

        enemies[i].xDir *= -1; //change direction
        enemies[i].y += enemies[i].r;
        }
        edge= false;
    }

   for (let i=0;i<attacks.length;i++){
            attacks[i].show();
            attacks[i].move();
            for (let j=0;j<enemies.length;j++){
                if (attacks[i].hits(enemies[j])){
                    // enemies[j].grow();
                    enemies.splice(j,1);
                    attacks[i].evaporate();
                    console.log("Kill");
                }
            }
    }
   for (let i=(attacks.length-1);i>=0;i--){
        if (attacks[i].toDelete){
            attacks.splice(i,1);
        }
    } 
    
     if (keyIsDown(RIGHT_ARROW)){
        plyr.moveRight();
        img = plyr.images_right;
    } else  if (keyIsDown(LEFT_ARROW)){
        plyr.moveLeft();
        img = plyr.images_left;
    } else  if (keyIsDown(UP_ARROW)){
        plyr.moveUp();
        img = plyr.images_back;
    } else  if (keyIsDown(DOWN_ARROW)){
        img = plyr.images_front;
        plyr.moveDown();
        }
}
function keyReleased(){
    frameToShow = 0;
}
function keyPressed(){

    if (key===" "){

        var attack = new Attack(plyr.x+60,plyr.y+20, plyr.direction);
        attacks.push(attack);
        plyr.change_frames(true);
    }
}


