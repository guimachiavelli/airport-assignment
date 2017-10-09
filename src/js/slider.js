class Slider {
  constructor(el) {
    this.el = el;
    this.slideContainer = this.el.querySelector('.slider-items');
    this.slides = this.el.querySelectorAll('.slider-item');

    this.button = this.el.querySelector('.slider__button');
    this.counter = this.el.querySelector('.slider__counter');

    this.index = 0;
    this.interval = 5000;
    this.numberOfSlides = this.slides.length;
    this.originalNumberOfSlides = this.numberOfSlides;
  }

  setup() {
    this.button.addEventListener('click', this.handleButtonClick.bind(this));
    this.cloneItems();
    this.slides[1].classList.add('slider-item--active');
    this.el.classList.add('slider--active');
  }

  handleButtonClick() {
    const oldIndex = this.index;
    const newIndex = this.index + 1;

    if (newIndex > this.originalNumberOfSlides * 2) {
      this.index = 0;
      this.resetSlide(oldIndex);
      return;
    }

    this.slide(newIndex, oldIndex);
  }

  updateCounter(index) {
    this.counter.innerHTML = (index % this.numberOfSlides) + 1;
  }

  cloneItems() {
    let len = this.slides.length;
    const cachedLen = len;
    let i = 0;

    while (len < cachedLen * 3) {
      this.slideContainer.appendChild(this.slides[i].cloneNode(true));
      i += 1;

      if (i >= cachedLen) {
        i = 0;
      }

      len += 1;
    }

    this.slides = this.el.querySelectorAll('.slider-item');
  }

  slide(newIndex, oldIndex) {
    this.index = newIndex;

    this.slides[oldIndex + 1].classList.remove('slider-item--active');
    this.slides[newIndex + 1].classList.add('slider-item--active');

    this.updateCounter(this.index);

    this.slideContainer.style.transform = `translateX(${this.index * -43}%)`;
  }

  resetSlide(oldIndex) {
    const cachedClass = this.slideContainer.className;

    this.slideContainer.className += ' no-animation';
    this.slides[oldIndex + 1].classList.remove('slider-item--active');
    this.slides[0].classList.add('slider-item--active');

    this.updateCounter(this.index);

    this.slideContainer.style.transform = `translateX(0)`;

    setTimeout(() => {
      this.slideContainer.className = cachedClass;
      setTimeout(() => {
        this.slide(this.index + 1, this.index);
      }, 20);
    }, 20);
  }
}

export default Slider;
