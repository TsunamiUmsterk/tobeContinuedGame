class Form { constructor() {
     this.playButton = createButton('Start game');
     this.input = createInput('').attribute('placeholder', 'Enter your name');
     this.playButton.position(displayWidth/2 + 100, displayHeight/2 + 200);
     this.input.position(displayWidth/2, displayHeight/2 + 100);

     this.greeting = createElement('h1');
     this.greeting.position(displayWidth/2, displayHeight/2);

     this.resetButton = createButton('Reset');
     this.resetButton.position(displayWidth*0.8, displayHeight*0.8)
}

display() {
     this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          player.name = this.input.value();
          this.greeting.html('Hello ' + player.name)


          playerCount += 1;
          player.updateCount(playerCount);
          player.index = playerCount;
      }) 

      this.resetButton.mousePressed( function () {
           game.updateState(0);
           player.updateCount(0);
           player.update();

           database.ref("players").remove();
      })

}



}