const alarm_Btn = document.querySelector('.alarm-button .alarm-toggler');
const alarm_Btn_Handler = document.querySelector('.alarm .alarm-button');
const current_Time = document.getElementById('currentTime');
const delete_Btn = document.querySelectorAll('.alarm .delete_Btn')
const alarm_Date = document.getElementById('alarm_date')

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
