var min = 0;
var sec = 0;
var miliSecond = 0;

var displaymin = document.getElementById('displaymin')
var displaysec = document.getElementById('displaysec')
var displaymiliSecond = document.getElementById('displaymiliSecond')
var interval;
function timer(){
    miliSecond++;
    // displaymilisec.innerHTML = milisec
    if(miliSecond == 10){
        miliSecond = 0
        sec++;
        // displaysec.innerHTML = sec
        if(sec == 60){
            sec = 0;
            min++;
        }
        // displaymin .innerHTML = min;
    }
    displaymiliSecond.innerHTML = miliSecond;
    displaysec.innerHTML = sec;
    displaymin.innerHTML = min;
}
function starttimer(){
    interval = setInterval(function(){timer()},100);
}
function pausetimer(){
    clearInterval(interval);
}
function resettimer(){
    pausetimer();
    min = 0;
    sec = 0;
    miliSecond = 0;
    displaymiliSecond.innerHTML = miliSecond;
    displaysec.innerHTML = sec;
    displaymin.innerHTML = min;
}