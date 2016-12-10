var button = document.getElementById("button");
//var title = document.getElementById("title").value;
var results = document.getElementById("results");

/*
function loadJson() {
	var movie = JSON.parse(this.responseText);
	var shortPlot = movie.plot;

	console.log(shortPlot);
	//results.innerHTML = shortPlot;
}
*/

function getJson() {
	var title = document.getElementById("title").value;
	console.log(title);
	var query = "http://www.omdbapi.com/?plot=full&t=";
	query += title;
	console.log(query);

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

button.addEventListener("click", getJson);