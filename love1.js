function showQuestion() {
  document.getElementById("mainBox").style.display = "none";
  document.getElementById("question").style.display = "block";
}

function showLove() {
  document.getElementById("question").style.display = "none";
  document.getElementById("loveMsg").style.display = "block";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
