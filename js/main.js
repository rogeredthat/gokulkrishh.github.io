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
