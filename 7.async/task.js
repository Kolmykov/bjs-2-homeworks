class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some((element) => element.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({ time, callback, canCall: true });
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(
			(element) => element.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() =>
			this.alarmCollection.forEach((element) => {
				if (element.time === this.getCurrentFormattedTime() && element.canCall) {
					element.canCall = false;
					element.callback();
				}
			}), 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((element) => (element.canCall = true));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}