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