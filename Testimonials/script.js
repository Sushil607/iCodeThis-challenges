const testimonial = document.getElementsByClassName("testimonial");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentTestimonial = 1;

nextBtn.addEventListener("click", () => {
  if (currentTestimonial == 3) {
    currentTestimonial = 0;
  }
  let x = currentTestimonial;
  let y = currentTestimonial + 1;
  currentTestimonial++;

  testimonial[x].style.cssText = "display:block";
  testimonial[y].style.cssText = "display:block";
});
