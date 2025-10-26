const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let pacman = { x: 50, y: 50, size: 20, speed: 5 };
let food = { x: 200, y: 200, size: 10 };
let score = 0;

document.addEventListener("keydown", move);

function move(e) {
  switch (e.key) {
    case "ArrowUp": pacman.y -= pacman.speed; break;
    case "ArrowDown": pacman.y += pacman.speed; break;
    case "ArrowLeft": pacman.x -= pacman.speed; break;
    case "ArrowRight": pacman.x += pacman.speed; break;
  }
}

function update() {
  if (Math.abs(pacman.x - food.x) < 15 && Math.abs(pacman.y - food.y) < 15) {
    score++;
    food.x = Math.random() * 380;
    food.y = Math.random() * 380;
  }
}

function draw() {
  ctx.clearRect(0, 0, 400, 400);
  ctx.beginPath();
  ctx.arc(pacman.x, pacman.y, pacman.size, 0.2 * Math.PI, 1.8 * Math.PI);
  ctx.lineTo(pacman.x, pacman.y);
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, food.size, food.size);

  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Skor: " + score, 10, 20);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
