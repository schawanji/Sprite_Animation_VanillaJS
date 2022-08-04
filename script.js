const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//load images

const images = {};
images.player = new Image();
images.player.src = 'sprites/character.png'

const playerWidth = '103.0625'
const playerHeight = '113.125'

// Location of sprite is in the image
let playerFrameX = 3;
let playerFrameY = 3;

// Location of sprite is in the canvas
let playerX = 0;
let playerY =0;

const playerSpeed = 6;

//Draw sprite on canvas from image. Funtion to draw takes in 9 parameters.

function drawSprite()