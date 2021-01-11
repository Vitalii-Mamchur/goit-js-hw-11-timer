import './styles.css';

const refs = {
  selectorTimer: document.querySelector('#timer-1'),
  daysTimer: document.querySelector('[data-value="days"]'),
  hoursTimer: document.querySelector('[data-value="hours"]'),
  minsTimer: document.querySelector('[data-value="mins"]'),
  secsTimer: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate, resetTimer }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.resetTimer = resetTimer;
  }

  start() {
    setInterval(() => {
      const curentTime = Date.now();
      const delta = this.targetDate - curentTime;
      const time = this.getTimerComponents(delta);
      this.resetTimer(time);
    }, 1000);
  }

  getTimerComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return ({ days, hours, mins, secs });
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }
}

function markupTimer({ days, hours, mins, secs }) {
  refs.daysTimer.textContent = `${days}` + ":";
  refs.hoursTimer.textContent = `${hours}` + ":";
  refs.minsTimer.textContent = `${mins}` + ":";
  refs.secsTimer.textContent = `${secs}`;
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
  resetTimer: markupTimer,
});

timer.start();