const applyPlay = (buttonEl, id, iconClass, title) => {
    if (!buttonEl) return;
    const currentIcon = buttonEl.querySelector("i");
    const svgIcon = buttonEl.querySelector("svg");

    if (svgIcon) svgIcon.style.visibility = "hidden"; // Hide the SVG icon

    // If an icon already exists, update it
    if (currentIcon) {
        currentIcon.className = `bi bi-${iconClass}`;
        currentIcon.title = title;
    } else {
        const icon = document.createElement("i");
        icon.className = `bi bi-${iconClass}`;
        icon.id = id;
        icon.title = title;
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

        buttonEl.style.position = "relative";
        buttonEl.appendChild(icon);
    }
};
const applySkip = (buttonEl, id, iconClass, title) => {
    if (!buttonEl) return;
    const currentIcon = buttonEl.querySelector("i");
    const svgIcon = buttonEl.querySelector("svg");

    if (svgIcon) svgIcon.style.visibility = "hidden"; // Hide the SVG icon

    // If an icon already exists, update it
    if (currentIcon) {
        currentIcon.className = `bi bi-${iconClass}`;
        currentIcon.title = title;
    } else {
        const icon = document.createElement("i");
        icon.className = `bi bi-${iconClass}`;
        icon.id = id;
        icon.title = title;
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

        buttonEl.style.position = "relative";
        buttonEl.appendChild(icon);
    }
};
const applyVolume = (buttonEl, id, iconClass, title) => {
    if (!buttonEl) return;
    const currentIcon = buttonEl.querySelector("i");
    const svgIcon = buttonEl.querySelector("svg");

    if (svgIcon) svgIcon.style.visibility = "hidden"; // Hide the SVG icon

    // If an icon already exists, update it
    if (currentIcon) {
        currentIcon.className = `bi bi-${iconClass}`;
        currentIcon.title = title;
    } else {
        const icon = document.createElement("i");
        icon.className = `bi bi-${iconClass}`;
        icon.id = id;
        icon.title = title;
        icon.style.cssText = `
            color: white !important;
            fill: white !important;
            z-index: 9999;
            position: absolute;
            pointer-events: none;
            top: 32%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 18px;
        `;

        buttonEl.style.position = "relative";
        buttonEl.appendChild(icon);
    }
};

// LISTEN TO CHANGES IN STORAGE
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local" && changes.chosenIcons) {
        const icons = changes.chosenIcons.newValue;
        const play = document.querySelector(".ytp-play-button");
        const skip = document.querySelector(".ytp-next-button");
        const volume = document.querySelector(".ytp-volume-icon");
        icons.forEach((icon) => {
            if (icon.name[0] !== "uploadedImage") {
                if (icon.name[0] === "play") {
                    applyPlay(play, "play2", icon.data, icon.data);
                } else if (icon.name[0] === "skip") {
                    applySkip(skip, "skip", icon.data, icon.data);
                } else if (icon.name[0] === "volume") {
                    const currentVolumeButton = document.querySelector(".ytp-volume-icon");
                    applyVolume(currentVolumeButton, "volume", icon.data, icon.data);
                }
            }
        });
    }
});

// APPLY SAVED ICONS FROM STORAGE
function applySavedIcons() {
    chrome.storage.local.get("chosenIcons", (result) => {
        const icons = result.chosenIcons || [];
        const play = document.querySelector(".ytp-play-button");
        const skip = document.querySelector(".ytp-next-button");
        const volume = document.querySelector(".ytp-volume-icon");
        icons.forEach((icon) => {
            if (icon.name[0] !== "uploadedImage") {
                if (icon.name[0] === "play") {
                    applyPlay(play, "play2", icon.data, icon.data);
                }
                if (icon.name[0] === "skip") {
                    applySkip(skip, "skip", icon.data, icon.data);
                }
                if (icon.name[0] === "volume") {
                    const currentVolumeButton = document.querySelector(".ytp-volume-icon");
                    applyVolume(currentVolumeButton, "volume", icon.data, icon.data);
                }
            }
        });
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WAIT FOR YOUTUBE BUTTONS TO BE IN DOM
function waitForYouTubeControls(callback) {
    const check = () => {
        const playBtn = document.querySelector(".ytp-play-button");
        if (playBtn) {
            callback();
            return true;
        }
        return false;
    };

    if (check()) return;

    const observer = new MutationObserver(() => {
        if (check()) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// TRIGGER WHEN YOUTUBE SPA NAVIGATION OCCURS
["yt-navigate-finish", "yt-page-data-updated"].forEach((event) => {
    window.addEventListener(event, () => {
        waitForYouTubeControls(() => {
            applySavedIcons();
        });
    });
});

// INITIAL RUN ON PAGE LOAD
waitForYouTubeControls(() => {
    applySavedIcons();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Volume dissapearing fix
// Select the target element
const target = document.querySelector(".ytp-volume-icon");

if (target) {
    let volumeChangeTimeout;
    const observer = new MutationObserver(() => {
        clearTimeout(volumeChangeTimeout);
        volumeChangeTimeout = setTimeout(onVolumeIconChanged, 100);
    });

    observer.observe(target, {
        attributes: true,
        childList: true,
        subtree: true,
    });

    function onVolumeIconChanged() {
        console.log("Change detected in ytp-volume-icon (debounced)");

        // Temporarily stop observing to avoid infinite loop
        observer.disconnect();

        chrome.storage.local.get("chosenIcons", (result) => {
            const icons = result.chosenIcons || [];
            icons.forEach((icon) => {
                if (icon.name[0] === "volume") {
                    const currentVolumeButton = document.querySelector(".ytp-volume-icon");
                    if (currentVolumeButton) {
                        applyVolume(currentVolumeButton, "volume", icon.data, icon.data);
                    }
                }
            });

            // Reconnect observer after DOM changes
            observer.observe(target, {
                attributes: true,
                childList: true,
                subtree: true,
            });
        });
    }
}
