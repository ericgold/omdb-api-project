var buffButton = document.getElementById("buff-button");
var directorBox = document.getElementById("director");
var castBox = document.getElementById("cast");
var releaseDateBox = document.getElementById("release-date");
var plotBox = document.getElementById("plot");
var opinionBox = document.getElementById("opinion");


function getJson() {
	var title = document.getElementById("title").value;
	
	var query = "http://www.omdbapi.com/?plot=full&type=movie&tomatoes=true&t=";
	query += title;
	

	var textRequest = new XMLHttpRequest();
	textRequest.addEventListener("load", function(){
		var movie = JSON.parse(this.responseText);
		console.log(movie);

		var director = movie.Director;
		var cast = movie.Actors;
		var release = movie.Released;
		var fullPlot = movie.Plot;
		var opinion = movie.tomatoConsensus;

		directorBox.innerHTML = director;
		castBox.innerHTML = cast;
		releaseDateBox.innerHTML = release;
		plotBox.innerHTML = fullPlot;
		opinionBox.innerHTML = opinion;


	});
	textRequest.open("GET", query);
	textRequest.send();
}

buffButton.addEventListener("click", getJson);