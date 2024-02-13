//Raw data
const advisor = [
    {
        name: "",
        designation: "",
        dept: "",
        email: "",
        facebook: "",
        linkedin: "",
        website: "",
        img: "",
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
        img: "../img/team/team-23/Captain.png",
    },
    {
        name: "Newaz Arefin Rafid",
        designation: "Team Co-Captain",
        email: "",
        facebook: "",
        linkedin: "",
        website: "",
        img: "../img/team/team-23/Co-captain.png",
    },
    {
        name: "Md Rafi Khan",
        designation: "Team Manager",
        email: "",
        facebook: "",
        linkedin: "",
        website: "",
        img: "../img/team/team-23/manager.png",
    },
]

//html code ready
const advisorHTML = advisor.map((item) => {
    return`
        <div class="col-md-6 col-lg-6 item wow fadeIn">
            <img class="rounded-circle" src="${item.img}">
            <h3 class="name">${item.name}</h3>
            <p class="description">${item.designation}
                <br>Dept. of ${item.dept} Engineering
                <br>Rajshahi University of Engineering & Technology
            </p>
            <div class="social">
                <a href="${item.email}">
                    <i class="fa fa-envelope"></i>
                </a>
                <a href="${item.facebook}" target="_blank">
                    <i class="fa fa-facebook-official"></i>
                </a>
                <a href="${item.linkedin}" target="_blank">
                    <i class="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
    `;
}).join("")

const teamHTML = team.map((item) => {
    return`
    <div class="col-md-6 col-lg-4 item wow fadeIn">
        <img class="rounded-circle" src="${item.img}" alt="${item.designation}">
        <h3 class="name">${item.name}</h3>
        <p class="description">${item.designation}</p>
        <div class="social">
            <a href="${item.email}">
              <i class="fa fa-envelope"></i>
            </a>
            <a href="${item.facebook}" target="_blank">
              <i class="fa fa-facebook-official"></i>
            </a>
            <a href="${item.linkedin}" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="${item.website}" target="_blank">
              <i class="fa fa-website"></i>
            </a>
        </div>
    </div>
    `;
}).join("")

//push to html
document.getElementById("team_advisor").innerHTML = advisorHTML;
document.getElementById("team_member").innerHTML = teamHTML;