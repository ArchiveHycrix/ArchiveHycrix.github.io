
/**
 * HYCRIX ENTERTAINMENT - Launch Countdown
 * @param {Date} launchDate Ngày giờ mở website
 */

const launchDate = new Date("2026-10-16T18:00:00+07:00").getTime();

function updateCountdown() {
    const now = Date.now();
    const distance = launchDate - now;

    if (distance <= 0) {
        document.body.classList.remove("coming-soon");
        document.getElementById("comingSoon").hidden = true;
        document.getElementById("mainWebsite").hidden = false;
        clearInterval(countdownTimer);
        return;
    }

    document.getElementById("days").textContent =
        Math.floor(distance / 86400000);

    document.getElementById("hours").textContent =
        Math.floor((distance % 86400000) / 3600000);

    document.getElementById("minutes").textContent =
        Math.floor((distance % 3600000) / 60000);

    document.getElementById("seconds").textContent =
        Math.floor((distance % 60000) / 1000);
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();
