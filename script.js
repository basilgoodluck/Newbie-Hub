const Alarm = class {
    constructor(clock, alarmList, hour, min, sec){
        this.clock = clock;
        this.alarmList = alarmList;
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.active = true; 
    }

    getCurrentTime () {
        return new Date();
    }

    generateClock (){
        return setInterval(() => {
            const currentTime = this.getCurrentTime();
            const currentHour = currentTime.getHours();
            const currentMin = currentTime.getMinutes();
            const currentSec = currentTime.getSeconds();

            if (this.active && this.hour === currentHour && this.min === currentMin && this.sec === currentSec) {
                console.log('Ring the alarm!');
            }

            this.clock.innerHTML = `${currentHour.toString().padStart(2, '0')}:${currentMin.toString().padStart(2, '0')}:${currentSec.toString().padStart(2, '0')}`;
        }, 1000);
    }

    alarmItem () {
        const alarm = document.createElement('div');
        alarm.classList.add('alarm');

        const alarmTime = document.createElement('div');
        alarmTime.classList.add('alarm_Time');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete_Btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            this.deleteAlarm(alarm);
        });

        const alarmTimeText = document.createElement('p');
        alarmTimeText.id = 'alarm_time';
        alarmTimeText.textContent = `${this.hour.toString().padStart(2, 0)}:${this.min.toString().padStart(2, 0)}:${this.sec.toString().padStart(2, 0)}`;

        alarmTime.appendChild(deleteBtn);
        alarmTime.appendChild(alarmTimeText);

        const alarmInfo = document.createElement('div');
        alarmInfo.classList.add('alarm-info');

        const alarmDate = document.createElement('p');
        alarmDate.id = 'alarm_date';
        alarmDate.textContent = this.getCurrentTime().toDateString();

        const alarmButton = document.createElement('div');
        alarmButton.classList.add('alarm-button');
        alarmButton.id = 'alarm-button';

        const alarmToggler = document.createElement('div');
        alarmToggler.classList.add('alarm-toggler');
        alarmToggler.classList.add(this.active ? 'active' : '');

        alarmToggler.addEventListener('click', () => {
            this.switchAlarm();
            alarmToggler.classList.toggle('active');
        });

        alarmButton.appendChild(alarmToggler);
        alarmInfo.appendChild(alarmDate);
        alarmInfo.appendChild(alarmButton);

        alarm.appendChild(alarmTime);
        alarm.appendChild(alarmInfo);

        this.alarmList.appendChild(alarm);
    }

    deleteAlarm (alarm) {
        alarm.remove();
    }

    switchAlarm () {
        this.active = !this.active; 
    }

    appendAlarm (alarm) {
        this.alarmList.appendChild(alarm);
    }
}

const clockBlock = document.getElementById('currentTime');
const alarmList = document.getElementById('alarms-container');

// Start the clock immediately
const alarmClock = new Alarm(clockBlock, alarmList, 0, 0, 0);
alarmClock.generateClock();

const addAlarmBtn = document.getElementById('add-alarm');

const inputBoxes = document.querySelectorAll('.input-time .input');
inputBoxes.forEach(box => {
    box.addEventListener('input', (event) =>{
        event.target.value = event.target.value.replace(/\D/g, '');
    });
});

addAlarmBtn.addEventListener('click', () => {
    const hourInput = document.getElementById('timeHour').value.trim();
    const minInput = document.getElementById('timeMin').value.trim();
    const secInput = document.getElementById('timeSec').value.trim();

    const digitRegex = /^\d+$/;

    if (!hourInput.match(digitRegex) || !minInput.match(digitRegex) || !secInput.match(digitRegex)) {
        alert('Please enter numeric values for hour, minute, and second.');
        return;
    }

    const hour = parseInt(hourInput, 10);
    const min = parseInt(minInput, 10);
    const sec = parseInt(secInput, 10);

    if (hour < 0 || hour > 23 || min < 0 || min > 59 || sec < 0 || sec > 59) {
        alert('Please enter valid time values (24-hour format).');
        return; 
    }

    const alarm = new Alarm(clockBlock, alarmList, hour, min, sec);
    alarm.alarmItem();
});
