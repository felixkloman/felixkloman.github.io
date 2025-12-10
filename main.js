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
