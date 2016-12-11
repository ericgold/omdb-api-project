var buffButton = document.getElementById("buff-button");
var directorBox = document.getElementById("director");
var castBox = document.getElementById("cast");
var releaseDateBox = document.getElementById("release-date");
var runtimeBox = document.getElementById("runtime");
var awardsBox = document.getElementById("awards");
var plotBox = document.getElementById("plot");
var opinionBox = document.getElementById("opinion");


function getJson() {
	var title = document.getElementById("title").value;
	
	var query = "http://www.omdbapi.com/?plot=full&type=movie&tomatoes=true&t=";
	query += title;

	var textRequest = new XMLHttpRequest();

	textRequest.addEventListener("load", function(){
		var movie = JSON.parse(this.responseText);
		//console.log(movie);

		var director = movie.Director;
		var cast = movie.Actors;
		var release = movie.Released;
		var runtime = movie.Runtime;
		var awards = movie.Awards;
		var fullPlot = movie.Plot;
		var opinion = movie.tomatoConsensus;

		if (opinion = "N/A") {
			opinion = "You're on your own, bub."
		}

		clearBoxes();

		directorBox.append(director);
		castBox.append(cast);
		releaseDateBox.append(release);
		runtimeBox.append(runtime);
		awardsBox.append(awards);
		plotBox.append(fullPlot);
		opinionBox.append(opinion);


	});
	textRequest.open("GET", query);
	textRequest.send();

	function clearBoxes() {
		directorBox.innerHTML = "";
		castBox.innerHTML = "";
		releaseDateBox.innerHTML = "";
		runtimeBox.innerHTML = "";
		awardsBox.innerHTML = "";
		plotBox.innerHTML = "";
		opinionBox.innerHTML = "";
	}
}

buffButton.addEventListener("click", getJson);