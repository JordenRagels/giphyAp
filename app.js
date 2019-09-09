
var giphyArray = ['koala', 'panda', 'elephant'];



giphyArray.forEach(function (element) {
    let b = $("<button>");
    b.text(element);
    b.attr("data-value", element);
    $("#buttons").append(b);

});

$("button").on("click", function () {
   $("#gifResults").empty();
    var searchTerm = $(this).data("value");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
    + searchTerm + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        console.log(queryURL);

        console.log(res.data);

        var results = res.data;

        for (var i = 0; i < results.length; i++) {

            var resultDiv = $("<div>");

            var rating = results[i].rating;

            var gifImage = $("<img>");

            var p = $("<p>").text("Rating: " + rating);
           
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("class", "gif");
            gifImage.attr("data-state", "still");
            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            resultDiv.append(gifImage);
            resultDiv.append(p);

            $("#gifResults").prepend(resultDiv);
        }
    })
})

$(document).on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }

})


