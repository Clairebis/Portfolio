//***************MY PROJECTS text appearing one letter at a time**********

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

frameLooper();
