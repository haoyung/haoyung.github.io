// Theme handling.
//
// Three states: follow the system (default, nothing stored, no data-theme attribute so
// the CSS tracks the OS live), forced light, forced dark. A toggle click moves to a
// forced state and persists it in localStorage so every page in every tab honours it.
// Toggling back to whatever the system currently shows clears the override, so the
// reader silently returns to following the system instead of being pinned forever.
//
// Runs synchronously in <head> so the attribute is set before first paint.
(() => {
  const KEY = 'theme';
  const COLORS = { light: '#ffffff', dark: '#000000' };
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  const systemTheme = () => (systemDark.matches ? 'dark' : 'light');

  const storedTheme = () => {
    try {
      const v = localStorage.getItem(KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch (e) {
      return null;
    }
  };

  const apply = () => {
    const forced = storedTheme();
    const root = document.documentElement;
    if (forced) {
      root.setAttribute('data-theme', forced);
    } else {
      root.removeAttribute('data-theme');
    }
    // Keep the browser chrome colour in step. When following the system, restore the
    // per-scheme defaults; when forced, pin both metas to the forced colour.
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      const scheme = meta.media && meta.media.includes('dark') ? 'dark' : 'light';
      meta.setAttribute('content', COLORS[forced || scheme]);
    });
  };

  window.toggleTheme = () => {
    const current = storedTheme() || systemTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    try {
      if (next === systemTheme()) {
        localStorage.removeItem(KEY); // back to following the system
      } else {
        localStorage.setItem(KEY, next);
      }
    } catch (e) {
      // Storage unavailable (private mode, blocked): still apply for this page.
      document.documentElement.setAttribute('data-theme', next);
      return;
    }
    apply();
  };

  // OS theme changed while following the system: only the meta needs updating, the CSS
  // already follows. Harmless when forced.
  systemDark.addEventListener('change', apply);
  // Toggle clicked in another tab.
  window.addEventListener('storage', (e) => {
    if (e.key === KEY || e.key === null) apply();
  });
  // Page restored from the back/forward cache: the DOM is stale, re-read storage.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) apply();
  });

  apply();
})();
