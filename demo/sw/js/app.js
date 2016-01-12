
//To check add to homescreen icon is added or not
$(window).on("load", function () {
  $(window).on("beforeinstallprompt", function(event) {
    event.userChoice.then(function(result) {
      console.log(result.outcome);
      if(result.outcome == "dismissed") {
        console.log("user dismissed add to homescreen prompt.");
      }
      else {
        console.log("Added to homescreen.");
      }
    });
  });
});

//To call hackerNews API
$(function () {
  var url = "https://hacker-news.firebaseio.com/v0/newstories.json";

  $.ajax({
    url: url,
    method: "GET",
    success: function (response) {
      var response = response.splice(1, 20);
      response.map(function (contentId) {
        return(getContents(contentId));
      });
    },
    error: function (error) {
      console.error(error);
    }
  });

  //To get stories in hackerNews
  function getContents(contentId) {
    var contentUrl = "https://hacker-news.firebaseio.com/v0/item/" + contentId + ".json";

    $.ajax({
      url: contentUrl,
      method: "GET",
      success: function (response) {
        $("#main").append(
          "<div class='container'>" +
          "<p><a href='#'>" + response.title + "</a></p>" +
          "<p> <span>" + response.score + "</span> point by <span class='author'>" + response.by + "</span></p>" +
          "<a href='https://www.google.co.in/search?q=" + response.title + "' target='_blank' class='search-web'> search  web</a>" +
          "</div>"
        );
      },
      error: function (error) {
        console.error(error);
      }
    });
  }

  //Hamburger menu function
  $("#menu-overlay, .menu-icon, #menu a").on("click", function (event) {
    event.stopPropagation();

    var $menuEle = $('#menu');

    if ($menuEle.hasClass("visible")) {
      $menuEle.removeClass("visible");
      $("#menu-overlay").removeClass("visible");
    }
    else {
      $menuEle.addClass("visible");
      $("#menu-overlay").addClass("visible");
    }

  });
});
