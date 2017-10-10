import '../scss/main.scss';
import Slider from './slider';
import Reveal from './reveal';

function main() {
  let sliderEl = document.querySelector('.slider-container');
  let slider = new Slider(sliderEl);
  slider.setup();

  let blockquote = document.querySelector('.article__quote');
  let revealQuote = new Reveal(blockquote);
  revealQuote.setup();
}

main();
