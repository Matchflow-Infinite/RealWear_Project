document.getElementById("start").addEventListener("click", counterStart);
document.getElementById("stop").addEventListener("click", counterStop);

/*let intervalId;*/ // The setInterval function needs this variable for the clearInterval function to stop the function
var counter = null;
function counterStart() {
    let counterStart = Date.now();
            
    // Use the asynchronous function clearInterval for the variable 'IntervalId' and 'counter'
    /*intervalId*/ counter = setInterval(function() {
        let currentTime = Date.now() - counterStart;
        let hours = (currentTime / 3600000) % 60;
        hours = Math.floor(hours)
        let minutes = (currentTime / 60000) % 60;
        minutes = Math.floor(minutes);
        let seconds = (currentTime / 1000) % 60;
        seconds = Math.round(seconds);
        //False math for the milliseconds
        //let zseconds = (currentTime / 1000);
        //zseconds = Math.round(zseconds);

        //To display the timer in the format 00:00:00
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        else {
            seconds = seconds.toString();
        }

        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }
        else {
            minutes = minutes.toString();
        }

        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        else {
            hours = hours.toString();
        }

        let text = hours + ':' + minutes + ':' + seconds/* + ',' + zseconds*/; //Only the seconds are displayed
        timer.innerHTML = text;
    
    }, 1000);



}

function counterStop() {
    //clearInterval(intervalId)
    clearInterval(counter);
}

function reset() {
    let reset_text = "00:00:00";
    timer.innerHTML = reset_text;
}