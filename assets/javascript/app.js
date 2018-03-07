var gif = "";
var queryURL = ""
var recentSearches = []

$( document ).ready(function() {
  console.log(gif)
  var $searchButton = document.getElementById('search-button');
  $searchButton.addEventListener('click', searchForGifs);

  function searchForGifs(event){
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    console.log(gif)
    recentSearches.push(gif);
    console.log(recentSearches);
    if (gif != ""){
    renderButtons();
  }
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


$.ajax({
  url: "http://api.giphy.com/v1/gifs/search?q=" + queryURL + "&api_key=6TAb9rarJAjNgMlX5O5nfBpjC2ZZXEhY&limit=10",
  method: "GET"
}).then(function(response) {

console.log(response)

;})
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
