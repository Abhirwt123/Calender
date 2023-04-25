const monthName = new Date().getMonth();
const currentMonth = document.querySelector(".date h1");
const currentDateDay = document.querySelector(".date p");
const dateInMonth = new Date(
  new Date().getFullYear(),
  monthName + 1,
  0
).getDate();
const prevDay = new Date(new Date().getFullYear(), monthName, 1).getDay() - 1;
const currentDays = document.querySelector(".date-box");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
currentMonth.innerHTML = months[monthName];
currentDateDay.innerHTML = new Date().toDateString();

let days = "";

// for getting the previews last days
for (let i = prevDay; i > 0; i--) {
  days += `<div class="empty"></div>`;

  //  for getting the days in a month
}
for (let i = 1; i <= dateInMonth; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}
currentDays.innerHTML = days;
