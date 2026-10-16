document.addEventListener("DOMContentLoaded", () => {

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


    const modal = document.getElementById("versionModal");
    const modalClose = document.getElementById("modalClose");

    const modalVersion = document.getElementById("modalVersion");
    const modalStatus = document.getElementById("modalStatus");
    const modalStatusIcon = document.getElementById("modalStatusIcon");

    const modalProgressText = document.getElementById("modalProgressText");
    const modalProgressFill = document.getElementById("modalProgressFill");

    const modalMessage = document.getElementById("modalMessage");

    const releases = document.querySelectorAll(".release");


    // Kiểm tra popup
    if (!modal) {
        console.error("Vorion Mods: versionModal not found.");
        return;
    }


    // CLICK VERSION
    releases.forEach((release) => {

        release.addEventListener("click", () => {

            const version =
                release.getAttribute("data-version") ||
                "Unknown Version";

            const status =
                release.getAttribute("data-status") ||
                "planned";

            const progress =
                Number(
                    release.getAttribute("data-progress") || 0
                );

            const data =
                statusData[status] ||
                statusData.planned;


            modalVersion.textContent = version;

            modalStatus.textContent = data.label;

            modalStatusIcon.textContent = data.icon;

            modalProgressText.textContent =
                `${progress}%`;

            modalProgressFill.style.width =
                `${progress}%`;

            modalMessage.textContent =
                data.message;


            // HIỆN POPUP
            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        });

    });


    // ĐÓNG POPUP
    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    // Nút X
    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closeModal
        );
    }


    // Click nền tối
    const backdrop =
        document.querySelector(".modal-backdrop");

    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeModal
        );

    }


    // ESC
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeModal();
        }

    });

});