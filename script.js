let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime()
{
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotate = 30*hh + mm/2;
    let mrotate = 6*mm;
    let srotate = 6*ss;

    hour.style.transform = `rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${srotate}deg)`;
}
setInterval(displayTime , 1000);