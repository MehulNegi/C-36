var canvas, backgroundImg, gameState = 0;
var playerCount, database, form, player, game;

function setup(){
    canvas = createCanvas(400, 400);
    database = firebase.database();
    game = new Game();
    game.gameState();
    game.start();
    
}

function draw(){
    background("white");
    drawSprites();
}   
