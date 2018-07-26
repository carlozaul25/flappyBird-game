var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// variables

var gap = 75;
var constant;
var bX = 10;
var bY = 150;

var gravity = 1.5;
var score = 0;

//Audio files

var fly = new Audio;
var score = new Audio;

fly.src = "sounds/fly.mp3"
score.src = "sounds/score.mp3"

