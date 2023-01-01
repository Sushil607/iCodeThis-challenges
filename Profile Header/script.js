var isFollowing = false;
let followBtn = document.getElementById("followBtn");

followBtn.addEventListener("click", () => {
  isFollowing = !isFollowing;
  if (isFollowing === true) {
    followBtn.innerText = "Following";
  } else {
    followBtn.innerText = "Follow";
  }
});
