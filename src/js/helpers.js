function isElementOnScreen(el) {
  const winHeight = window.innerHeight;
  const bounds = el.getBoundingClientRect();
  const elDistanceFromTop = (bounds.top - winHeight);

  return !((elDistanceFromTop < 0 && bounds.bottom < 0) || (elDistanceFromTop > 0));
}

export { isElementOnScreen };
