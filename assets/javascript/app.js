var gif = "";
var queryURL = "";
var recentSearches = [];

$(document).ready(function () {

  var $searchButton = document.getElementById('search-button');
  $searchButton.addEventListener('click', searchForGifs);

  var $popularButton = document.getElementById('popular-gif');
  $popularButton.addEventListener('click', getPopularGifs);

  var $randomButton = document.getElementById('random-gif');
  $randomButton.addEventListener('click', getRandomGifs);

  var $reactionButton = document.getElementById('reaction-gif');
  $reactionButton.addEventListener('click', getReationGifs);

  $(document).on("click", ".new-btn", searchAgain);

  function searchForGifs(event) {
    event.preventDefault();
    console.log(queryURL)
    var gif = $("#gif-input").val().trim();
    console.log(gif)
    console.log(recentSearches);
    if (gif != "") {
      recentSearches.push(gif);
      queryURL = gif;
    }
    $("#search-btns").empty();
    for (var i = 0; i < recentSearches.length; i++) {
      var a = $("<button>");
      a.addClass("new-btn");
      a.attr("data-name", recentSearches[i]);
      a.text(recentSearches[i]);
      $("#search-btns").append(a);
      $("#gif-input").val('')
    }
    $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + queryURL + "&api_key=dc6zaTOxFJmzC&tag&limit=10",
      method: "GET"
    }).then(function (response) {
      var recent = response.data;
      for (var i = 0; i < recent.length; i++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("col-md-4")
        gifDiv.addClass("py-3")
        gifDiv.addClass("removal")
        var gifImg = $("<img>");
        gifImg.attr("src", recent[i].images.fixed_height.url);
        gifImg.attr("width", "90%")
        gifDiv.append(gifImg);
        $("#gifs-view").after(gifDiv);
      }
      console.log(response);
    })
  }

  function getPopularGifs(event) {
    event.preventDefault();
    $("#gifs-view").remove(".removal");
    $.ajax({
      url: "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&tag&limit=10",
      method: "GET"
    }).then(function (responsePopular) {

      console.log(responsePopular)

      var popular = responsePopular.data;

      for (var i = 0; i < popular.length; i++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("col-md-4")
        gifDiv.addClass("py-3")
        gifDiv.addClass("removal")
        var gifImg = $("<img>");
        gifImg.attr("src", popular[i].images.fixed_height.url);
        gifImg.attr("width", "90%")
        gifDiv.append(gifImg);
        $("#gifs-view").after(gifDiv);
      }

      ;
    })
  }

  function getRandomGifs() {
    event.preventDefault();

    $("#gifs-view").remove(".removal");

    $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag&limit=10",
      method: "GET"
    }).then(function (responseRandom) {

      console.log(responseRandom)

      var random = responseRandom.data;


      var gifDiv = $("<div>");
      gifDiv.addClass("col-md-12")
      gifDiv.addClass("py-3")
      gifDiv.addClass("text-center")
      gifDiv.addClass("removal")
      var gifImg = $("<img>");
      var gifTitle = $("<h4>")

      gifTitle.text(random.title)

      gifImg.attr("src", random.images.original.url);
      gifDiv.append(gifImg);
      gifDiv.append(gifTitle)
      $("#gifs-view").after(gifDiv);
    })

  }

  function getReationGifs() {

    event.preventDefault();

    $("#gifs-view").remove(".removal");

    $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=reaction&api_key=dc6zaTOxFJmzC&limit=10",
      method: "GET"
    }).then(function (responseReaction) {

      console.log(responseReaction)

      var reaction = responseReaction.data;

      for (var i = 0; i < reaction.length; i++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("col-md-4")
        gifDiv.addClass("py-3")
        gifDiv.addClass("text-center")
        gifDiv.addClass("removal")
        var gifImg = $("<img>");
        var gifTitle = $("<h4>")

        gifTitle.text(reaction.title)

        gifImg.attr("src", reaction[i].images.original.url);
        gifImg.attr("width", "90%")
        gifDiv.append(gifImg);
        gifDiv.append(gifTitle)
        $("#gifs-view").after(gifDiv);
      }
    })
  }

  function searchAgain() {
    search = $(this).attr("data-name");
    $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&tag&limit=10",
      method: "GET"
    }).then(function (response) {
      var recent = response.data;
      for (var i = 0; i < recent.length; i++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("col-md-4")
        gifDiv.addClass("py-3")
        gifDiv.addClass("removal")
        var gifImg = $("<img>");
        gifImg.attr("src", recent[i].images.fixed_height.url);
        gifImg.attr("width", "90%")
        gifDiv.append(gifImg);
        $("#gifs-view").after(gifDiv);
      }
      console.log(response);
    })
  }

});



//my key
//6TAb9rarJAjNgMlX5O5nfBpjC2ZZXEhY


// l o g i c

//on page load do the api call to go get the trending catagories
//put them in an array
//loop through that array to create buttons for each catagory
// display those buttons on the div on the left

//on search go to the api 
// associate its reponse with a new button
// call the display function again

//edge cases
//when you click the saem button twice dont replace the gifs on screen
// if displaying a different catagory, clear the div firsts and display the new stuff


//functions
//api call
//display
//search
//append the left div
//diplay the gifs
//empty the gif window



// variables
//gifs
//catagories
//

// on clicks
//search btn
//each of the created btns
