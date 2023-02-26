let windX = window.innerWidth;
let windY = window.innerHeight;
var character= 
{       
    speedX:5,
    speedY:5,
    moveLeft:[
        "assets\character\player_left\player05.png",
        "assets\character\player_left\player06.png",
        "assets\character\player_left\player07.png",
        "assets\character\player_left\player08.png"
    ],
    moveRight: [
        "assets\character\player_left\player09.png",
        "assets\character\player_left\player10.png",
        "assets\character\player_left\player11.png",
        "assets\character\player_left\player12.png"
    ],
    moveFront: [
        "assets\character\player_left\player01.png",
        "assets\character\player_left\player02.png",
        "assets\character\player_left\player03.png",
        "assets\character\player_left\player04.png"
    ],
    moveBack: [
        "assets\character\player_left\player13.png",
        "assets\character\player_left\player14.png",
        "assets\character\player_left\player15.png",
        "assets\character\player_left\player16.png"
    ]
}
var gameObjects = [
    {
        name: "background",
        src: 'assets/bg.jpg',
        posX: 100,
        posY: 200
    }
]
var generatedGameObjects = [];
function setup ()
{
    createCanvas(windX,windY);
    player = loadImage('assets/player.png');
    gameObjects.map((gameObject)=>{
        generatedGameObjects.push(loadImage(gameObject.src));
    });   
    
}
function renderObjects()
{
    for(var i=0;i<gameObjects.length;i++)
    {
        image(generatedGameObjects[i],gameObjects[i].posX,gameObjects[i].posY);
    }
    
    
    image(player,windX/2, windY/2);
}
function draw ()
{
    background(0,0,0);
    renderObjects();
    handleKeyPress();
    
}
function handlePlayerMovement(x,y) {
    gameObjects.map((gameObject)=>{
        gameObject.posX = gameObject.posX + x;
        gameObject.posY= gameObject.posY + y;
    })
    renderObjects();

}
 function handleKeyPress()
 {
    if (keyIsDown(LEFT_ARROW)) {
        handlePlayerMovement(character.speedX,0);
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        handlePlayerMovement(-character.speedX,0);
      }
    
      if (keyIsDown(UP_ARROW)) {
        handlePlayerMovement(0,character.speedY);
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        handlePlayerMovement(0,-character.speedY);
      }
 }

  