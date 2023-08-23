/*=====================
  Time Countdown Js 
  ==========================*/

var minutesLabel1 = document.getElementById("callminutes1");
var secondsLabel1 = document.getElementById("callseconds1");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel1.innerHTML = pad(totalSeconds % 60);
    minutesLabel1.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}