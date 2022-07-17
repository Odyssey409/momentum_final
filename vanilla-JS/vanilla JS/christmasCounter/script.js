const counter = document.getElementById("dDay");

function dDayTimer() {
  const christmasEve = new Date("2022-12-24");
  const today = new Date();
  const dDay = christmasEve - today;
  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hour = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((dDay / (1000 * 60)) % 60);
  const seconds = Math.floor((dDay / 1000) % 60);

  counter.innerText = `${day}d ${hour}h ${minutes}m ${seconds}s`;
}

dDayTimer();
setInterval(dDayTimer, 1000);

// document.body.style.backgroundColor = "red";
document.querySelector("div").style.color = "chartreuse";
document.querySelector("div").style.alignContent = "center";
