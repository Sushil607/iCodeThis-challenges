/**
 *  ! Toggling Buttons
 * **/
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const wgraph = document.getElementById("myWeeklyChart");
const mgraph = document.getElementById("myMonthlyChart");
const ygraph = document.getElementById("myYearlyChart");

weeklyBtn.addEventListener("click", () => {
  weeklyBtn.classList.add("active-btn");
  monthlyBtn.classList.remove("active-btn");
  yearlyBtn.classList.remove("active-btn");

  wgraph.style.cssText = "display:block";
  mgraph.style.cssText = "display:none";
  ygraph.style.cssText = "display:none";
});

monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active-btn");
  weeklyBtn.classList.remove("active-btn");
  yearlyBtn.classList.remove("active-btn");

  mgraph.style.cssText = "display:block";
  wgraph.style.cssText = "display:none";
  ygraph.style.cssText = "display:none";
});

yearlyBtn.addEventListener("click", () => {
  yearlyBtn.classList.add("active-btn");
  monthlyBtn.classList.remove("active-btn");
  weeklyBtn.classList.remove("active-btn");

  ygraph.style.cssText = "display:block";
  wgraph.style.cssText = "display:none";
  mgraph.style.cssText = "display:none";
});

/**
 *  ! Weekly Chart
 * **/

const ctx = document.getElementById("myWeeklyChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      // income
      {
        label: "income",
        backgroundColor: "#7373F9",
        borderRadius: 500,
        borderSkipped: false,
        barThickness: 12,
        data: [3900, 2400, 1600, 3400, 2200, 1400, 700],
        borderWidth: 1,
      },
      // expenses
      {
        label: "expenses",
        backgroundColor: "#F370B8",
        borderRadius: 500,
        borderSkipped: false,
        barThickness: 6,
        data: [1900, 900, 300, 1800, 1300, 800, 400],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 4000,
        ticks: {
          // forces step size to be 1000 units
          stepSize: 1000,
          callback: function (value, index) {
            if (this.getLabelForValue(index) == 1) return "1K";
            if (this.getLabelForValue(index) == 2) return "2K";
            if (this.getLabelForValue(index) == 3) return "3K";
            if (this.getLabelForValue(index) == 4) return "4K";
          },
        },
        grid: {
          drawBorder: false, // <-- this removes y-axis line
          lineWidth: 0.5,
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          usePointStyle: true,
          pointStyle: "circle",
          color: "##1F2352",
        },
      },
    },
  },
});

/**
 *  ! Monthly Chart
 * **/

const ctx1 = document.getElementById("myMonthlyChart");

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      // income
      {
        label: "income",
        backgroundColor: "#7373F9",
        borderRadius: 500,
        borderSkipped: false,
        barThickness: 12,
        data: [
          39000, 24000, 17000, 39000, 22000, 14300, 23700, 23000, 12000, 23000,
          14030, 34000,
        ],
        borderWidth: 1,
      },
      // expenses
      {
        label: "expenses",
        backgroundColor: "#F370B8",
        borderRadius: 500,
        borderSkipped: false,
        barThickness: 6,
        data: [
          19000, 12000, 17000, 13400, 11000, 11800, 12100, 12400, 12200, 12300,
          11200, 3400,
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 40000,
        ticks: {
          // forces step size to be 1000 units
          stepSize: 10000,
          callback: function (value, index) {
            if (this.getLabelForValue(index) == 1) return "10K";
            if (this.getLabelForValue(index) == 2) return "20K";
            if (this.getLabelForValue(index) == 3) return "30K";
            if (this.getLabelForValue(index) == 4) return "40K";
          },
        },
        grid: {
          drawBorder: false, // <-- this removes y-axis line
          lineWidth: 0.5,
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          usePointStyle: true,
          pointStyle: "circle",
          color: "##1F2352",
        },
      },
    },
  },
});

/**
 *  ! Weekly Chart
 * **/

const ctx2 = document.getElementById("myYearlyChart");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["19-20", "20-21", "21-22", "22-23"],
    datasets: [
      // income
      {
        label: "income",
        backgroundColor: "#7373F9",
        borderRadius: 500,
        borderSkipped: false,
        barThickness: 12,
        data: [149000, 246000, 365000, 392000],
        borderWidth: 1,
      },
      // expenses
      {
        label: "expenses",
        backgroundColor: "#F370B8",
        borderRadius: 500,
        borderSkipped: false,
        barThickness: 6,
        data: [199000, 123000, 184000, 123000],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 400000,
        ticks: {
          // forces step size to be 1000 units
          stepSize: 100000,
          callback: function (value, index) {
            if (this.getLabelForValue(index) == 1) return "100K";
            if (this.getLabelForValue(index) == 2) return "200K";
            if (this.getLabelForValue(index) == 3) return "300K";
            if (this.getLabelForValue(index) == 4) return "400K";
          },
        },
        grid: {
          drawBorder: false, // <-- this removes y-axis line
          lineWidth: 0.5,
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          usePointStyle: true,
          pointStyle: "circle",
          color: "##1F2352",
        },
      },
    },
  },
});
