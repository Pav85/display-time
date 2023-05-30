let today = new Date();
let day = today.getDay();
const daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const todayIs = "Today is : " + daysList[day] + ".";

console.log(todayIs);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let prepand = hour >= 12 ? "PM" : "AM";

hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

if (hour === 0 && prepand === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}

if (second < 10) {
  second = "0" + second;
}

const createEl = document.createElement("h1");

const timeDisplay =
  "Current time is : " + hour + " " + prepand + " " + minute + ":" + second;

console.log(timeDisplay);

document.getElementById("time").textContent = timeDisplay;

document.getElementById("body").prepend(createEl);

createEl.textContent = todayIs;
