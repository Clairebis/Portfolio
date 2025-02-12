//********FOOTER ***********

// Define the footer HTML content
const footerHtml = `
      <div class="footer descriptionSection">
      <div class="footerMain">
        <div>
          <h2>FURTHER LINKS</h2>
          <ul class="footerLinks">
            <li>
              <a
                href="https://www.linkedin.com/in/claire-bisgaard-67967a120/"
                target="_blank"
                rel="noopener noreferrer"
                >LinkedIn</a
              >
            </li>
            <br />
            <li>
              <a
                href="https://github.com/Clairebis"
                target="_blank"
                rel="noopener noreferrer"
                >Github</a
              >
            </li>
            <br />
            <li>
              <a href="/assets/CV.docx" download="CV.docx"
                >Download a copy of my CV</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2>CONTACT</h2>
          <ul>
            <li>claire.bisgaard@gmail.com</li>
            <br />
            <li>+45 42435843</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="copyright">&copy; 2025 Claire Bisgaard</p>
      </div>
    </div>
`;

// Function to inject the footer HTML to elements based on class
function injectFooter(footerContainer) {
  const elements = document.querySelectorAll(`.${footerContainer}`);
  elements.forEach((element) => {
    element.innerHTML = footerHtml;
  });
}

// Call function
injectFooter("footerContainer");

/* function for all textAnimation

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

textAnimation("myProjects", "MY PROJECTS");*/

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
