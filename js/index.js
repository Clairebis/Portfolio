/*var animation = bodymovin.loadAnimation({
  container: document.getElementById("animationContainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/lottie.json",
});*/

/*// Get a reference to the container
const container = document.getElementById("animationContainer");

// Specify the path to your Lottie animation JSON file
const animationPath = "/lottie.json";

// Configure Lottie options
const animationOptions = {
  container: container,
  renderer: "svg", // Use 'svg' for better compatibility
  loop: true, // Set to true for a looping animation
  autoplay: true, // Set to true to start the animation automatically
  path: animationPath,
};

// Create the Lottie animation
const animation = lottie.loadAnimation(animationOptions);
*/
// Get the navigation bar element
const navigationBar = document.getElementById("navigation");

// Function to update the navigation bar position
function updateNavigationBarPosition() {
  const scrollThreshold = 768;

  if (window.scrollY > scrollThreshold) {
    navigationBar.style.top = "0";
    navigationBar.style.position = "fixed";
    navigationBar.style.marginTop = "0";
  } else {
    navigationBar.style.bottom = "0";
    navigationBar.style.position = "sticky";
    navigationBar.style.marginTop = "-70px";
    /* Back to the bottom position */
  }
}

// Listen for scroll events and update the position accordingly
window.addEventListener("scroll", updateNavigationBarPosition);
