class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    timerInterval(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
    }
    
    createTimer(interval) {
        const timerId = this.timerInterval(interval);
        const timerItem = document.querySelector(this.selector);
            timerItem.querySelector('[data-value="days"]').textContent = timerId.days;
            timerItem.querySelector('[data-value="hours"]').textContent = timerId.hours;
            timerItem.querySelector('[data-value="mins"]').textContent = timerId.mins;
            timerItem.querySelector('[data-value="secs"]').textContent = timerId.secs;
    }

    timerAdd() {
        const currentDate = new Date();
        const difference = this.targetDate - currentDate;
        this.createTimer(difference);
        setInterval(() => {
            const currentDate = new Date();
            const difference = this.targetDate - currentDate;
            this.createTimer(difference);
        }, 1000);
    }
}

const currentTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});

currentTimer.timerAdd();