// Set the time for the countdown to end (9 PM on Saturdays)
const countdownEndTime = new Date();
countdownEndTime.setHours(21, 0, 0, 0);

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Update the current time every second
setInterval(updateCurrentTime, 1000);

function updateCountdown() {
  const now = new Date();
  let timeDifference = countdownEndTime - now;

  // If the countdown has reached zero, reset it for the next Saturday
  if (timeDifference < 0) {
    const nextSaturday = new Date();
    nextSaturday.setDate(nextSaturday.getDate() + (6 - nextSaturday.getDay()) + 7); // move to next Saturday
    nextSaturday.setHours(21, 0, 0, 0);
    timeDifference = nextSaturday - now;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

function updateCurrentTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
  const currentTime = now.toLocaleDateString('en-US', options);
  document.getElementById('current-time').innerHTML = currentTime;
}
