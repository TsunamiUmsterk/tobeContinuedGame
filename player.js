class Player { constructor() {
     this.name = '',
     this.index = 0;
     this.x = displayWidth/2;
     this.y = displayHeight/2;
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

update() {
     var playerRef = database.ref("players/player" + this.index);
          playerRef.set({
               name : this.name,
               x : this.x,
               y : this.y,
          })
}

static getAllPlayersInfo() { // STATIC FUNCTION
     var playersData = database.ref("players");
     playersData.on("value", function(data) {
          allPlayers = data.val();
     });
}
}

