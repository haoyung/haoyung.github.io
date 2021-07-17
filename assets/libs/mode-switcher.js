let theme = sessionStorage.getItem('theme');

if (theme === 'light') {
	document.documentElement.setAttribute('data-theme', 'light');
}
else if (theme === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
}
else {
	let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
	if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
}

function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = moon;
	} else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = sun;
	} else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = moon;
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = sun;
	}
}