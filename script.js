//const bULB = document.getElementById("bulb");
// const onBtn = document.getElementById("onBTN");
// const offBtn = document.getElementById("offBTN");

// onBtn.addEventListener("click", function() {
//   bULB.src = "/Images/Lightson.png";
//   bULB.style.width = "200px";
// });

// offBtn.addEventListener("click", function() {
//   bULB.src = "/Images/Off.png";
//   bULB.style.width = "200px";
// });

const bulb = document.getElementById("bulb");
const btn = document.getElementById("toggleBtn");

let isOn = false;

btn.addEventListener("click", () => {
  if (isOn) {
    bulb.src = "Images/On.png";
    bulb.style.width = "200px";
    btn.textContent = "On";
  } else {
    bulb.src = "Images/Off.png";
    bulb.style.width = "200px";
    btn.textContent = "Off";
  }

  isOn = !isOn; // switch state
});
