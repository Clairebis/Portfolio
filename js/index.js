// Get the navigation bar element
const navigationBar = document.getElementById("navigation");
const navLinks = document.querySelectorAll("ul.navList li a");

// Function to update the navigation bar position
function updateNavigationBarPosition() {
  const scrollThreshold = 600;

  if (window.scrollY > scrollThreshold) {
    navigationBar.style.top = "0";
    navigationBar.style.position = "fixed";
    navigationBar.style.marginTop = "0";
    navigationBar.style.backgroundColor = "#719DA0";
    navigationBar.style.transition = "0.3s ease-in-out";
    // Loop through each link to change its color
    navLinks.forEach(function (link) {
      link.style.color = "white";
      link.style.fontWeight = "300";
    });
  } else {
    navigationBar.style.bottom = "0";
    navigationBar.style.position = "sticky";
    navigationBar.style.marginTop = "-70px";
    navigationBar.style.backgroundColor = "transparent";
    navigationBar.style.transition = "0.3s ease-in-out";
    // Loop through each link to change its color
    navLinks.forEach(function (link) {
      link.style.color = "white";
      link.style.fontWeight = "400";
    });
  }
}

// Listen for scroll events and update the position accordingly
window.addEventListener("scroll", updateNavigationBarPosition);

/* MY PROJECTS text appearing one letter at a time

const myText = "MY PROJECTS";
const myArray = myText.split("");
let loopTimer;

function frameLooper() {
  if (myArray.length > 0) {
    document.getElementById("myProjects").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("frameLooper()", 200);
}

frameLooper();*/

// function for all textAnimation

function textAnimation(targetElementId, text, animationSpeed = 200) {
  const targetElement = document.getElementById(targetElementId);
  const textArray = text.split("");
  let timerId = null;

  function animateText() {
    if (textArray.length > 0) {
      targetElement.innerHTML += textArray.shift();
    } else {
      clearTimeout(timerId);
    }
    timerId = setTimeout(animateText, animationSpeed);
  }

  animateText();
}

textAnimation("myProjects", "MY PROJECTS");

// *******NAVIGATION BAR - HIGHLIGHT ACTIVE PAGE *************

/* Doesn't work....

document.addEventListener("DOMContentLoaded", function () {
  // Get all the links in the document
  const links = document.querySelectorAll("ul.navList li a, ul.subNav li a");

  // Function to highlight the active page
  function highlightCurrentPage() {
    const currentPath = window.location.pathname;

    links.forEach((link) => {
      const linkPath = link.getAttribute("href");

      // Check if the link's href matches the current path
      if (linkPath === currentPath) {
        link.classList.add("highlighted");
      } else {
        link.classList.remove("highlighted");
      }
    });
  }

  // Call the function to initially highlight the current page
  highlightCurrentPage();

  // Loop through each link and add a click event listener
  links.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove the highlighted class from all links
      links.forEach((l) => {
        l.classList.remove("highlighted");
      });

      // Add the highlighted class to the clicked link
      link.classList.add("highlighted");
    });
  });
});*/
