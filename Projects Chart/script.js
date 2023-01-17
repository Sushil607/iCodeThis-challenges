const completed = document.getElementById("completed");
const overdue = document.getElementById("overdue");
const inprogress = document.getElementById("inprogress");

let completedProjects = 0;
let totalCompletedProjects = 167;
let overdueProjects = 0;
let totalOverdueProjects = 24;
let inprogressProjects = 0;
let totalInprogressProjects = 123;

function setData() {
  setInterval(() => {
    if (completedProjects < totalCompletedProjects) {
      completedProjects++;
      completed.innerText = completedProjects;
    }
    if (overdueProjects < totalOverdueProjects) {
      overdueProjects++;
      overdue.innerText = overdueProjects;
    }
    if (inprogressProjects < totalInprogressProjects) {
      inprogressProjects++;
      inprogress.innerText = inprogressProjects;
    }
  }, 30);
}

setData();
