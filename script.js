let stopWatchTag = document.getElementsByClassName("stopWatch")[0];
let startButtonTag = document.getElementsByClassName("startButton")[0];
let pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
let continueButtonTag = document.getElementsByClassName("continueButton")[0];
let restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds = 0,
minutes = 0,
hours = 0;

let startTime = ()=>{
    seconds += 1;
    if(seconds === 60){
        seconds = 0;
        minutes+=1;

        if(minutes === 60){
            minutes = 0;
            hours +=1

            if(hours === 24){
                hours = 0
            }
        }
    }
    let secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
    let minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
    let hoursText = hours < 10 ? "0" + hours.toString() : hours;
    stopWatchTag.textContent = hoursText +":" +minutesText+":"+secondsText;
};

let intervalId;
startButtonTag.addEventListener("click", ()=> {
    clearInterval(intervalId);
    intervalId = setInterval(startTime,1000)
    console.log(intervalId)
});

pauseButtonTag.addEventListener("click", () =>{
    clearInterval(intervalId);
})

continueButtonTag.addEventListener("click",()=>{
    clearInterval(intervalId);
    intervalId = setInterval(startTime,1000);
})

restartButtonTag.addEventListener("click",()=>{
    clearInterval(intervalId);
    (seconds = 0), (minutes = 0), (hours);
    intervalId = setInterval(startTime,1000);
})  

