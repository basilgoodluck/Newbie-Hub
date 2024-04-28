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
const timeMin = document.querySelector('.timeMin')
const timeSec = document.querySelector('.timeSec')

// alarm_parody.id = "alarm_parody"


alarm_Btn_Handler.addEventListener('click', ()=>{
    alarm_Btn.classList.toggle('active')
    alarm_Btn.parentNode.parentNode.parentNode.classList.toggle('active')
})

const clock = function () {
    const now = new Date()
    
    const hours = now.getHours().toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)

    const time = `${hours}:${minutes}:${seconds}`
    current_Time.innerHTML = time
}

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
    num_array.push(`<h4>${i.toString().padStart(2, 0)}</h4>`)
}

// nums.innerHTML = num_array.join()

timeMin.innerHTML = num_array.join()