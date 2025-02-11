//**********PROJECT CARDS **********

class ProjectCardBottom {
  constructor(tools, duration, link) {
    this.tools = tools;
    this.duration = duration;
    this.link = link;
  }

  render() {
    const bottomSection = document.createElement("div");
    bottomSection.classList.add("projectCardBottom");

    const bottomContent = document.createElement("div");
    bottomContent.classList.add("projectCardBottomText");

    const toolsElement = document.createElement("div");
    toolsElement.classList.add("tools");
    const toolsIcon = document.createElement("img");
    toolsIcon.setAttribute("src", "/assets/tools.svg");
    toolsIcon.classList.add("toolsIcon");
    const toolsText = document.createElement("p");
    toolsText.innerHTML = this.tools;

    const durationElement = document.createElement("div");
    durationElement.classList.add("clock");
    const durationIcon = document.createElement("img");
    durationIcon.setAttribute("src", "/assets/clock.svg");
    durationIcon.classList.add("clockIcon");
    const durationText = document.createElement("p");
    durationText.innerHTML = this.duration;

    const linkElement = document.createElement("a");
    linkElement.classList.add("projectCardBtn");
    linkElement.setAttribute("href", this.link);
    linkElement.innerHTML = "Read more";

    //Append elements to bottom section
    toolsElement.appendChild(toolsIcon);
    toolsElement.appendChild(toolsText);

    durationElement.appendChild(durationIcon);
    durationElement.appendChild(durationText);

    bottomContent.appendChild(toolsElement);
    bottomContent.appendChild(durationElement);

    bottomSection.appendChild(bottomContent);
    bottomSection.appendChild(linkElement);

    return bottomSection;
  }
}

class CardBottomSection {
  constructor(title, subtitle, description, tools, duration, link) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.bottomSection = new ProjectCardBottom(tools, duration, link);
  }

  render() {
    const lowerSection = document.createElement("div");
    lowerSection.classList.add("projectCardLowerSection");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("projectCardTitle");
    titleElement.innerHTML = this.title;

    const subtitleElement = document.createElement("p");
    subtitleElement.classList.add("projectCardSub");
    subtitleElement.innerHTML = this.subtitle;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("projectCardDescription");
    descriptionElement.innerHTML = this.description;

    const bottomSection = this.bottomSection.render();

    //Append elements to lower section

    lowerSection.appendChild(titleElement);
    lowerSection.appendChild(subtitleElement);
    lowerSection.appendChild(descriptionElement);
    lowerSection.appendChild(bottomSection);

    return lowerSection;
  }
}

class Card {
  constructor(imageContainer, CardBottomSection) {
    this.imageContainer = imageContainer;
    this.CardBottomSection = CardBottomSection;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageContainer = this.imageContainer;
    const bottomSection = this.CardBottomSection;

    // Append the image container and bottom section to the card
    card.appendChild(imageContainer);
    card.appendChild(bottomSection);

    return card;
  }
}

// instances of Card bottom section

const restaurantBottom = new CardBottomSection(
  "BiteBuddy",
  "1st Semester Design Sprint, September 2024",
  "Task: Improve the festival experience for the attendees, by providing them with a digital way to enhance their festival experience.",
  "User Research, Client Research, Figma, WP",
  "5-day Design Sprint, group project",
  "restaurant.html"
);

const hiddenPlacesBottom = new CardBottomSection(
  "Hidden Places",
  "1st Semester Exam Project, December 2022",
  "Task: Create a responsive experience site for hidden places in or around a city of your choice.",
  "User Research, Testing, XD, HTML, CSS, JS",
  "3 weeks, individual project",
  "hiddenPlaces.html"
);

const smukfestBottom = new CardBottomSection(
  "Smukfest & IBM",
  "2nd Semester UX/UI Project, March 2023",
  "Task: Improve the festival experience for the attendees, by providing them with a digital way to enhance their festival experience.",
  "User Research, Client Research, Figma, WP",
  "4 weeks, group project",
  "smukfest.html"
);

const AGFBottom = new CardBottomSection(
  "AGF Basktetball",
  "2nd Semester Exam Project, May 2023",
  "Task: Develop a concept and an interactive digital solution for a company or another external partner.",
  "User and Client Research, Testing, Figma, WP",
  "6 weeks, group project",
  "basketball.html"
);

const grundfosBottom = new CardBottomSection(
  "Grundfos Kollegiet",
  "1st Semester UX/UI & Coding, November 2022",
  "Task: Devise and design a user-friendly, relevant and bold solution for a smart screen in the entrance.",
  "User Research, Testing, XD, HTML, CSS, JS",
  "8 weeks, group project",
  "grundfos.html"
);

const blogBottom = new CardBottomSection(
  "Out in Nature",
  "2nd Semester, 24 hour JS Exam, June 2023",
  "Task: create a WordPress blog with modifications that will enhance the visual appeal and interactivity of your website.",
  "Wordpress, JavaScript",
  "24 hours, individual project",
  "blog.html"
);

const trackBottom = new CardBottomSection(
  "TrackTap",
  "Summer School, July 2023",
  "Task: Implement an application prototype using React Native.",
  "React Native",
  "2 weeks, group project",
  "tracktap.html"
);

// instances of Card
const restaurantImageContainer = document.querySelector(
  ".cardImageContainerRestaurant"
);
const hiddenPlacesImageContainer = document.querySelector(
  ".cardImageContainerHidden"
);
const smukfestImageContainer = document.querySelector(
  ".cardImageContainerSmuk"
);
const AGFImageContainer = document.querySelector(".cardImageContainerAGF");

const grundfosImageContainer = document.querySelector(
  ".cardImageContainerGrundfos"
);

const blogImageContainer = document.querySelector(".cardImageContainer24");

const trackImageContainer = document.querySelector(".cardImageContainerTrack");

const restaurantCard = new Card(
  restaurantImageContainer,
  restaurantBottom.render()
);

const hiddenPlacesCard = new Card(
  hiddenPlacesImageContainer,
  hiddenPlacesBottom.render()
);

const smukfestCard = new Card(smukfestImageContainer, smukfestBottom.render());

const AGFCard = new Card(AGFImageContainer, AGFBottom.render());

const grundfosCard = new Card(grundfosImageContainer, grundfosBottom.render());

const blogCard = new Card(blogImageContainer, blogBottom.render());

const trackCard = new Card(trackImageContainer, trackBottom.render());

//parent container for cards on project page
const cardsContainerProject = document.querySelector(".cards2");

//append cards to parent container (project)
cardsContainerProject.appendChild(restaurantCard.render());
cardsContainerProject.appendChild(hiddenPlacesCard.render());
cardsContainerProject.appendChild(grundfosCard.render());
cardsContainerProject.appendChild(smukfestCard.render());
cardsContainerProject.appendChild(blogCard.render());
cardsContainerProject.appendChild(trackCard.render());
cardsContainerProject.appendChild(AGFCard.render());
