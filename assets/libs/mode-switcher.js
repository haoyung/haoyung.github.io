const setTheme = (theme) => {
  const color = theme === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
};

const initializeTheme = () => {
  let theme = sessionStorage.getItem('theme');
  if (!theme) {
      const systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme = systemInitiatedDark ? 'dark' : 'light';
  }
  setTheme(theme);
};

function modeSwitcher() {
  let currentTheme = sessionStorage.getItem('theme');
  const systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (!currentTheme) {
      currentTheme = systemInitiatedDark ? 'dark' : 'light';
  }
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  sessionStorage.setItem('theme', newTheme);
  setTheme(newTheme);
}

initializeTheme();
