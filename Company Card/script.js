const companies = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png",
    name: "Google",
    website: "http://www.google.com",
    intro:
      "Google LLC is an American multinational technology company that specializes in Internet-related services and products. These incluse online adverising technologies, search, cloud computing, software, and hardware.",
    employees: 72053,
    openings: 1278,
    reviews: 2278,
  },
  {
    id: 2,
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    name: "Apple",
    website: "http://www.apple.com",
    intro:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States.",
    employees: 40753,
    openings: 778,
    reviews: 1229,
  },
  {
    id: 3,
    logo: "https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg",
    name: "Facebook",
    website: "http://www.facebook.com",
    intro:
      "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.",
    employees: 92033,
    openings: 908,
    reviews: 5228,
  },
  {
    id: 4,
    logo: "https://www.citypng.com/public/uploads/preview/-11594687246vzsjesy7bd.png",
    name: "Netflix",
    website: "http://www.netflix.com",
    intro:
      "Netflix, Inc. is an American subscription video on-demand over-the-top streaming service and production company based in Los Gatos, California.",
    employees: 22042,
    openings: 346,
    reviews: 3233,
  },
  {
    id: 5,
    logo: "https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg",
    name: "Amazon",
    website: "http://www.amazon.com",
    intro:
      "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.",
    employees: 142089,
    openings: 1078,
    reviews: 3091,
  },
];

const backwordBtn = document.getElementsByClassName("fa-chevron-left")[0];
const forwordBtn = document.getElementsByClassName("fa-chevron-right")[0];

let currentCompany = 0;

backwordBtn.addEventListener("click", () => {
  if (currentCompany == 0) {
    return;
  } else {
    currentCompany--;
    showCompany(currentCompany);
  }
});

forwordBtn.addEventListener("click", () => {
  if (currentCompany === companies.length - 1) {
    return;
  } else {
    currentCompany++;
    showCompany(currentCompany);
  }
});

function showCompany(currentCompany) {
  if (currentCompany == 0) {
    backwordBtn.style.color = "#1B1E38";
    forwordBtn.style.color = "#C3C4CD";
  } else if (currentCompany === companies.length - 1) {
    backwordBtn.style.color = "#C3C4CD";
    forwordBtn.style.color = "#1B1E38";
  } else {
    backwordBtn.style.color = "#C3C4CD";
    forwordBtn.style.color = "#C3C4CD";
  }
  let company = companies[currentCompany];
  document.getElementById("profile-image").setAttribute("src", company.logo);
  document.getElementById("id").innerText = company.id;
  document.getElementById("name").innerText = company.name;
  document.getElementById("reviews").innerText = company.reviews;
  document.getElementById("website-link").innerText = company.website;
  document.getElementById("intro").innerText = company.intro;
  document.getElementById("total-employees").innerText = company.employees;
  document.getElementById("total-openings").innerText = company.openings;
}
