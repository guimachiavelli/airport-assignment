import { isElementOnScreen } from './helpers';

class Reveal {
  constructor(el) {
    this.el = el;
    this.hiddenStateClassName = 'article__quote--hidden';
    this.handleScroll = this.handleScroll.bind(this);
  }

  setup() {
    if (isElementOnScreen(this.el)) {
      return;
    }

    this.el.classList.add(this.hiddenStateClassName);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!isElementOnScreen(this.el)) {
      return;
    }

    this.el.classList.remove(this.hiddenStateClassName);
    window.removeEventListener('scroll', this.handleScroll);
  }
}

export default Reveal;
