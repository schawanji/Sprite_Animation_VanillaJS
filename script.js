const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//load images

const images = {};
images.player = new Image();
images.player.src = 'sprites/character.png'

// Array of rows of sprite sheet.

const characterActions = [' up', 'top right', 'right', 'down right', 'down', 'jump'];
const characters = [];

class Character {
    constructor() {
        this.width = 103.0625;
        this.height = 113.125;
        this.frameX = 3;
        this.frameY = 3;
        this.x = 0;
        this.y = 0;
        this.speed = (Math.random() * 1.5) + 3.5;
        this.action = 'right'
    }
    draw() {
        // Call drawSprite() function to draw image on canvas.
        drawSprite(images.player,
            this.width * this.frameX,
            this.height * this.frameY,
            this.width, this.height,
            this.x, this.y, this.width, this.height)
        //animate sprites
        if (this.frameX < 13) this.frameX++;
        else this.frameX = 3;
    }
    update() {
        if (this.action === 'right') {
            if (this.x < canvas.width + this.width) this.x += this.speed;
            else {this.x = 0 - this.width;
                //randomise value of y of Sprite on Canvas
            this.y = Math.random()*(canvas.height-this.height)} 
        }
    }
}

characters.push(new Character())

/*const playerWidth = 103.0625
const playerHeight = 113.125

// Location of sprite is in the image
let playerFrameX = 3;
let playerFrameY = 3;

// Location of sprite is in the canvas
let playerX = 0;
let playerY = 0;
const playerSpeed = 6;*/

//Draw sprite on canvas from image. Funtion to draw takes in 9 parameters.

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    /*ctx has all methods of the 2d API canvas methods.
    All parameters starting with s(source) refer to the position and 
    dimensions of image on the sprite image and d(destination) to the position and dimensions on the canvas.*/
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)

}

// Animation loop this function will run over and over for every frame of animation . 
function animate() {
    // Cleans the whole canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    /*// Call drawSprite() function to draw image on canvas.
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight)
    //animate sprites
    if (playerFrameX < 13) playerFrameX++;
    else playerFrameX = 3;
    // move player
    if (playerX < canvas.width + playerWidth) playerX += playerSpeed;
    else playerX = 0 - playerWidth*/

    characters[0].draw();
    characters[0].update();
}

// Animate at intervals
window.onload = setInterval(animate, 1000 / 30);

// After reloading image stretch to resize we:
window.addEventListener('resize', function () {
    canvas.height = Window.innerHeight;
    canvas.width = window.innerWidth;
})