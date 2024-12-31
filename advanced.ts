const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
canvas.width = 800;
canvas.height = 600;

interface Bird {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
}

let bird: Bird = { x: 50, y: 300, width: 50, height: 50, color: 'red' };
let gameOver = false;

function drawBird() {
    ctx.fillStyle = bird.color;
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();

    if (bird.x > canvas.width) {
        gameOver = true;
    }

    if (gameOver) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over! Restarting...', 200, 300);
        setTimeout(() => {
            bird.x = 50;
            gameOver = false;
        }, 2000);
    } else {
        bird.x += 5;
    }

    requestAnimationFrame(update);
}

update();
