function applyFullscreenIcon(fullscreenBtn, fullscreenIcon) {
    // Step 1: Remove any existing YouTube-inserted SVGs, or our own previous icons
    fullscreenBtn.querySelectorAll(" img, i").forEach((el) => el.remove());
    fullscreenBtn.querySelectorAll("svg").forEach((el) => (el.style.visibility = "hidden"));
    // Step 2: Inject custom icon
    if (fullscreenIcon.content === "IMAGE") {
        const svgIcon = fullscreenBtn.querySelector("svg");
        if (svgIcon) svgIcon.style.visibility = "hidden";

        const img = document.createElement("img");
        img.src = fullscreenIcon.data;
        img.style.cssText = `
        z-index: 9999;
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35px;
        height: 35px;
    `;
        fullscreenBtn.style.position = "relative";
        fullscreenBtn.appendChild(img);
    } else if (fullscreenIcon.content === "ICON") {
        const svgIcon = fullscreenBtn.querySelector("svg");

        if (svgIcon) svgIcon.style.visibility = "hidden"; // Hide the SVG icon

        // If an icon already exists, update it

        const icon = document.createElement("i");
        icon.className = `bi bi-${fullscreenIcon.data}`;

        icon.title = "ICON";
        icon.style.cssText = `
            color: white !important;
            fill: white !important;
            z-index: 9999;
            position: absolute;
            pointer-events: none;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 18px;
        `;

        fullscreenBtn.style.position = "relative";
        fullscreenBtn.appendChild(icon);
    }
}

const observer = new MutationObserver(() => {
    const fullscreenBtn = document.querySelector(".ytp-fullscreen-button");
    if (!fullscreenBtn) return;

    chrome.storage.local.get("chosenIcons", (result) => {
        const icons = result.chosenIcons;

        if (!icons) {
            clearIconsFromDOM2(); // << handle clearing
            return;
        }
        const chosenIcons = result.chosenIcons || [];
        const fullscreenIcon = chosenIcons.find((obj) => obj.name.includes("fullscreen"));
        if (!fullscreenIcon) return;

        applyFullscreenIcon(fullscreenBtn, fullscreenIcon);
    });
});

// Observe YouTube controls
const controls = document.querySelector(".ytp-right-controls");
if (controls) {
    observer.observe(controls, { childList: true, subtree: true });
}
document.addEventListener("fullscreenchange", () => {
    setTimeout(() => {
        const fullscreenBtn = document.querySelector(".ytp-fullscreen-button");
        if (!fullscreenBtn) return;

        chrome.storage.local.get("chosenIcons", (result) => {
            const chosenIcons = result.chosenIcons || [];
            const fullscreenIcon = chosenIcons.find((obj) => obj.name.includes("fullscreen"));
            if (!fullscreenIcon) return;

            applyFullscreenIcon(fullscreenBtn, fullscreenIcon);
        });
    }, 100); // Slight delay gives YouTube time to re-render the button
});
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "clearIcons") {
        const fullscreen = document.querySelector(".ytp-fullscreen-button");
        [fullscreen].forEach((btn) => {
            if (!btn) return;
            const customIcon = btn.querySelector("i, img");
            const svgIcon = btn.querySelector("svg");

            if (customIcon) customIcon.remove();
            if (svgIcon) svgIcon.style.visibility = "visible";
        });
    }
});

function clearIconsFromDOM2() {
    document.querySelectorAll(".ytp-fullscreen-button i").forEach((el) => el.remove());

    const resetVisibility = (selector) => {
        const svg = document.querySelector(`${selector} svg`);
        if (svg) svg.style.visibility = "visible";
    };

    resetVisibility(".ytp-fullscreen-button");
}
