
/* HYCRIX: THE HOLLOW — Automatic Halloween Theme */

(() => {
    "use strict";

    const TIME_ZONE = "Asia/Ho_Chi_Minh";

    // true: thử giao diện ngay
    // false: tự bật/tắt theo lịch chính thức
    const TEST_MODE = false;

    const START = "2026-10-30T00:00";
    const END   = "2026-11-01T06:00";

    function getVietnamTime() {
        const parts = new Intl.DateTimeFormat("en-GB", {
            timeZone: TIME_ZONE,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23"
        }).formatToParts(new Date());

        const values = {};

        for (const part of parts) {
            if (part.type !== "literal") {
                values[part.type] = part.value;
            }
        }

        return `${values.year}-${values.month}-${values.day}` +
            `T${values.hour}:${values.minute}`;
    }

    function updateHollowTheme() {
        const now = getVietnamTime();
        const scheduled = now >= START && now < END;
        const active = TEST_MODE || scheduled;

        document.body.classList.toggle(
            "hollow-active",
            active
        );

        document.documentElement.dataset.hollowMode =
            TEST_MODE ? "test" : scheduled ? "active" : "normal";

        // Đổi tiêu đề mà không làm mất nội dung Hero
        const subtitle = document.getElementById("home-title-sub");

        if (subtitle) {
            subtitle.textContent = active
                ? "THE HOLLOW"
                : "ENTERTAINMENT";
        }

        // Đồng bộ tiêu đề trình duyệt
        document.title = active
            ? "HYCRIX: THE HOLLOW | Hycrix Entertainment"
            : "Hycrix Entertainment";
    }

    function initialize() {
        updateHollowTheme();

        window.setInterval(updateHollowTheme, 15000);

        document.addEventListener("visibilitychange", () => {
            if (!document.hidden) {
                updateHollowTheme();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initialize,
            { once: true }
        );
    } else {
        initialize();
    }
})();
