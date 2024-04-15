const setTheme = (theme) => {
  const color = theme === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 254)';
  document.documentElement.setAttribute('data-theme', theme);
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', color);
};

const getInitialTheme = () => {
  let theme = sessionStorage.getItem('theme');
  if (!theme) {
    const systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = systemInitiatedDark ? 'dark' : 'light';
    sessionStorage.setItem('theme', theme);
  }
  return theme;
};

const initializeTheme = () => {
  const theme = getInitialTheme();
  setTheme(theme);
};

function toggleTheme() {
  const currentTheme = getInitialTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  sessionStorage.setItem('theme', newTheme);
  setTheme(newTheme);
}

// Apply the theme on initial load and pageshow event
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    initializeTheme(); // Re-apply theme when page is loaded from bfcache
  }
});

initializeTheme(); // Also apply theme on initial load
