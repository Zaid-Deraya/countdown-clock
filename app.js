const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const myTime = new Date(`December 30 ${currentYear} 00:00:00`);

function updateCountDown() {
    const currentTime = new Date();
    const diff = myTime - currentTime;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60) % 24;
    const m = Math.floor(diff/1000/60) % 60;
    const s = Math.floor(diff/1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h: h;
    minutes.innerHTML = m < 10 ? '0' + m: m;
    seconds.innerHTML = s < 10 ? '0' + s: s;
    document.getElementById('end').innerHTML = "Countdown ends on"+" "+myTime;

}

setInterval(updateCountDown, 1000);
