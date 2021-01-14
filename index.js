class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    this.selectRefs();
    const timerId = setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      // console.log(delta);
      if (delta < 0) {
        clearInterval(timerId);
        return console.log("Your date is wrong!");
      }
      this.getTimerComponents(delta);
    }, 1000);
  }

  selectRefs() {
    this.selectorTimer = document.querySelector(this.selector);
    // console.log(this.selectorTimer);
    this.daysTimer = this.selectorTimer.querySelector('.value[data-value=days]');
    this.hoursTimer = this.selectorTimer.querySelector('.value[data-value=hours]');
    this.minsTimer = this.selectorTimer.querySelector('.value[data-value=mins]');
    this.secsTimer = this.selectorTimer.querySelector('.value[data-value=secs]');
    // console.log(this.daysTimer);
  }

  getTimerComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.updateTextContent(this.daysTimer, days);
    this.updateTextContent(this.hoursTimer, hours);
    this.updateTextContent(this.minsTimer, mins);
    this.updateTextContent(this.secsTimer, secs);
  }

  updateTextContent(elem, value) {
    elem.textContent = `${value}`;
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.start();