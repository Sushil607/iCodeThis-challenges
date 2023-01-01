const container = document.getElementsByClassName("container")[0];
const dots = 200;

for (i = 0; i < dots; i++) {
  let dot = document.createElement("div");
  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 500);

  if (i % 2 === 0) {
    dot.style.cssText = `width:4px;height:4px;border-radius:50%;background-color:white;position:absolute;z-index:-1;top:${x}px;right:${y}px`;
  } else {
    dot.style.cssText = `width:4px;height:4px;border-radius:50%;background-color:white;position:absolute;z-index:-1;bottom:${x}px;left:${y}px`;
  }
  container.appendChild(dot);
}
