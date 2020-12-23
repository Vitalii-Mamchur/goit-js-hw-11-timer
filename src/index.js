import css from './styles.css';

const refs = {
  selectorTimer: document.querySelector('#timer-1'),
  daysTimer: document.querySelector('[data-value="days"]'),
  hoursTimer: document.querySelector('[data-value="hours"]'),
  minsTimer: document.querySelector('[data-value="mins"]'),
  secsTimer: document.querySelector('[data-value="secs"]'),
};
console.log(refs.selectorTimer);

const targetDate = new Date('2021-01-01').getTime();
//console.log(targetDate);

function CountdownTimer() { 
  const currentTime = Date.now();
  const time = targetDate - currentTime;
  //console.log(time);
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  //console.log('secs: ' + secs);
  refs.daysTimer.textContent = `${days}` + ":";
  refs.hoursTimer.textContent = `${hours}` + ":";
  refs.minsTimer.textContent = `${mins}` + ":";
  refs.secsTimer.textContent = `${secs}`;
}

function initializeTimer() { 
  CountdownTimer();
  const intervalId = setInterval(() => {
    CountdownTimer();
  }, 1000);
};

initializeTimer();

function pad(value) { 
  return String(value).padStart(2, 0);
}