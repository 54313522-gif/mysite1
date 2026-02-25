const images = ["sh.jpg", "sh7.jpg", "sh2.jpg","sh6.jpg","sh3.jpg","sh5.jpg","sh6.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src =images[index];
}, 3000);
function goNext() {
  window.location.href = "last.html";
}
