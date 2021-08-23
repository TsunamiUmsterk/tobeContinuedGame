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

    adv1 = createSprite(200, 230, 20, 20);
  adv2 = createSprite(200, 260, 20, 20);
  adv3 = createSprite(200, 290, 20, 20);

  adv1.addImage("StraightAdv", straightAdv1);
  adv2.addImage("StraightAdv", straightAdv2);
  adv3.addImage("StraightAdv", straightAdv3);

  adv1.addImage("rightAdv", rightAdv1);
  adv2.addImage("rightAdv", rightAdv2);
  adv3.addImage("rightAdv", rightAdv3);

  adv1.addImage("leftAdv", leftAdv1);
  adv2.addImage("leftAdv", leftAdv2);
  adv3.addImage("leftAdv", leftAdv3);

  adventurers = [adv1, adv2, adv3];

  zomGroup = new Group();
  

for(var i=1; i <= 20; i++) {
    zom = createSprite(Math.round(random(1, displayWidth/2 - 200)), Math.round(random(1, displayHeight)), 20, 20);

    var value = Math.round(random(1, 7));

    if(value === 1) {
    //    zom.addImage();
    } else if (value === 2) {
    //    zom.addImage();
    } else if (value === 3) {
    //    zom.addImage();
    } else if(value === 4) {
    //    zom.addImage();
    } else if (value === 5) {
    //    zom.addImage();
    } else if (value === 6) {

    } else if (value === 7) {
        
    }
    zombies.push(zom);
    zomGroup.add(zom);

    edges = createEdgeSprites();
}
 

}

play() {
     form.greeting1.hide();

     Player.getAllPlayersInfo(); // static functions can be called directly using the class name
     if(allPlayers !== undefined) {
         var index = 0;
         var y = -100
         for(var plr in allPlayers) {
                adventurers[index].x = allPlayers[plr].x;
                adventurers[index].y = allPlayers[plr].y + y;
            y += 100;
            index++;
             }                
             
         }

         zomGroup.collide(edges);
         adv1.collide(edges);
         adv2.collide(edges);
         adv3.collide(edges);
         this.movePlayer();
         this.moveZombies();
         this.zomTouch();
        
         drawSprites();
     }


movePlayer() {
    if(keyDown(UP_ARROW)) {
        player.y -= 3;
        adventurers[player.index-1].changeImage('StraightAdv');
    }
    if(keyDown(DOWN_ARROW)) {
        player.y += 3;
        adventurers[player.index-1].changeImage('StraightAdv');
    }
    if(keyDown(LEFT_ARROW)) {
        player.x -= 3;
        adventurers[player.index-1].changeImage('leftAdv');
    }
    if(keyDown(RIGHT_ARROW)) {
        player.x += 3;
        adventurers[player.index-1].changeImage('rightAdv');
    }
    player.update();
}

moveZombies() {
    for(var i=0; i < zombies.length; i++) {
        if(zombies[i].x < player.x) {
            zombies[i].x += 2;
        } if(zombies[i].x > player.x) {
            zombies[i].x += -2;
        }

        if(zombies[i].y < player.y) {
            zombies[i].y += 2;
        } if(zombies[i].y >  player.y) {
            zombies[i].y += -2;
        }
    }
}

zomTouch() {
    if(adventurers[player.index-1].isTouching(zomGroup)) {
        gameState = 2;
    }
}

end() {
    textSize(50);
    fill("red");
    text("You have been caught by the zombies☹️", displayWidth/2 - 300, displayHeight/2);
}
}