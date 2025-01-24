document.getElementById("start").addEventListener("click", counterStart);
document.getElementById("stop").addEventListener("click", counterStop);

    /*let intervalId;*/ // The setInterval function needs this variable for the clearInterval function to stop the function
    var counter = null;
    function counterStart() {
        let counterStart = Date.now();
        let elapsedTime = Date.now() - counterStart;
        
        // Use the asynchronous function clearInterval for the variable 'IntervalId' and 'counter'
        /*intervalId*/ counter = setInterval(function() {
            let currentTime = Date.now() - counterStart;
            //let hours = (currentTime / 3600000) % 60;
            //hours = Math.floor(hours)
            let minutes = (currentTime / 60000) % 60;
            minutes = Math.floor(minutes);
            //let zseconds = (currentTime / 100) % 10;
            //zseconds = Math.round(zseconds);
            let seconds = (currentTime / 1000) % 60;
            seconds = Math.round(seconds);
            let text = minutes + ' min.' + ' : ' + seconds + ' sec.';
            timer.innerHTML = text;
        
        }, 1000);

    }

    function counterStop() {
        //clearInterval(intervalId)
        clearInterval(counter);
    }

    function reset() {
        let reset_text = "00 m. : 00 s." 
        timer.innerHTML = reset_text;
    }