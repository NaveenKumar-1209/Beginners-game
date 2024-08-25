// Get the canvas element and set up the context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let person = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    color: "red",
    width: 100,
    height: 30,
}

function drawPerson() {
    ctx.beginPath();
    ctx.rect(person.x, person.y, person.width, person.height);
    ctx.fillStyle = person.color;
    ctx.fill();
    ctx.closePath();
}

// Ball properties
let ballRadius = 20;
let x = canvas.width / 2;
let y = canvas.height - ballRadius - person.height;
let dx = 2; // Horizontal speed
let dy = -2; // Vertical speed

// Draw the ball on the canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// Update the ball's position and check for collisions
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the ball
    drawBall();
    drawPerson();

    // Bounce the ball off the walls
    if (x + dx > (canvas.width - ballRadius) || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > (canvas.height - ballRadius - person.height) || y + dy < ballRadius) {
        if (x > person.x && x < person.x + person.width) {
            dy = -dy;
        } else if (y + dy < ballRadius) {
            dy = -dy;
        } else {
            alert('Game Over');
            document.location.reload();
        }
    }


    // Move the ball
    x += dx;
    y += dy;

    // Repeat the animation
    requestAnimationFrame(update);
}


window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowRight':
            person.x += 10;
            break;
        case 'ArrowLeft':
            person.x -= 10;
            break;
    }
});

// Start the animation
update();
