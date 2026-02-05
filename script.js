const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const bgMusic = document.getElementById("bgMusic");

// NO BUTTON DODGE EFFECT
noBtn.addEventListener("mouseenter", () => {
  const containerRect = noBtn.parentElement.getBoundingClientRect();
  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  // Random small movement (dodge)
  const moveX = Math.random() * maxX * 0.5; 
  const moveY = Math.random() * maxY * 0.5;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Reset position if mouse leaves
noBtn.addEventListener("mouseleave", () => {
  noBtn.style.transform = `translate(0,0)`;
});

// YES BUTTON CLICK
yesBtn.addEventListener("click", () => {
  result.textContent = "Yay! 💖 Priyanshu is overjoyed!";
  
  // Play soft music
  bgMusic.play();

  // Generate 150 hearts
  for (let i = 0; i < 150; i++) {
    createHeart();
  }
});

// Function to create a single heart
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * window.innerWidth + "px";
  const size = 10 + Math.random() * 20;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
