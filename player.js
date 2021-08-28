class Player { constructor() {
     this.name = '',
     this.index = 0;
     this.x = displayWidth/2;
     this.y = displayHeight/2;
     this.status = "active";
}

getCount() {
     var playerCountRef = database.ref("playerCount");
     playerCountRef.on("value", function(data) { 
           playerCount = data.val();
     })
}

updateCount(value) {
     database.ref("/").update({
          playerCount : value
     });
}

getFinishedPlayers() {
     var finishedPlayerRef = database.ref("finishedPlayers");
     finishedPlayerRef.on("value", function(data) { 
           finishedPlayers = data.val();
     })
}

updateFinishedPlayers(value) {
     database.ref("/").update({
          finishedPlayers : value
     });
}

update() {
     var playerRef = database.ref("players/player" + this.index);
          playerRef.set({
               name : this.name,
               x : this.x,
               y : this.y,
               status : this.status, 
          })
}

static getAllPlayersInfo() { // STATIC FUNCTION
     var playersData = database.ref("players");
     playersData.on("value", function(data) {
          allPlayers = data.val();
     });
}
}

