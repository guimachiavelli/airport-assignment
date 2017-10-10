class ShrinkHeader {
  constructor(el) {
    this.el = el;
    this.handleScroll = this.handleScroll.bind(this);
    this.height = el.getBoundingClientRect().height;
    this.retractedClass = 'site-header--small';
  }

  setup() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.body.scrollTop > this.height) {
      this.el.classList.add(this.retractedClass);
      return;
    }

    this.el.classList.remove(this.retractedClass);
  }
}

export default ShrinkHeader;
