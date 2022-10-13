function navigate (path) {
	window.location.href = path;
}

function showAddTaskOverlay () {
	let addTaskOverlay = document.querySelector('div.addTaskOverlay');
	let overlayBackground = document.querySelector('div.overlayBackground');
	
	addTaskOverlay.style.display = 'flex';
	overlayBackground.style.display = 'initial';
}

function hideAddTaskOverlay () {
	let addTaskOverlay = document.querySelector('div.addTaskOverlay');
	let overlayBackground = document.querySelector('div.overlayBackground');

	addTaskOverlay.style.display = 'none';
	overlayBackground.style.display = 'none';
}

function showTimerOverlay () {	
	let timerOverlay = document.querySelector('div.timerOverlay');
	let overlayBackground = document.querySelector('div.overlayBackground');

	timerOverlay.style.display = 'flex';
	overlayBackground.style.display = 'initial';
}

function hideTimerOverlay () {
	let timerOverlay = document.querySelector('div.timerOverlay');
	let overlayBackground = document.querySelector('div.overlayBackground');

	timerOverlay.style.display = 'none';
	overlayBackground.style.display = 'none';
}