let theme = sessionStorage.getItem('theme');

if (theme === 'light') {
	document.documentElement.setAttribute('data-theme', 'light');
	document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(255, 255, 255)');
}
else if (theme === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
	document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(0, 0, 0)');
}
else {
	let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
	if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'dark');
		document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(0, 0, 0)');
	}
	else {
		document.documentElement.setAttribute('data-theme', 'light');
		document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(255, 255, 255)');
	}
}

function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(255, 255, 255)');
		// document.getElementById("theme-toggle").innerHTML = moon;
	} else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(0, 0, 0)');
		// document.getElementById("theme-toggle").innerHTML = sun;
	} else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(255, 255, 255)');
		// document.getElementById("theme-toggle").innerHTML = moon;
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgb(0, 0, 0)');
		// document.getElementById("theme-toggle").innerHTML = sun;
	}
}