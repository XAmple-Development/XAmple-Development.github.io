
// Particle background
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

// GitHub repos
fetch("https://api.github.com/users/X-AmpleDevelopment/repos")
.then(res => res.json())
.then(data => {
  document.getElementById("repos").innerHTML =
    data.slice(0,6).map(r => `
      <div class="card">
        <strong>${r.name}</strong><br>
        <small>${r.description || "No description"}</small>
      </div>
    `).join("");
});
