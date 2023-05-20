
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const second = document.querySelector('#seconds')


const currentYear = new Date().getFullYear();
const wedding = new Date(' 2023 July 23 14:30:00');

function updateCounter() {
   const currentTime = new Date();
   const diff = wedding - currentTime;

   const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
   const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
   const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
   const secondLeft = Math.floor(diff / 1000) % 60;

   days.innerText = daysLeft;
   hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
   minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
   seconds.innerText = secondLeft < 10 ? '0' + secondLeft : secondLeft;
}

updateCounter();

setInterval(updateCounter, 1000);

function playAudio() {
   var audio = document.getElementById("myAudio");
   audio.play();
   document.removeEventListener("touchstart", playAudio);
}

document.addEventListener("DOMContentLoaded", function () {
   document.addEventListener("click", playAudio);
   document.addEventListener("touchstart", playAudio);
});