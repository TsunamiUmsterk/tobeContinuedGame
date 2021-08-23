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

  if(playerCount === 3 && gameState === 0) {
    game.updateState(1);   
}

if(gameState === 1) {
  game.play();
}

if(gameState === 2) {
  game.end();
} 
}