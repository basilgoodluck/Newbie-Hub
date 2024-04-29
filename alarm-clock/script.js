const Alarm = class {
    constructor(clock, alarmList, hour, min, sec){
        this.clock = clock;
        this.alarmList = alarmList;
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.generateClock();
        this.alarmItem();
    }
    getCurrentTime () {
        return new Date();
    }
    generateClock (){
        return setInterval(() => {
            this.clock.innerHTML = `${this.getCurrentTime().getHours().toString().padStart(2, 0)}:${this.getCurrentTime().getMinutes().toString().padStart(2, 0)}:${this.getCurrentTime().getSeconds().toString().padStart(2, 0)}`;
        }, 1000);
    }
    alarmItem () {
        const hou = this.hour;
        const alarm = `<div class="alarm" id="alarm">
            <div class="alarm_Time"><button class="delete_Btn"></button> <p id="alarm_time">${hou}</p></div>
            <div class="alarm-info">
                <p id="alarm_date">${this.getCurrentTime().toDateString()}</p>
                <div class="alarm-button" id="alarm-button">
                    <div class="alarm-toggler"></div>
                </div>
            </div>
        </div>`;

        // return this.alarmList.innerHTML = alarm
        return this.appendAlarm(alarm);
    }

    deleteAlarm () {
        // Implementation for deleting an alarm
    }

    switchAlarm () {
        // Implementation for toggling an alarm
    }

    appendAlarm (alarm) {
        this.alarmList.innerHTML += (alarm);
    }

}

const clockBlock = document.getElementById('currentTime');
const alarmList = document.getElementById('alarms-container');

let hour, min, sec; // Variables to store input values

const alarmBtn = document.getElementById('alarm-button');
const addAlarmBtn = document.getElementById('add-alarm');

addAlarmBtn.addEventListener('click', () => {
    // Update input values each time the button is clicked
    hour = document.getElementById('timeHour').value;
    min = document.getElementById('timeMin').value;
    sec = document.getElementById('timeSec').value;

    // Create a new alarm instance with updated input values
    const alarm = new Alarm(clockBlock, alarmList, hour, min, sec);
});




