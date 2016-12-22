var buffButton = document.getElementById("buff-button");

(function(exports){

	var directorBox = document.getElementById("director");
	var castBox = document.getElementById("cast");
	var releaseDateBox = document.getElementById("release-date");
	var runtimeBox = document.getElementById("runtime");
	var awardsBox = document.getElementById("awards");
	var plotBox = document.getElementById("plot");
	var opinionBox = document.getElementById("opinion");
	var headings = document.querySelectorAll(".info-container h3");

	exports.getJson = function() {
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
			var runtime = movie.Runtime;
			var awards = movie.Awards;
			var fullPlot = movie.Plot;
			var opinion = movie.tomatoConsensus;

			/*
			if (opinion = "N/A") {
				opinion = "You're on your own, bub.";
			}
			*/
			
			clearBoxes();
			showHeadings();

			/* thought I could create an object and loop
			// instead of calling generateOutput() 7 times
			// but it doesn't work yet
			var output = {
				directorBox : director,
				castBox : cast,
				releaseDateBox : release,
				awardsBox : awards,
				plotBox : fullPlot,
				opinionBox : opinion
			}

			for (key in output) {
				generateOutput(key, output[key]);
			};
			*/
			
			generateOutput(directorBox, director);
			generateOutput(castBox, cast);
			generateOutput(releaseDateBox, release);
			generateOutput(runtimeBox, runtime);
			generateOutput(awardsBox, awards);
			generateOutput(plotBox, fullPlot);
			generateOutput(opinionBox, opinion);
			
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

		function showHeadings() {
			for (var i=0; i<headings.length; i++) {
				headings[i].classList.remove("hidden");
			}
		}

		function generateOutput(container, content) {
			var outputGraf = document.createElement("p");
			outputGraf.innerText = content;
			container.append(outputGraf);
		}
}

}(typeof window === 'undefined' || window === null ? global.movieBuff = {} : window.movieBuff = {}))


buffButton.addEventListener("click", movieBuff.getJson);


