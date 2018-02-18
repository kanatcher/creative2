/*
* Random things to remember:
* Do not use a for each loop for json object; that will only return the index
*/
var getMeal = function(data) {
  document.getElementById('output').innerHTML = "";

  var length = data.meals.length;
  var functions = {};
  for (var i = 0; i < length; i++){
    var values = Object.values(data.meals[i]);

    var ingredients = "<ul class = \"ingredientList\">";
    for (var j = 8; j < 28; j++) {

      if(values[j]!= "" && values[j] != null){
          ingredients += "<li>" + values[j] + ", " +
          values[j+20] + "</li>"
      }
    }

    document.getElementById('output').innerHTML +=
    "</ul>" +
    "<h2 class=mealHeader>" + values[1].toUpperCase() + "</h2>" +

    "<img src=\"http://" + values[5] + "\">" + ingredients + "<br><br>" +
    "<p>" + values[4] + "</p><br><br>";
  }
}


$(document).ready(function (){

    var searchButton = $("#search");
    var randomButton = $("#random");

    searchButton.click(function(e) {

      e.preventDefault(); /*prevent reload on form submit*/

      var value = $("#mealInput").val();
      var mealAPI = "http://www.themealdb.com/api/json/v1/1/search.php?s=" + value;

          $.get(mealAPI,  getMeal);
    });

    randomButton.click(function(e){
              e.preventDefault();

              var mealAPI = "http://www.themealdb.com/api/json/v1/1/random.php"
              $.get(mealAPI, getMeal);

      });
});
