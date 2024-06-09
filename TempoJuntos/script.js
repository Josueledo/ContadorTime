let usdate = new Date("06-11-2023");

let date = new Date();

let dateDisplay = document.querySelector(`.date`);
let timeDisplay = document.querySelector(`.time`);
let timeDiference = date - usdate;
let daysDiference = timeDiference / (1000 * 60 * 60 * 24);

dateDisplay.innerHTML = `${Math.floor(daysDiference)} dias `;

function getTime() {
  let usdate = new Date("06-11-2023");

  let date = new Date();

  let timeDisplay = document.querySelector(`.time`);
  let timeDiference = date - usdate;

  let seconds = Math.floor((timeDiference / 1000) % 60);
  let minutes = Math.floor((timeDiference / (1000 * 60)) % 60);
  let hours = Math.floor(timeDiference / (1000 * 60 * 60));

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timeDisplay.innerHTML = `
  <div id="hours">
    <span>${hours}</span>
    <label for="hours">Horas</label>
  </div>
  <span class="divider">:</span>
  <div  id="minutes">
    <span>${minutes}</span>
    <label for="minutes">minutes</label>
  </div>
    <span class="divider">:</span>

  <div  id="seconds">
    <span>${seconds}</span>
    <label for="seconds">seconds</label>
  </div>
  `;
}

setInterval(() => {
  getTime();
}, 1000);
