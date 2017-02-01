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
var imageElement = document.querySelectorAll(".post__content img");
var zoomContainerElement = document.querySelector(".zoom__container");
var zoomImageElement = zoomContainerElement.querySelector(".zoom__element");

imageElement.forEach(function(image) {
  image.addEventListener("click", function (event) {
    var cloneImage = event.target.cloneNode();
    zoomContainerElement.style.display = "block";
    zoomImageElement.appendChild(cloneImage);
    document.body.style.overflow = "hidden";
  });
});

zoomContainerElement.addEventListener("click", function (event) {
  zoomContainerElement.style.display = "none";
  zoomImageElement.innerHTML = "";
  document.body.style.overflow = "auto";
});
