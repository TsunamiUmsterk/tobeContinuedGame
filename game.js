class Game { constructor () {

}


display() {


}

getState() {
     var gameStateRef = database.ref("gameState");
     gameStateRef.on("value", function(data) { 
          gameState = data.val();
     })
}

updateState(value) {
     database.ref("/").update({
          gameState : value
     });
}

start() {
     player = new Player();
     player.getCount();
     
     form = new Form();
     form.display();
}

play() {
     form.greeting.hide();

     Player.getAllPlayersInfo(); // static functions can be called directly using the class name
     if(allPlayers !== undefined) {
         for(var plr in allPlayers) {
             if(plr === "player" + player.index) {
                 camera.position.x = displayWidth/2;
                 camera.position.y = yPosition;
             } else {
             }                
             
         }

         if(keyDown(UP_ARROW)) {
             player.distance += 50;
             player.update();
         }
         if(player.distance >= 5200) {
             gameState = 2;
             player.rank = playersRank + 1;
             player.update();
             
         }
     }
     drawSprites();
 }

 end() {
     if(endMessageWritten === false) {
     textSize(40);
     fill("white");
     text("Player rank: " + player.rank, displayWidth/2 - 50, -displayHeight*4);
     endMessageWritten = true;
     }
}

}