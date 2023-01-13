const planBtns = document.getElementsByClassName("plan-btn");
const pricings = document.getElementById("pricingsContainer");
const message = document.getElementById("messageContainer");

for (let i = 0; i < planBtns.length; i++) {
  let btn = planBtns[i];
  btn.addEventListener("click", () => {
    let text = btn.innerText;
    let plan = "";
    if (text === "Start now") plan = "basic";
    if (text === "Try it") plan = "pro";

    // Hiding pricings container
    pricings.classList.add("hidden");
    // Displaying message container
    message.classList.remove("hidden");
    document.getElementById("plan").innerText = plan;
  });
}

const changePlanBtn = document.getElementById("changePlanBtn");
changePlanBtn.addEventListener("click", () => {
  // Displaying pricings container
  pricings.classList.remove("hidden");
  // Hiding message container
  message.classList.add("hidden");
});
