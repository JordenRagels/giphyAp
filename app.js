
$(document).ready(function() {

var giphyArray = ['Clueless', 'Mean Girls', 'Legally Blonde', 'Sixteen Candles'];



giphyArray.forEach(function (element) {
    let b = $("<button>");
    b.text(element);
    b.attr("data-value", element);
    $("#buttons").append(b);

});

$(document).on("click","button", function () {
    console.log("DO I WORK");
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
            resultDiv.attr("class", "carousel-item");
            if (i === 0) {
                resultDiv.attr("class","carousel-item active");
            };

            $("#gifResults").prepend(resultDiv);
        }
    })
})

$(document).on("click", "#bt", function() {
    var userInput = $("input[type='text']").val().trim()
    $("#emptyInput").val('');
    console.log(userInput);
    console.log("hey");

    giphyArray.push(userInput);
    let b = $("<button>");
    b.text(userInput);
    b.attr("data-value", userInput);
    $("#buttons").append(b);
    
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

});
