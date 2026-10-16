
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectModal");

    if (!modal) return;

    const title = document.getElementById("modalTitle");
    const category = document.getElementById("modalCategory");
    const description = document.getElementById("modalDescription");
    const type = document.getElementById("modalType");
    const platform = document.getElementById("modalPlatform");
    const status = document.getElementById("modalStatus");
    const index = document.getElementById("modalIndex");

    const projects = {
        rclone: {
            number: "01",
            title: "Rclone Explorer",
            category: "SOFTWARE",
            description:
                "A graphical file management project designed to make remote storage and file transfers easier to manage through Rclone.",
            type: "File management utility",
            platform: "Windows / Rclone",
            status: "In Development"
        },

        dungeons: {
            number: "02",
            title: "DungeonsIISodium",
            category: "GAME OPTIMIZATION",
            description:
                "An optimization project for Minecraft Dungeons II, focused on exploring ways to improve performance and gameplay smoothness.",
            type: "Optimization project",
            platform: "Minecraft Dungeons II · PC",
            status: "Experimental"
        },

        crafting: {
            number: "03",
            title: "Crafting Puzzle: Ultimate Progression",
            category: "MINECRAFT MAP",
            description:
                "A vanilla Minecraft puzzle map where players progress through levels by crafting required items or finding creative ways to obtain them.",
            type: "Crafting puzzle",
            platform: "Minecraft Java Edition",
            status: "In Development"
        },

        willowbrook: {
            number: "04",
            title: "Echoes Beyond Willowbrook",
            category: "ARC ADVENTURE MYSTERY",
            description:
                "A single-player Minecraft adventure featuring five main ARCs, with gentle mysteries, investigation, exploration and interconnected secrets.",
            type: "Adventure and mystery map",
            platform: "Minecraft Java Edition",
            status: "Planned"
        },

        mpx: {
            number: "05",
            title: "Hycrix MPX",
            category: "SOFTWARE",
            description:
                "A multimedia application project from HYCRIX ENTERTAINMENT, intended to bring useful media tools together in one place.",
            type: "Multimedia application",
            platform: "Not finalized",
            status: "In Development"
        },

        lockin: {
            number: "06",
            title: "Lock In The Puzzle: Unbound",
            category: "PUZZLE GAME",
            description:
                "An original puzzle game inspired by Lock In by Fleb. The project aims to build its own puzzle challenges and gameplay identity using Unity.",
            type: "Puzzle",
            platform: "Unity · Target platform not finalized",
            status: "Planned"
        }
    };

    let previousFocus = null;

    /**
 * @param {Object} project
 */
function openModal(project) {
        if (!project) return;

        previousFocus = document.activeElement;

        title.textContent = project.title;
        category.textContent = project.category;
        description.textContent = project.description;
        type.textContent = project.type;
        platform.textContent = project.platform;
        status.textContent = project.status;
        index.textContent = `PROJECT ${project.number}`;

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

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            openModal(projects[card.dataset.project]);
        });
    });

    modal.querySelectorAll("[data-close-modal]").forEach(element => {
        element.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
});
