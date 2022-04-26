/* const { duration } = require("moment");
 */
const jours = document.querySelector(".jours span:first-child");
const heures = document.querySelector(".heures span:first-child");
const minutes = document.querySelector(".minutes span:first-child");
const secondes = document.querySelector(".secondes span:first-child");

function update() {
    var today = new Date();
    var newYear = new Date("january 1, 2023 00:00:00");
    var diff = newYear - today;
    var timer = moment.duration(diff, 'milliseconds')
    var a = moment(today);
    var b = moment(newYear);
    jours.innerHTML = -a.diff(b,'days');
    heures.innerHTML =  timer._data.hours;
    minutes.innerHTML = timer._data.minutes;
    secondes.innerHTML = timer._data.seconds;
}
setInterval(update, 1000);