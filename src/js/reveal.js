import { isElementOnScreen } from './helpers';

class Reveal {
  constructor(el, delay) {
    this.el = el;
    this.hiddenStateClassName = 'reveal--hidden';
    this.handleScroll = this.handleScroll.bind(this);
    this.delay = delay || 1;
  }

  setup() {
    if (isElementOnScreen(this.el, 1)) {
      return;
    }

    this.el.classList.add(this.hiddenStateClassName);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!isElementOnScreen(this.el, this.delay)) {
      return;
    }

    this.el.classList.remove(this.hiddenStateClassName);
    window.removeEventListener('scroll', this.handleScroll);
  }
}

export default Reveal;
