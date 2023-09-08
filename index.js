document.getElementById("copyright").innerHTML = new Date().getFullYear();
let currentDay = document.getElementById("current_day");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();

let day = weekDays[date.getDay()];
currentDay.innerHTML = day;

let hour = date.getUTCHours();
let minutes = date.getUTCMinutes();
let seconds = date.getUTCSeconds();


let currentUTC = document.getElementById("current_utc");
currentUTC.innerHTML = date.getTime();
//currentUTC.innerHTML = `${hour.toString().padStart(2, '0')}:
                        //${minutes.toString().padStart(2, '0')}:
                        //${seconds.toString().padStart(2, '0')}`