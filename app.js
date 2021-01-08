//Elements call back variables
const daysEL  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl   = document.getElementById('mins');
const secsEl  = document.getElementById('secs');


const birthDay = '30 OCT 2021';
function countDown(){
    const birthDaydate = new Date(birthDay);
    const currentDate = new Date();
    const totalSec = (birthDaydate - currentDate) / 1000;
    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const mins = Math.floor(totalSec / 60)  % 60;
    const secs = Math.floor(totalSec) % 60;


     

    
     daysEL.innerHTML = formatTime(days);
     hoursEl.innerHTML = formatTime(hours);
     minsEl.innerHTML = formatTime(mins);
     secsEl.innerHTML = formatTime(secs);
    
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
//initial call
countDown();

setInterval(countDown, 1000)
