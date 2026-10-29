
"use strict";

/* VORION MODS — VERSION POPUP */

(() => {
    const statusData = {
        planned: {
            label: "PLANNED",
            icon: "◇",
            message: "More information will be available soon."
        },
        developing: {
            label: "DEVELOPING",
            icon: "⚙",
            message: "Development is currently in progress."
        },
        progress: {
            label: "50% DONE",
            icon: "◐",
            message: "Development is halfway complete."
        },
        "coming-soon": {
            label: "COMING SOON",
            icon: "◈",
            message: "The release is getting closer."
        },
        released: {
            label: "RELEASED",
            icon: "✓",
            message: "This version has been officially released."
        }
    };

    function initialize() {
        const modal = document.getElementById("versionModal");
        const closeButton = document.getElementById("modalClose");
        const backdrop = modal?.querySelector(".modal-backdrop");

        const versionText = document.getElementById("modalVersion");
        const statusText = document.getElementById("modalStatus");
        const statusIcon = document.getElementById("modalStatusIcon");
        const progressText = document.getElementById("modalProgressText");
        const progressFill = document.getElementById("modalProgressFill");
        const messageText = document.getElementById("modalMessage");

        if (
            !modal || !closeButton || !backdrop ||
            !versionText || !statusText || !statusIcon ||
            !progressText || !progressFill || !messageText
        ) {
            console.error("Vorion popup: required HTML element is missing.");
            return;
        }

        let previousFocus = null;

        /**
 * @param {HTMLButtonElement} release
 */
function openModal(release) {
            const version = release.dataset.version || "Vorion release";
            const status = release.dataset.status || "planned";

            const rawProgress = Number(release.dataset.progress || 0);
            const progress = Number.isFinite(rawProgress)
                ? Math.max(0, Math.min(100, rawProgress))
                : 0;

            const data = statusData[status] || statusData.planned;

            versionText.textContent = version;
            statusText.textContent = data.label;
            statusIcon.textContent = data.icon;
            progressText.textContent = `${progress}%`;
            progressFill.style.width = `${progress}%`;
            messageText.textContent = data.message;

            previousFocus = release;

            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");

            closeButton.focus({ preventScroll: true });
        }

        function closeModal() {
            if (!modal.classList.contains("active")) return;

            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");

            if (previousFocus?.isConnected) {
                previousFocus.focus({ preventScroll: true });
            }
        }

        document.querySelectorAll(".release").forEach((release) => {
            release.addEventListener("click", () => {
                openModal(release);
            });
        });

        closeButton.addEventListener("click", closeModal);
        backdrop.addEventListener("click", closeModal);

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, {
            once: true
        });
    } else {
        initialize();
    }
})();
