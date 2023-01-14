const filledBar = document.getElementsByClassName("filled-bar")[0];
const tooltip = document.getElementsByClassName("tooltip")[0];
const progressPercent = document.getElementById("progressPercent");
const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");

let startingPt = 0;
let endPt = 100;

function downloadFile() {
  if (startingPt < endPt) {
    downloadBtn.disabled = true;
    setTimeout(() => {
      startingPt += 10;
      console.log(startingPt);
      filledBar.style.width = `${startingPt}%`;
      tooltip.style.marginLeft = `${startingPt}%`;
      progressPercent.innerText = `${startingPt}`;
      downloadFile();
    }, 40);
  } else {
    console.log("Download completed");
    resetBtn.disabled = false;
    downloadBtn.disabled = false;
  }
}

downloadBtn.addEventListener("click", () => {
  downloadFile();
});

function reset() {
  startingPt = 0;
  filledBar.style.width = `0%`;
  tooltip.style.marginLeft = `0%`;
  progressPercent.innerText = `0`;
}

resetBtn.addEventListener("click", () => {
  reset();
});
