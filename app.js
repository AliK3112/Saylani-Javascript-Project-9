// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const vidContainer = document.querySelector(".video-container");
vidContainer.playbackRate = 0.45;
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
