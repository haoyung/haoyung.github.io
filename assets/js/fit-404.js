(() => {
  const heading = document.querySelector('.four-o-four');
  if (!heading) return;

  const context = document.createElement('canvas').getContext('2d');
  if (!context) return;

  const fit = () => {
    const style = getComputedStyle(heading);
    const maximum = 12 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    context.font = `${style.fontWeight} ${maximum}px ${style.fontFamily}`;
    const textWidth = context.measureText(heading.textContent.trim()).width;
    if (!textWidth) return;
    const size = maximum * Math.min(1, heading.clientWidth / textWidth);
    const value = `${size}px`;
    if (heading.style.fontSize !== value) heading.style.fontSize = value;
  };

  fit();
  new ResizeObserver(fit).observe(heading);
  document.fonts.ready.then(fit);
  window.addEventListener('resize', fit);
})();
