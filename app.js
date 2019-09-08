
var giphyArray = ['koala', 'panda', 'elephant'];



giphyArray.forEach(function (element) {
    let b = $("<button>");
    b.text(element);
    $("#buttons").append(b);

});


var queryURL = "https://api.giphy.com/v1/gifs/search?q=koala&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(res){

    console.log(res.data);
})


