//Raw data
const advisor = [
  {
    name: "Md Rabiul Islam Sarker",
    designation: "Professor",
    dept: "Mechanical",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/advisor/robiul_islam.png",
  },
  {
    name: "Md. Wahedul Islam",
    designation: "Associate Professor",
    dept: "Mechanical",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/advisor/wahedul.jpg",
  },
  {
    name: "Miftahul Mobin Chowdhury Shabdik",
    designation: "Lecturer",
    dept: "Mechanical",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/advisor/shabdik.jpg",
  },
  {
    name: "Mim Mashrur Ahmed",
    designation: "Lecturer",
    dept: "Mechanical",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/advisor/masrur.jpg",
  },
];

const team = [
  {
    name: "Zubayer Rahman Anik",
    designation: "Team Captain",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/team/team-23/Captain.png",
  },
  {
    name: "Md Rafi Khan",
    designation: "Team Manager",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/team/team-23/manager.png",
  },
  {
    name: "Md Fahim Shahriar",
    designation: "Legislative Team Lead",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/team/team-23/legislativeTeamLead.png",
  },
  {
    name: "Md Masum Al Mahmud",
    designation: "Business Team Lead",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/team/team-23/businessTeamLead.png",
  },
  {
    name: "Tammem Hasan",
    designation: "Technical Team Lead",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/team/team-23/technicalTeamLead.png",
  },
  {
    name: "Raian Hossain",
    designation: "Design Team Lead",
    email: "",
    facebook: "",
    linkedin: "",
    website: "",
    img: "./assets/img/team/team-23/designTeamLead.png",
  },
];

const advisorHTML = advisor
  .map((item) => {
    return `
        <div class="col-md-6 col-lg-6 item wow fadeIn">
            <img class="rounded-circle" src="${
              item.img
            }" height="150px" width="150px">
            <h3 class="name">${item.name}</h3>
            <p class="description">${item.designation}
                <br>Dept. of ${item.dept} Engineering
                <br>Rajshahi University of Engineering & Technology
            </p>
            <div class="social">
                ${
                  item.email
                    ? `<a href="mailto:${item.email}"><i class="fa fa-envelope"></i></a>`
                    : ""
                }
                ${
                  item.facebook
                    ? `<a href="${item.facebook}" target="_blank"><i class="fa fa-facebook-official"></i></a>`
                    : ""
                }
                ${
                  item.linkedin
                    ? `<a href="${item.linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a>`
                    : ""
                }
            </div>
        </div>
    `;
  })
  .join("");

const teamHTML = team
  .map((item) => {
    return `
        <div class="col-md-6 col-lg-4 item wow fadeIn">
                <img class="rounded-circle" src="${item.img}" alt="${
      item.designation
    }">
                <h3 class="name">${item.name}</h3>
                <p class="description">${item.designation}</p>
                <div class="social">
                        ${
                          item.email
                            ? `<a href="mailto:${item.email}"><i class="fa fa-envelope"></i></a>`
                            : ""
                        }
                        ${
                          item.facebook
                            ? `<a href="${item.facebook}" target="_blank"><i class="fa fa-facebook-official"></i></a>`
                            : ""
                        }
                        ${
                          item.linkedin
                            ? `<a href="${item.linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a>`
                            : ""
                        }
                        ${
                          item.website
                            ? `<a href="${item.website}" target="_blank"><i class="fa fa-website"></i></a>`
                            : ""
                        }
                </div>
        </div>
        `;
  })
  .join("");

//push to html
document.getElementById("team_advisor").innerHTML = advisorHTML;
document.getElementById("team_member").innerHTML = teamHTML;
