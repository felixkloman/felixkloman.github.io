document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("comments-toggle");
  const commentsBox = document.getElementById("comments-box");
  const sendBtn = document.getElementById("send-comment");

  console.log("Script loaded ✅");

  if (toggleBtn && commentsBox) {
    toggleBtn.addEventListener("click", () => {
      console.log("Button clicked 🎯");

      // if the box is hidden, show it
      if (commentsBox.style.display === "none" || commentsBox.style.display === "") {
        commentsBox.style.display = "flex";
        commentsBox.style.flexDirection = "column";
        commentsBox.style.position = "fixed";
        commentsBox.style.bottom = "80px";
        commentsBox.style.right = "40px";
        commentsBox.style.width = "260px";
        commentsBox.style.background = "#faf9f6";
        commentsBox.style.border = "1px solid #111";
        commentsBox.style.padding = "12px";
        commentsBox.style.borderRadius = "12px";
        commentsBox.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
      } else {
        commentsBox.style.display = "none";
      }
    });
  }

  if (sendBtn && commentsBox) {
    sendBtn.addEventListener("click", () => {
      const textarea = commentsBox.querySelector("textarea");
      if (textarea.value.trim() !== "") {
        alert("Comment submitted!");
        textarea.value = "";
        commentsBox.style.display = "none";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("comments-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        successMessage.classList.remove("hidden");
        successMessage.classList.add("show");

        setTimeout(() => {
          successMessage.classList.remove("show");
          setTimeout(() => {
            successMessage.classList.add("hidden");
          }, 500);
        }, 2500);
      } else {
        alert("something went wrong, try again :)");
      }
    });
  }
});
// --- Smooth one-by-one footstep fade animation ---
const track = document.querySelector(".footsteps-track");

if (track) {
  const totalSteps = 6; // how many footprints across
  const spacing = 35;   // pixels between steps

  for (let i = 0; i < totalSteps; i++) {
    const step = document.createElement("img");
    step.src = "images/footprint.png"; // your correct file name
    step.classList.add("footprint");
    step.style.left = `${i * spacing}px`;
    step.style.animationDelay = `${i * 0.8}s`; // stagger timing
    track.appendChild(step);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const sky = document.getElementById('sky-object');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const colonEl = document.getElementById('colon');
  if (!sky || !hoursEl || !minutesEl || !colonEl) return;

  function updateSky() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    // Position across 24 hours
    const position = (totalMinutes / 1440) * 100;
    sky.style.left = position + '%';

    // Determine sun or moon
    if (position <= 33 || position > 66) {
      sky.classList.add('moon');
      document.body.style.backgroundColor = '#f6f3ed';
    } else {
      sky.classList.remove('moon');
      document.body.style.backgroundColor = '#f9f5e9';
    }

    // Format time
    const hrs = hours.toString().padStart(2, '0');
    const mins = minutes.toString().padStart(2, '0');
    hoursEl.textContent = hrs;
    minutesEl.textContent = mins;
  }

  function blinkColon() {
  colonEl.style.opacity = colonEl.style.opacity === '0' ? '1' : '0';
}


  updateSky();
  setInterval(updateSky, 30000); // update time position
  setInterval(blinkColon, 1000); // blink colon once per second
});
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typing");
  const text = "RANDOM SHIT";

  let index = 0;

  function typeLoop() {
    // Type until full
    if (index < text.length) {
      el.textContent = text.substring(0, index + 1);
      index++;
      setTimeout(typeLoop, 110); // typing speed
    }

    // Once fully typed — wait 3 seconds, then reset
    else {
      setTimeout(() => {
        el.textContent = "";
        index = 0;
        typeLoop();  // restart typing
      }, 3000); // hold duration
    }
  }

  typeLoop();
});

document.addEventListener("DOMContentLoaded", () => {

const picks = [

{
date: "3.16.26",
bet: "Lakers ML",
odds: "+128",
units: 1,
result: "pending"
},

{
date: "3.9.26",
bet: "Knicks/Clippers Under 220.5",
odds: "-108",
units: 1,
result: "loss"
},

{
date: "3.8.26",
bet: "Celtics ML",
odds: "-109",
units: 5,
result: "win"
},

{
date: "3.7.26",
bet: "Stuttgard ML",
odds: "-105",
units: 5,
result: "loss"
},



];

const latest = picks[0];

document.getElementById("pick-bet").textContent = latest.bet;
document.getElementById("pick-odds").textContent =
`${latest.odds} • ${latest.units}u`;

let wins = 0;
let losses = 0;
let units = 0;

picks.forEach(p => {

if (p.result === "win") {
  wins++;

  if (p.odds.startsWith("+")) {
    units += (parseInt(p.odds) / 100) * p.units;
  } else {
    units += (100 / Math.abs(parseInt(p.odds))) * p.units;
  }
}

if (p.result === "loss") {
losses++;
units -= p.units;
}

});

document.getElementById("pick-record").textContent =
`${wins}-${losses}`;

document.getElementById("pick-units").textContent =
`${units.toFixed(2)}u`;

// Last 5 results
const last5 = picks
  .filter(p => p.result !== "pending")
  .slice(0, 5)
  .map(p => {
    if (p.result === "win") return "W";
    if (p.result === "loss") return "L";
    if (p.result === "push") return "P";
  })
  .join(" ");

document.getElementById("pick-last5").textContent = last5 || "-";

});