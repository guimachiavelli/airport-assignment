import '../scss/main.scss';
import Slider from './slider';
import Reveal from './reveal';
import ShrinkHeader from './shrink-header';
import Player from './player';

function main() {
  const sliderEl = document.querySelector('.slider-container');
  const slider = new Slider(sliderEl);
  slider.setup();

  const blockquote = document.querySelector('.article__quote');
  const revealQuote = new Reveal(blockquote);
  revealQuote.setup();

  const statistics = document.querySelector('.statistics');
  const revealStatistics = new Reveal(statistics, 0.5);
  revealStatistics.setup();

  const header = document.querySelector('.site-header');
  const shrinkHeader = new ShrinkHeader(header);
  shrinkHeader.setup();

  const playerEl = document.querySelector('.player');
  const player = new Player(playerEl);
  player.setup();
}

main();
