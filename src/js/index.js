import '../scss/main.scss';
import Slider from './slider';

function main() {
  let sliderEl = document.querySelector('.slider-container');
  let slider = new Slider(sliderEl);
  slider.setup();
  //slider.slide();
  console.log(slider);
}

main();
