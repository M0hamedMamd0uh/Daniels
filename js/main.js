// for typing animation (change word and set id for element to change width by it)

let typingHeading = document.getElementsByClassName("typing-span");

setInterval(function () {
  if (typingHeading[0].innerHTML === "Mohamed Mamdouh") {
    typingHeading[0].id = "DV";
    typingHeading[0].innerHTML = "Developer";
  } else if (typingHeading[0].innerHTML === "Developer") {
    typingHeading[0].id = "DS";
    typingHeading[0].innerHTML = "Designer";
  } else if (typingHeading[0].innerHTML === "Designer") {
    typingHeading[0].id = "MM";
    typingHeading[0].innerHTML = "Mohamed Mamdouh";
  }
}, 3000);

// for change background of navbar

let navbar = document.getElementsByClassName("navbar");
let navbarBrand = document.getElementsByClassName("navbar-brand");
let navLink = document.getElementsByClassName("nav-link");
let navLinkActive = document.getElementsByClassName("active");

window.onscroll = function () {
  if (window.scrollY > 650) {
    navbar[0].style.backgroundColor = "rgb(0,0,0, .9)";
    navbar[0].style.boxShadow = `0px 30px 50px rgba(0, 0, 0, 0.05)`;
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "#b2b2b2";
    }
    navbarBrand[0].style.color = "#fff";
    navLinkActive[0].style.color = "#fff";
  } else {
    navbar[0].style.backgroundColor = `rgb(0,0,0, 0)`;
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.color = "#b2b2b2";
    }
    navbar[0].style.boxShadow = `none`;

    navbarBrand[0].style.color = "#fff";
    navLinkActive[0].style.color = "#fff";
  }
};
