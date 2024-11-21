document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll(".fade-in-on-scroll");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("fade-in");
				observer.unobserve(entry.target);
			}
		});
	});

	elements.forEach((el) => {
		observer.observe(el);
	});

	const windows = document.querySelectorAll('.win95-window');

	windows.forEach(windowElement => {
		const titleBar = windowElement.querySelector('.window-title-bar');
		const closeButton = windowElement.querySelector('.close-button');
		const minimizeButton = windowElement.querySelector('.minimize-button');
		const windowContent = windowElement.querySelector('.window-content');

		let isDragging = false;
		let offsetX = 0;
		let offsetY = 0;

		// Function to handle mouse down on the title bar
		titleBar.addEventListener('mousedown', (e) => {
			isDragging = true;
			offsetX = e.clientX - windowElement.offsetLeft;
			offsetY = e.clientY - windowElement.offsetTop;
			document.addEventListener('mousemove', moveWindow);
			document.addEventListener('mouseup', stopDrag);
		});

		// Function to move the window
		function moveWindow(e) {
			if (isDragging) {
				windowElement.style.left = `${e.clientX - offsetX}px`;
				windowElement.style.top = `${e.clientY - offsetY}px`;
			}
		}

		// Function to stop dragging
		function stopDrag() {
			isDragging = false;
			document.removeEventListener('mousemove', moveWindow);
			document.removeEventListener('mouseup', stopDrag);
		}

		// Function to handle close button click
		closeButton.addEventListener('click', () => {
			windowElement.style.display = 'none';
		});

		// Function to handle minimize button click
		minimizeButton.addEventListener('click', () => {
			windowContent.classList.toggle('minimized');
		});
	});

	// Taskbar Time Display
	const timeElement = document.getElementById('taskbar-time');
	function updateTime() {
		const now = new Date();
		let hours = now.getHours();
		const minutes = now.getMinutes();
		const ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12 || 12;
		const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
		timeElement.textContent = formattedTime;
	}
	updateTime();
	setInterval(updateTime, 60000); // Update every minute

	// Start Menu Toggle
	const startButton = document.getElementById('start-button');
	const startMenu = document.getElementById('start-menu');

	startButton.addEventListener('click', () => {
		startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
	});

	// Close Start Menu when clicking outside
	document.addEventListener('click', (e) => {
		if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
			startMenu.style.display = 'none';
		}
	});

	// Desktop Icons and Start Menu Items Click Handler
	const openableElements = document.querySelectorAll('[data-window]');
	openableElements.forEach(element => {
		element.addEventListener('click', () => {
			const windowId = element.getAttribute('data-window');
			const windowElement = document.getElementById(windowId);
			windowElement.style.display = 'block';
			bringToFront(windowElement);
		});
	});

	// Function to Bring Window to Front
	let highestZIndex = 1000;
	function bringToFront(windowElement) {
		highestZIndex += 1;
		windowElement.style.zIndex = highestZIndex;
	}

	// Window Controls (Minimize and Close)
	windows.forEach(win => {
		const titleBar = win.querySelector('.window-title-bar');
		const closeButton = win.querySelector('.close-button');
		const minimizeButton = win.querySelector('.minimize-button');
		const windowContent = win.querySelector('.window-content');

		let isDragging = false;
		let offsetX = 0;
		let offsetY = 0;

		// Dragging Functionality
		titleBar.addEventListener('mousedown', (e) => {
			isDragging = true;
			offsetX = e.clientX - win.offsetLeft;
			offsetY = e.clientY - win.offsetTop;
			bringToFront(win);
			document.addEventListener('mousemove', moveWindow);
			document.addEventListener('mouseup', stopDrag);
		});

		function moveWindow(e) {
			if (isDragging) {
				win.style.left = `${e.clientX - offsetX}px`;
				win.style.top = `${e.clientY - offsetY}px`;
			}
		}

		function stopDrag() {
			isDragging = false;
			document.removeEventListener('mousemove', moveWindow);
			document.removeEventListener('mouseup', stopDrag);
		}

		// Close Button Functionality
		closeButton.addEventListener('click', () => {
			win.style.display = 'none';
		});

		// Minimize Button Functionality
		minimizeButton.addEventListener('click', () => {
			windowContent.classList.toggle('minimized');
		});

		// Bring Window to Front on Click
		win.addEventListener('mousedown', () => {
			bringToFront(win);
		});
	});

	// Contact Form Submission
	const contactForm = document.getElementById('contact-form');
	const formSuccess = document.getElementById('form-success');

	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		// Simple form validation
		if (contactForm.checkValidity()) {
			// Simulate form submission
			setTimeout(() => {
				contactForm.reset();
				formSuccess.style.display = 'block';
				setTimeout(() => {
					formSuccess.style.display = 'none';
				}, 3000);
			}, 500);
		} else {
			contactForm.classList.add('was-validated');
		}
	});
});
