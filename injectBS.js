function injectBootstrapIcons() {
    // Check if the Bootstrap Icons CSS is already injected
    if (!document.getElementById("bootstrap-icons-css")) {
        const link = document.createElement("link");
        link.id = "bootstrap-icons-css";
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css";
        link.type = "text/css";
        document.head.appendChild(link);
    }
}

// Call the inject function when the page loads or when necessary
injectBootstrapIcons();
