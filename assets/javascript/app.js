var gif = "";
var queryURL = "";
var recentSearches = [];
var response;



$(document).ready(function () {
  console.log(gif)

  var $searchButton = document.getElementById('search-button');
  $searchButton.addEventListener('click', searchForGifs);

  var $popularButton = document.getElementById('popular-gif');
  $popularButton.addEventListener('click', getPopularGifs);

  var $randomButton = document.getElementById('random-gif');
  $randomButton.addEventListener('click', getRandomGifs);

  var $reactionButton = document.getElementById('reaction-gif');
  $reactionButton.addEventListener('click', getReationGifs);



  function searchForGifs(event) {
    event.preventDefault();

    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=" + queryURL + "&api_key=6TAb9rarJAjNgMlX5O5nfBpjC2ZZXEhY&limit=10",
      method: "GET"
    }).then(function (response) {

      console.log(response);
    })

    var gif = $("#gif-input").val().trim();
    console.log(gif)
    console.log(recentSearches);
    if (gif != "") {
      renderButtons();
      recentSearches.push(gif);
    }
  }

  function getPopularGifs(event) {
    event.preventDefault();

    $.ajax({
      url: "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&tag&limit=10",
      method: "GET"
    }).then(function (response) {

      console.log(response)

      var popular = response.data;

      for (var i = 0; i < popular.length; i++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("col-md-4")
        gifDiv.addClass("py-3")
        var gifImg = $("<img>");
        gifImg.attr("src", popular[i]
          .images.fixed_height.url);
          gifImg.attr("width", "90%")
        gifDiv.append(gifImg);
        $("#gifs-view").after(gifDiv);
      }

      ;
    })
  }

  function getRandomGifs() {

  }

  function getReationGifs() {

  }

  function renderButtons() {
    $("#search-btns").empty();
    for (var i = 0; i < recentSearches.length; i++) {
      var a = $("<button>");
      a.addClass("new-btn");
      a.attr("data-name", recentSearches[i]);
      a.text(recentSearches[i]);
      $("#search-btns").append(a);
      $("#gif-input").val('')
    }
  }



});



//my key
//6TAb9rarJAjNgMlX5O5nfBpjC2ZZXEhY


// l o g i c

//on page load to the api call to go get the trending catagories
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
