let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');
let sun = '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16" style="vertical-align: -.125em;"><path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/></svg>'
let moon = sun

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	// document.getElementById("theme-toggle").innerHTML = sun;
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    // document.getElementById("theme-toggle").innerHTML = moon;
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = moon;
	}	else if (theme === "light") {
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

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	// document.getElementById("theme-toggle").innerHTML = sun;
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	// document.getElementById("theme-toggle").innerHTML = moon;
}