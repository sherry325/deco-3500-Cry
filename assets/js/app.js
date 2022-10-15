let timerButton = null;

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
	const emoji = document.querySelector('div.emoji');
	const button = document.querySelector('span.button');

	task.innerHTML = input.value;
	taskBox.style.display = 'flex';
	addTaskBox.style.display = 'none';
	emoji.style.display = 'initial';
	button.style.margin = '0 3rem';
	hideAddTaskOverlay();
}

function showTimerOverlay (event) {	
	const timerOverlay = document.querySelector('div.timerOverlay');
	const overlayBackground = document.querySelector('div.overlayBackground');
	timerButton = event.target;

	timerOverlay.style.display = 'flex';
	overlayBackground.style.display = 'initial';
}

function hideTimerOverlay () {
	const timerOverlay = document.querySelector('div.timerOverlay');
	const overlayBackground = document.querySelector('div.overlayBackground');
	timerButton = null;

	timerOverlay.style.display = 'none';
	overlayBackground.style.display = 'none';
}

function saveTime () {
	const input = document.querySelector('input');
	const errorText = document.querySelector('div.error');
	const saveButton = document.querySelector('span.overlayButton');
	const regex = /^[0-9]+$/;

	if (!input.value.match(regex)) {
		errorText.style.display = 'initial';
		saveButton.style.marginTop = '1rem';
	} else {
		timerButton.querySelector('span.time').innerHTML = input.value;
		input.value = '';
		errorText.style.display = 'none';
		saveButton.style.marginTop = '2rem';
		hideTimerOverlay();
	}
}