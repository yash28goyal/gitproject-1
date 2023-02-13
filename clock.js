let a;
setInterval(() => {
a = new Date();
hours = a.getHours();
minute = a.getMinutes();
second = a.getSeconds();
if (hours > 12) {
    hours -= 12;
} else if (hours == 0) {
    hours = 12;
}
if (hours < 10){
    hours = "0" + hours;
}
if (minute < 10 ){
    minute = "0" + minute;
}
if (second < 10 ){
    second = "0" + second;
}
document.getElementById('hours').innerHTML=hours;
document.getElementById('minute').innerHTML=minute;
document.getElementById('second').innerHTML=second;
}, 1000);