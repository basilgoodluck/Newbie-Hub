const alarm_Btn = document.querySelector('.alarm-button .alarm-toggler');
const alarm_Btn_Handler = document.querySelector('.alarm .alarm-button');
const current_Time = document.getElementById('currentTime');
const delete_Btn = document.querySelectorAll('.alarm .delete_Btn')
const alarm_Date = document.getElementById('alarm_date')
const add_alarm_btn = document.querySelector('.add-alarm')
const alarm = document.querySelector('.alarms-container .alarm')
const alarm_container = document.querySelector('.container .alarms-container')
const alarm_parody = alarm.cloneNode(true)
const nums = document.querySelector('.input-time')
const timeHour = document.querySelector('.timeHour')
const timeMin = document.querySelector('.timeMin')
const timeSec = document.querySelector('.timeSec')


const clock = function () {
    const now = new Date()
    
    const hours = now.getHours().toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)

    const time = `${hours}:${minutes}:${seconds}`
    current_Time.innerHTML = time
}

alarm_Btn_Handler.addEventListener('click', ()=>{
    alarm_Btn.classList.toggle('active')
    alarm_Btn.parentNode.parentNode.parentNode.classList.toggle('active')
})

setInterval(clock, 1000)

delete_Btn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.parentNode.parentNode.style.display = "none"
    })
})

add_alarm_btn.addEventListener('click', ()=>{
    const form = ``
    return alarm_container.append(alarm_parody)
})

let num_array = []

for (var i = 0; i <= 59; i++){
    num_array.push(`<h4>${i.toString().padStart(2, 0)}</h4>`);
}

timeMin.innerHTML = num_array.join('');
timeSec.innerHTML = num_array.join('');

let hour_array = [];
for (var i = 0; i <= 11; i++) {
    hour_array.push(`<h4>${i.toString().padStart(2, 0)}</h4>`);
}

timeHour.innerHTML = hour_array.join('');

const h4Hour = timeHour.querySelector('h4').offsetHeight;

timeHour.addEventListener('scroll', function () {
    const scrollTop = timeHour.scrollTop;

    const index = Math.floor(scrollTop / h4Hour);

    const newScrollTop = index * h4Hour;

    timeHour.scrollTop = newScrollTop
})

const h4Min = timeMin.querySelector('h4').offsetHeight;

timeMin.addEventListener('scroll', function () {
    const scrollTop = timeMin.scrollTop;

    const index = Math.floor(scrollTop / h4Min)

    const newScrollTop = index * h4Min

    timeMin.scrollTop = newScrollTop
})

const h4Sec = timeMin.querySelector('h4').offsetHeight;

timeSec.addEventListener('scroll', function () {
    const scrollTop = timeSec.scrollTop;

    const index = Math.floor(scrollTop / h4Sec)

    const newScrollTop = index * h4Sec

    timeSec.scrollTop = newScrollTop
})


