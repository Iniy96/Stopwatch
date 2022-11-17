const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetbtn=document.getElementById("Reset");

let min = 0;
let sec = 0;
let count = 0;
let isTimerRunning = false;

function start() {
  isTimerRunning = true;
  stopwatch();
}

function stop() {
  isTimerRunning = false;
}
function reset() {
  isTimerRunning = false;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
}

function stopwatch() {
  if (isTimerRunning == true) {
    count += 1;
    setTimeout("stopwatch()", 10);

    if (count == 100) {
      sec += 1;
      count = 0;
      if (sec == 60) {
        min += 1;
        sec = 0;
      }
    }
    let countstring = count;
    let secstring = sec;
    let minstring =min;
    if(countstring<10){
        countstring ="0"+countstring;
    }
    if(secstring<10){
        secstring ="0"+secstring;
    }
    if(minstring<10){
        minstring ="0"+minstring;
    }

    document.getElementById("count").innerHTML = countstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("min").innerHTML = minstring;
  }
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetbtn.addEventListener("click",reset)