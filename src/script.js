const TARGET = new Date("2027-05-26T00:00:00.000Z").getTime();

const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $ms = document.getElementById("milliseconds");

function update() {
  const remaining = TARGET - Date.now();

  if (remaining <= 0) {
    $days.textContent = "0";
    $hours.textContent = "00";
    $minutes.textContent = "00";
    $ms.textContent = "000";
    return;
  }

  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const milliseconds = remaining % 1000;

  $days.textContent = String(days);
  $hours.textContent = String(hours).padStart(2, "0");
  $minutes.textContent = String(minutes).padStart(2, "0");
  $ms.textContent = String(milliseconds).padStart(3, "0");

  requestAnimationFrame(update);
}

// Kick off at ~50ms intervals via rAF for smooth updates
update();
