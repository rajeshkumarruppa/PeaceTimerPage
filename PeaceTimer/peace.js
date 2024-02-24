let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let secondsleft = 0;
let timeCompletedtext = "Your moment is completed";
let timerId = null;
//this function clears previous timer when we switch to click another button on home page
function clearPreviousTime() {
    clearInterval(timerId);
}
//this function will set the timer
function setTimerAndShow(){
    timerTextEl.textContent=secondsleft+"Seconds left";
    timerId=setInterval(startTimer,1000);
}
//start timer
function startTimer(){
    if(secondsleft>1){
        secondsleft=secondsleft-1;
        timerTextEl.textContent=secondsleft+" seconds left";
        
    }else{
        clearPreviousTime();
        timerTextEl.textContent=timeCompletedtext;
    }
}
//buttons
twentySecondsBtnEl.onclick=function(){
    secondsleft=20;
    clearPreviousTime();
    setTimerAndShow();
}
thirtySecondsBtnEl.onclick=function(){
    secondsleft=30;
    clearPreviousTime();
    setTimerAndShow();
}
fortySecondsBtnEl.onclick=function(){
    secondsleft=40;
    clearPreviousTime();
    setTimerAndShow();
}
oneMinuteBtnEl.onclick=function(){
    secondsleft=60;
    clearPreviousTime();
    setTimerAndShow();
}



//second case but its not working properly
/* twentySecondsBtnEl.onclick = function() {
    let n = 20;
    let c = n;
    let uniqueid = setInterval(function() {
        if (c > 1) {
            c = c - 1;
            timerTextEl.textContent = c+"seconds left";
        } else {
            clearInterval(uniqueid);
            timerTextEl.textContent = "Your moment is complete";
            
        }
    }, 1000);
}

thirtySecondsBtnEl.onclick = function() {
    let n = 30;
    let c = n;
    
    let uniqueid = setInterval(function() {
        clearInterval(uniqueid);
        if (c > 1) {
            c = c - 1;
            timerTextEl.textContent = c+"seconds left";
        } else {
            clearInterval(uniqueid);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
}

fortySecondsBtnEl.onclick = function() {
    let n = 40;
    let c = n;
    let uniqueid = setInterval(function() {
        if (c >1) {
            c = c - 1;
            timerTextEl.textContent = c+" seconds left";
        } else {
            clearInterval(uniqueid);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
}
oneMinuteBtnEl.onclick = function() {
    let n = 60;
    let c = n;
    let uniqueid = setInterval(function() {
        if (c > 1) {
            c = c - 1;
            timerTextEl.textContent = c+" seconds left";
        } else {
            clearInterval(uniqueid);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
}*/