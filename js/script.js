document.addEventListener("DOMContentLoaded", () => {

    if (window.SITE_CONFIG.maintenance === true) {

        document.body.innerHTML = `
            <div class="maintenance-screen">

                <div class="maintenance-glow glow-left"></div>
                <div class="maintenance-glow glow-right"></div>

                <div class="maintenance-content">

                    <div class="maintenance-logo">
                        HYCRIX
                        <span>ENTERTAINMENT</span>
                    </div>

                    <div class="maintenance-loader">
                        <div class="loader-ring"></div>
                        <div class="loader-dot"></div>
                    </div>

                    <p class="maintenance-label">
                        SYSTEM UPDATE
                    </p>

                    <h1>
                        We're building<br>
                        something <span>better.</span>
                    </h1>

                    <p class="maintenance-description">
                        Hycrix Entertainment is currently undergoing
                        scheduled maintenance.
                        <br>
                        We'll be back shortly.
                    </p>

                    <div class="maintenance-status">
                        <span class="status-dot"></span>
                        SYSTEM MAINTENANCE
                    </div>

                </div>

                <div class="maintenance-footer">
                    HYCRIX ENTERTAINMENT · 2026
                </div>

            </div>
        `;

        document.body.classList.add("maintenance-mode");
    }

});

/* Minecraft dropdown: mobile tap support */
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-menu");

        if (!button || !menu) return;

        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const willOpen = !dropdown.classList.contains("open");

            dropdowns.forEach((item) => {
                item.classList.remove("open");
                item.querySelector(".dropbtn")
                    ?.setAttribute("aria-expanded", "false");
            });

            if (willOpen) {
                dropdown.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }
        });

        menu.addEventListener("click", (event) => {
            const link = event.target.closest("a");

            if (link) {
                dropdown.classList.remove("open");
                button.setAttribute("aria-expanded", "false");
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (event.target.closest(".dropdown")) return;

        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
            dropdown.querySelector(".dropbtn")
                ?.setAttribute("aria-expanded", "false");
        });
    });
});
