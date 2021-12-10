// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

const vidContainer = document.querySelector(".video-container");
vidContainer.playbackRate = 0.45; // Making the video play slower
const button = document.querySelector(".switch-btn");
button.addEventListener("click", function () {
  if (!button.classList.contains("slide")) {
    button.classList.add("slide");
    vidContainer.pause();
  } else {
    button.classList.remove("slide");
    vidContainer.play();
  }
});
