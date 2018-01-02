var experimentRanTimes = 0;
var predictTime = 20 + Math.round(Math.random() * 10);

function turnOnLight() {
	var light = document.getElementById('light');
	light.classList.remove('dark');
	window.setTimeout(function () {
		light.classList.add('dark');
	}, 100);
}

function runExperiment() {
	if (experimentRanTimes < predictTime) {
		window.setTimeout(turnOnLight, 100);
	} else {
		window.setTimeout(turnOnLight, 10);
	}
	experimentRanTimes++;
}

function setupButton() {
	var button = document.getElementById('experimentButton');
	button.addEventListener('mousedown', runExperiment);
}

window.addEventListener('DOMContentLoaded', setupButton);
