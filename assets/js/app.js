function navigate (path) {
	window.location.href = path;
}

function showAddTaskOverlay () {
	const addTaskOverlay = document.querySelector('div.addTaskOverlay');
	const overlayBackground = document.querySelector('div.overlayBackground');
	
	addTaskOverlay.style.display = 'flex';
	overlayBackground.style.display = 'initial';
}

function hideAddTaskOverlay () {
	const addTaskOverlay = document.querySelector('div.addTaskOverlay');
	const overlayBackground = document.querySelector('div.overlayBackground');

	addTaskOverlay.style.display = 'none';
	overlayBackground.style.display = 'none';
}

function saveTask () {
	const input = document.querySelector('input');
	const taskBox = document.querySelector('div.smallBox');
	const task = document.querySelector('div.smallBox > span.innerText');
	const addTaskBox = document.querySelector('div.smallBoxDotBorder');

	task.innerHTML = input.value;
	taskBox.style.display = 'flex';
	addTaskBox.style.display = 'none';
	hideAddTaskOverlay();
}

function showTimerOverlay () {	
	const timerOverlay = document.querySelector('div.timerOverlay');
	const overlayBackground = document.querySelector('div.overlayBackground');

	timerOverlay.style.display = 'flex';
	overlayBackground.style.display = 'initial';
}

function hideTimerOverlay () {
	const timerOverlay = document.querySelector('div.timerOverlay');
	const overlayBackground = document.querySelector('div.overlayBackground');

	timerOverlay.style.display = 'none';
	overlayBackground.style.display = 'none';
}
