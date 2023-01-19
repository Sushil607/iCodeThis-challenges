const btn1 = document.getElementById("image1");
const tooltip1 = document.getElementById("tooltip1");

btn1.addEventListener("click", () => {
  tooltip1.classList.toggle("opacity-0");
});

const btn2 = document.getElementById("image2");
const tooltip2 = document.getElementById("tooltip2");

btn2.addEventListener("click", () => {
  tooltip2.classList.toggle("opacity-0");
});
