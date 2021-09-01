var adv1, adv2, adv3;
var gameState = 0;
var database;
var game;
var form;
var player;
var playerCount;
var endMessageWritten = false;
var adventurers = [];
var zombies = [];
var allPlayers;
var zom;
var zomGroup;
var edges;
var finishedPlayers = 0;
var zombie1, zombie2, zombie3, zombie4, zombie5, zombie6, zombie7;

function preload() {

  backgroundImg = loadImage("planViewBG.png");

  deadAv1 = loadImage("deadAdv1.jpg");
  rightAdv1 = loadImage("rightAdv1.jpg");
  leftAdv1 = loadImage("leftAdv1.jpg");
  straightAdv1 = loadImage("StraightAdv1.jpg")

  deadAdv2 = loadImage("deadAdv2.PNG");
  rightAdv2 = loadImage("rightAdv2.PNG");
  leftAdv2 = loadImage("leftAdv2.PNG");
  straightAdv2 = loadImage("StraightAdv2.PNG");

  deadAdv3 = loadImage("deadAdv3.jpg");
  rightAdv3 = loadImage("rightAdv3.jpg");
  leftAdv3 = loadImage("leftAdv3.jpg");
  straightAdv3 = loadImage("StraightAdv3.png");

  zombie1 = loadAnimation("Zombies1a.png","Zombies1b.png","Zombies 1c.png");
  zombie2 = loadAnimation("Zombies2a.png","Zombies2b.png","Zombies 2c.png");
  zombie3 = loadAnimation("Zombies3a.png","Zombies3b.png","Zombies 3c.png");
  zombie4 = loadAnimation("Zombies4a.png","Zombies4b.png","Zombies 4c.png");
  zombie5 = loadAnimation("Zombies5a.png","Zombies5b.png","Zombies 5c.png");
  zombie6 = loadAnimation("Zombies6a.png","Zombies6b.png","Zombies 6c.png");
  zombie7 = loadAnimation("Zombies7a.png","Zombies 7b.png","Zombies 7c.png");

}

function setup() {

  database = firebase.database();

  createCanvas(displayWidth, displayHeight);
  

  game = new Game();
  game.getState();
  
  if(gameState === 0) {
    game.start();
  }
  
}

function draw() {
  background(backgroundImg);  

  player.getFinishedPlayers();

  if(playerCount === 3 && gameState === 0) {
    game.updateState(1);   
}

if(gameState === 1 && finishedPlayers !== 2) {
  game.play();
}

if(gameState === 2) {
  game.end();
} 

if(finishedPlayers === 2 && gameState === 1) {
  game.displayMessage();
}
}