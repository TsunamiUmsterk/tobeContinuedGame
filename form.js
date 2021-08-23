class Form { constructor() {
     this.playButton = createButton('Start game');
     this.playButton.position(displayWidth/2 + 100, displayHeight/2 + 200);
     this.playButton.style("background-color",'green');
     this.playButton.style("font-size",'30px');
     this.playButton.size(180, 40);

     this.input = createInput('').attribute('placeholder', 'Enter your name');
     this.input.position(displayWidth/2 - 110, displayHeight/2 - 100);
     this.input.style("font-size",'30px');
     this.input.size(220, 40);

     this.greeting1 = createElement('h1');
     this.greeting1.position(displayWidth/2 - 300, displayHeight/2 - 170);
     this.greeting1.style("font-size",'50px');
     this.greeting1.size(750, 40);

     this.resetButton = createButton('Reset');
     this.resetButton.position(displayWidth*0.8, displayHeight*0.8);
     this.resetButton.style("background-color",'orange');
     this.resetButton.style("font-size",'20px');
     this.resetButton.size(100, 30);
}

display() {
     this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          player.name = this.input.value();
          this.greeting1.html('Welcome to my game, ' + player.name);


          playerCount += 1;
          player.updateCount(playerCount)
          player.index = playerCount;
          player.update();
      }) 

      this.resetButton.mousePressed( function () {
           game.updateState(0);
           player.updateCount(0);

           database.ref("players").remove();
      })

}



}