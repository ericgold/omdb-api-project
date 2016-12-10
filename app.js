var buffButton = document.getElementById("buff-button");
var results = document.getElementById("results");


function getJson() {
	var title = document.getElementById("title").value;
	
	var query = "http://www.omdbapi.com/?plot=full&type=movie&tomatoes=true&t=";
	query += title;
	

	var textRequest = new XMLHttpRequest();
	textRequest.addEventListener("load", function(){
		var movie = JSON.parse(this.responseText);
		console.log(movie);
		var shortPlot = movie.Plot;
		results.innerHTML = shortPlot;

	});
	textRequest.open("GET", query);
	textRequest.send();
}

buffButton.addEventListener("click", getJson);