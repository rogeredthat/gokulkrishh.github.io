if ("serviceWorker" in navigator && window.location.hostname !== "localhost") {
  navigator.serviceWorker
    .register("/serviceWorker.js", {
      scope: "/"
    }) //Point to serviceWorker file
    .then(function (serviceWorkerRegistration) {
      console.log("serviceWorker is registered");
    })
    .catch(function (error) {
      console.log("Failed to register serviceWorker");
    });
}

// Zoom events for images in posts
var postContentElement = document.querySelector(".post__content");
var imageElement = postContentElement && postContentElement.querySelectorAll(".post__content img");
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
