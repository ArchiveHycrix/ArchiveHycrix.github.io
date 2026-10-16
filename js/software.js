
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("softwareModal");

    if (!modal) return;

    const fields = {
        category: document.getElementById("modalCategory"),
        icon: document.getElementById("modalIcon"),
        title: document.getElementById("modalTitle"),
        description: document.getElementById("modalDescription"),
        type: document.getElementById("modalType"),
        platform: document.getElementById("modalPlatform"),
        status: document.getElementById("modalStatus"),
        note: document.getElementById("modalNote")
    };

    const software = {
        mpx: {
            category: "APPLICATION / 01",
            icon: "MPX",
            title: "Hycrix MPX",
            description:
                "A multimedia software project focused on video and music downloading, designed with creators and everyday media workflows in mind.",
            type: "Multimedia application",
            platform: "Windows",
            status: "Not announced",
            note: "Download links and release details will be published when available."
        },

        rclone: {
            category: "APPLICATION / 02",
            icon: "RCL",
            title: "Rclone Explorer",
            description:
                "A graphical file management project powered by Rclone, intended to make remote storage and file transfers easier to manage.",
            type: "File management utility",
            platform: "Android",
            status: "Not announced",
            note: "Availability and release details will be published when available."
        },

        obs: {
            category: "UTILITY / 01",
            icon: "OBS",
            title: "OBS Record Timer",
            description:
                "A lightweight utility designed to help users work with recording timers for OBS Studio.",
            type: "Recording utility",
            platform: "Windows",
            status: "Not announced",
            note: "Release information and downloads will be provided when available."
        }
    };

    let previousFocus = null;

    /**
 * @param {Object} item
 */
function openModal(item) {
        if (!item) return;

        previousFocus = document.activeElement;

        fields.category.textContent = item.category;
        fields.icon.textContent = item.icon;
        fields.title.textContent = item.title;
        fields.description.textContent = item.description;
        fields.type.textContent = item.type;
        fields.platform.textContent = item.platform;
        fields.status.textContent = item.status;
        fields.note.textContent = item.note;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        modal.querySelector(".modal-close").focus();
    }

    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        if (previousFocus) previousFocus.focus();
    }

    document.querySelectorAll("[data-software]").forEach(card => {
        card.addEventListener("click", () => {
            openModal(software[card.dataset.software]);
        });
    });

    modal.querySelectorAll("[data-close-modal]").forEach(button => {
        button.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {
            closeModal();
        }
    });
});
