
function showTime(){
    let hour = new Date();
    let showHour = hour.getHours();
    let showMinutes = hour.getMinutes();
    let showSeconds = hour.getSeconds();
    let time = showHour + " : " + showMinutes + " : " + showSeconds;
    let watch = document.getElementById('watch');
        watch.innerText = time;
    if(showSeconds < 10){
         time = showHour + " : " + showMinutes + " : " + "0" +  showSeconds;
         watch.innerText = time;
    } if(showMinutes < 10){
        time = showHour + " : " + "0" + showMinutes + " : "  +  showSeconds;
        watch.innerText = time;
    } if(showHour < 10){
        time = "0" + showHour + " : "  + showMinutes + " : "  +  showSeconds;
        watch.innerText = time;
    }
}

setInterval(showTime, 1000);

