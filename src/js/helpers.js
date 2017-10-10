function isElementOnScreen(el, delay) {
  const winHeight = window.innerHeight;
  const bounds = el.getBoundingClientRect();
  const elDistanceFromTop = (bounds.top - (winHeight * delay));
  console.log(delay);

  return !((elDistanceFromTop < 0 && bounds.bottom < 0) || (elDistanceFromTop > 0));
}

export { isElementOnScreen };
