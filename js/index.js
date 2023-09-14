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
