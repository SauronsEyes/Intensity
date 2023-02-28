//Helper functions---//

//generates random names
function generateRandomName(){
  const prefix = randomFromArray([
    "FUNNY LOOKING",
    "AWESOME",
    "INSANE",
    "SUPER",
    "QUICK",
    "HAPPY","SOBER","ANGRY"]);
  const suffix = randomFromArray([
      "CAT","DOG","CHEETAH","FOX","RABBIT","SPARROW","GIRAFFE","CHICKEN"]);
  
  return `${prefix} ${suffix}`;
  
}
//returns a random value from an array
function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//returns a player's starting position
function playerStartingPosition(){
  return {x:randomFromArray([1,2,3,4,5,6,7,8,9,10]), y:randomFromArray([1,2,3,4,5,6,7,8,9,10])};
}

//parses response from the firebase server
//@param snap : value of the snapshot of the database = snapshot.val()
//@returns the player object inside the user id
function parseSnapshot(snap){
  return snap[Object.keys(player)[1]];
}

//Server functions---//
let onlinePlayer = {info:{id:""}};
let onlinePlayers = [];


//connects to the firebase server appends the player to the realtime database
function connectPlayer(){
  firebase.auth().onAuthStateChanged((user)=>{
    console.log("Connected to firebase");
    if (user){
        //logged in
        let PLAYER_ID=user.uid;
        let randomName = generateRandomName(); 
        onlinePlayer.id = PLAYER_ID;
        onlinePlayer.name = randomName;
        let playerRef=firebase.database().ref(`players/${PLAYER_ID}`); //reference to our database
        playerRef.set( //creates new instance in the db when connected
          {
            id:PLAYER_ID,
            name:randomName,
            direction:"right",
            x:playerStartingPosition().x,
            y:playerStartingPosition().y,
            ammo:0
          }
        );
        playerRef.onDisconnect().remove();//removes player from the server when disconnected
         // begin the game
    } else {
      //logged out
    }
    
})

firebase.auth().signInAnonymously().catch((error)=>{ //connects the player to firebase
  var errorCode = error.errorCode;
  var errorMessage = error.errorMessage;

  console.log(error(errorCode,errorMessage));
});



}

//returns a pointer to players in firebase database, used to monitor changes in the database
function liveServer(){
  const allPlayersRef = firebase.database().ref(`players`);
  //   const ammo = firebase.database().ref(`ammo`);
  return allPlayersRef; // this points to the database in the firebase server
}

function livePlayersInfo(){
    liveServer().on("value", (snapshot)=>{ //any of the the value in players changes then this function will be called
      //for when other characters move
      player = snapshot.val() || {}; // this will give a player's object  {id:playerID, name,direction, bla bla whose x or y is changed
      
      Object.keys(player).forEach((key)=>{
          console.log(player[key].name, player[key].x, player[key].y);
      });
      // console.log(player[Object.keys(player)[0]].x, player[Object.keys(player)[0]].y);
    })
  }

function livePlayersConnection(){
    liveServer().on("child_added", (snapshot)=>{ //fires whenever a new node is added to the players tree
      // this function will run as many times as there are characrters on the screen
      // display all the players
      //this function will run a loop that will run as many times as there are players in the database
      
        const addedPlayer = snapshot.val(); // this will give a player's object  {id:playerID, name,direction, bla bla
        onlinePlayers.push(addedPlayer);
        
        if (addedPlayer.id == getPlayerId()){ //if the player id is you joining the screeen
           // display your character at a position
           onlinePlayer.info = addedPlayer;
           console.log("Player joined");
        } else {
          console.log(`${addedPlayer.name} joined`);
        }
    })

    liveServer().on("child_removed", (snapshot)=>{
      const removedKey = snapshot.val().id;
      let removed_player = "";
      for (let i =0;i<onlinePlayers.length;i++){
        
         if (onlinePlayers[i].id==removedKey){
            removed_player = onlinePlayers.splice(i,1);
         }
         
      }
      console.log(`${removed_player[0].name} left`);
      // remove a player from the database
      // gameContainer.removeChild(playerElements[removedKey]);
      // delete playerElements[removedKey];
     })
  }

function updatePlayer(playerObject){
 let playerRef=firebase.database().ref(`players/${getPlayerId()}`);
 playerRef.set(playerObject);
}

function getPlayerId(){
  return onlinePlayer.id;
}