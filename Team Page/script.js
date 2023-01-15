const addMoreBtn = document.getElementsByClassName("add-more-btn")[0];
const team = document.getElementsByClassName("team")[0];
const overlay = document.getElementsByClassName("overlay-container")[0];
addMoreBtn.addEventListener("click", () => {
  showOverlay();
});

function showOverlay() {
  // show overlay
  overlay.style.display = "flex";
  // blur teams
  team.style.opacity = "0.4";
}

const closeBtn = document.getElementsByClassName("close-btn")[0];
closeBtn.addEventListener("click", () => {
  hideOverlay();
});

function hideOverlay() {
  // hide overlay
  overlay.style.display = "none";
  // blur teams
  team.style.opacity = "1";
}

const addCardDiv = document.getElementsByClassName("add-card")[0];
const form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Getting info
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const profession = document.getElementById("profession").value;
  const previous = document.getElementById("previous").value;
  //   console.log({ name, image, profession, previous });
  // Prepare a new card
  const newCard = document.createElement("div");
  newCard.innerHTML = `
        <div class="team-member-card">
        <img
          class="member-profile"
          src="${image}"
          alt="team member"
        />
        <div class="member-info">
          <div class="name">${name}</div>
          <div class="profession">${profession}</div>
          <div class="previous-employment">
            <div class="previous">Previously</div>
            <img
              class="company-logo"
              src="${previous}"
              alt="logo"
            />
          </div>
        </div>
      </div>
  `;

  // Clearing out the form fields
  form.reset();
  hideOverlay();

  // Add the newly prepared card to DOM
  team.insertBefore(newCard, addCardDiv);
});
