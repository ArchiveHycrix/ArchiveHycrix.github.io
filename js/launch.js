
/**
 * HYCRIX ENTERTAINMENT - Launch Countdown
 */

(() => {
    const launchDate = new Date("2026-10-16T18:00:00+07:00").getTime();

    /**
     * @param {string} id
     * @returns {HTMLElement | null}
     */
    function getElement(id) {
        return document.getElementById(id);
    }

    function updateCountdown() {
        const comingSoon = getElement("comingSoon");
        const mainWebsite = getElement("mainWebsite");
        const daysEl = getElement("days");
        const hoursEl = getElement("hours");
        const minutesEl = getElement("minutes");
        const secondsEl = getElement("seconds");

        if (!comingSoon || !mainWebsite ||
            !daysEl || !hoursEl || !minutesEl || !secondsEl) {
            console.error("Countdown: Missing required HTML element.");
            return;
        }

        const distance = launchDate - Date.now();

        if (distance <= 0) {
            comingSoon.hidden = true;
            mainWebsite.hidden = false;
            document.body.classList.remove("coming-soon");
            return;
        }

        daysEl.textContent = Math.floor(distance / 86400000);
        hoursEl.textContent = Math.floor((distance % 86400000) / 3600000);
        minutesEl.textContent = Math.floor((distance % 3600000) / 60000);
        secondsEl.textContent = Math.floor((distance % 60000) / 1000);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();
