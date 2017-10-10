class Player {
  constructor(el) {
    this.el = el;
    this.button = el.querySelector('button');
    this.video = el.querySelector('video');

    this.playingClassName = 'video--is-playing';
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  setup() {
    this.button.addEventListener('click', this.handleButtonClick);
  }

  handleButtonClick() {
    if (this.video.paused === true) {
      this.video.play();
      this.el.classList.add(this.playingClassName);
      return;
    }

    this.video.pause();
    this.el.classList.remove(this.playingClassName);
  }

}

export default Player;
