/** Width and height of application window (canvas) in pixels */
const APPLICATION_WIDTH = 400;
const APPLICATION_HEIGHT = 600;

/** Dimensions of game board (usually the same) */
const WIDTH = APPLICATION_WIDTH;
const HEIGHT = APPLICATION_HEIGHT;

/** Dimensions of the paddle */
const PADDLE_WIDTH = 60;
const PADDLE_HEIGHT = 10;

/** Offset of the paddle up from the bottom */
const PADDLE_Y_OFFSET = 30;

/** Number of bricks per row */
const NBRICKS_PER_ROW = 10;

/** Number of rows of bricks */
const NBRICK_ROWS = 10;

/** Separation between bricks */
const BRICK_SEP = 4;

/** Width of a brick */
const BRICK_WIDTH = (WIDTH - (NBRICKS_PER_ROW - 1) * BRICK_SEP) / NBRICKS_PER_ROW;

/** Height of a brick */
const BRICK_HEIGHT = 8;

/** Radius of the ball in pixels */
const BALL_RADIUS = 10;

/** Offset of the top brick row from the top */
const BRICK_Y_OFFSET = 70;

/** Number of turns */
const NTURNS = 3;


/* You fill this in, add methods */
class Breakout {
    constructor(context) {
        this.context = context;
        this.init();
    }

    /** Sets up the Breakout program. */
    init() {

    }

    /** Runs the Breakout program. */
    run() {

    }
}

/* ---------------------------- GAME LOGIC FINISHES HERE ---------------------------- */

const canvas = document.getElementById("game");
let style = canvas.style;
style.marginLeft = "auto";
style.marginRight = "auto";
let parentStyle = canvas.parentElement.style;
parentStyle.textAlign = "center";
parentStyle.width = "100%";

/* 
    maybe do stuff here ...
*/

const context = canvas.getContext('2d');
context.canvas.width = APPLICATION_WIDTH;
context.canvas.height = APPLICATION_HEIGHT;


// create game here
let breakout = new Breakout(context);

//bricks
for (let j = 0; j < NBRICK_ROWS; j++) {
    for (let i = 0; i < NBRICKS_PER_ROW; i++) {
        context.beginPath();
        let startX = (APPLICATION_WIDTH - (NBRICKS_PER_ROW * BRICK_WIDTH)) / 2;;
        let startY = BRICK_Y_OFFSET;
        context.rect(startX + i * BRICK_WIDTH, startY + (j * (BRICK_HEIGHT + BRICK_SEP)), BRICK_WIDTH, BRICK_HEIGHT);
        if (j < 2) {
            context.fillStyle = "red";
        } else if (j >= 2 && j < 4) {
            context.fillStyle = "orange";
        } else if (j >= 4 && j < 6) {
            context.fillStyle = "yellow";
        } else if (j >= 6 && j < 8) {
            context.fillStyle = "green";
        } else {
            context.fillStyle = "cyan";
        }
        context.fill();
    }
}

//paddle
context.beginPath();
context.rect((APPLICATION_WIDTH - PADDLE_WIDTH) / 2, APPLICATION_HEIGHT - PADDLE_Y_OFFSET, PADDLE_WIDTH, PADDLE_HEIGHT);
context.fillStyle = "black";
context.fill();

//ball
context.beginPath();
context.arc(APPLICATION_WIDTH / 2, APPLICATION_HEIGHT / 2, BALL_RADIUS, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();

/* 
   call breakout.run() to start playing 
   don't start until user interacts with canvas
   (you can add start button / wait until mouse is clicked or left/right arrows are pressed) 
*/