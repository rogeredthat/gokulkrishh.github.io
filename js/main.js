//If serviceWorker supports, then register it.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: "./" }) //setting scope of sw
  .then(function(registration) {
    console.info('Service worker is registered!');
  })
  .catch(function(error) {
    console.error('Service worker failed ', error);
  });
}

// Zoom events for images in posts
var postContentElement = document.querySelector(".post__content");
var imageElement = postContentElement && postContentElement.querySelectorAll(".post__content img:not(.no-zoom)");
var zoomContainerElement = document.querySelector(".zoom__container");
var zoomImageElement = zoomContainerElement.querySelector(".zoom__element");

imageElement && imageElement.forEach(function(image) {
  image.addEventListener("click", function (event) {
    var cloneImage = event.target.cloneNode();
    zoomContainerElement.classList.add("zoom__container--visible");
    zoomImageElement.appendChild(cloneImage);
    postContentElement.classList.add("blur--bg");
    document.body.style.overflow = "hidden";
  });
});

zoomContainerElement.addEventListener("click", function (event) {
  zoomContainerElement.classList.remove("zoom__container--visible");
  zoomImageElement.innerHTML = "";
  postContentElement.classList.remove("blur--bg");
  document.body.style.overflow = "auto";
});
