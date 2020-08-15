// var count = 0;
// var stopCout =
//     setInterval(function () {
//         count++;
//         console.log(count);
//         var d = new Date();
//         var t = d.toLocaleTimeString();
//         document.getElementById("dateAndTime").innerHTML =
//             ("<br>" + count + " - " + " YAQOOB PATEL  " + d + " " + t + "<br>");

//     }, 1000);

// function clearTime() {
//     clearInterval(stopCout);
// }

var interval;
var min = 0;
var sec = 0;
var msec = 0;
var i = 0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
console.log(min);
console.log(sec);
console.log(msec);

function timer() {
  msec++;
  msecheading.innerHTML = msec;
  console.log(msecheading);
  if (msec >= 10) {
    sec++;
    secheading.innerHTML = sec;
    msec = 0;
    document.getElementById("start").disabled = true;
  } else if (sec >= 60) {
    min++;
    sec = 0;
    msec = 0;
    minheading.innerHTML = min;
  }
}
function start() {
  interval = setInterval(timer, 100);
  document.getElementById("pause").disabled = false;
}
var i = 0;
function pause() {
  i++;

  clearInterval(interval);
  document.getElementById("start").disabled = false;
  var pa_msec = document.getElementById("msec").innerHTML;
  var pa_sec = document.getElementById("sec").innerHTML;
  var pa_min = document.getElementById("min").innerHTML;
  console.log(pa_msec);
  console.log(pa_sec);
  console.log(pa_min);
  var backReturn = memoryarr(pa_min, pa_sec, pa_msec, i);

  document.getElementById("lap1").innerHTML = backReturn;
  document.getElementById("pause").disabled = true;
}

function memoryarr(a, b, c, i) {
  var memory = [];
  memory.push(a, b, c);

  return (
    "lap_" +
    i +
    " = " +
    memory[0] +
    " min " +
    memory[1] +
    " sec  " +
    memory[2] +
    " msec"
  );
}

function reset() {
  msec = 0;
  sec = 0;
  min = 0;
  i = 0;
  msecheading.innerHTML = 0;
  secheading.innerHTML = 0;
  minheading.innerHTML = 0;
  document.getElementById("lap1").innerHTML =
    "lap_" + 0 + " = " + 0 + " min " + 0 + " sec  " + 0 + " msec";
  pause1();
  document.getElementById("start").disabled = false;
}

function pause1() {
  clearInterval(interval);
}
