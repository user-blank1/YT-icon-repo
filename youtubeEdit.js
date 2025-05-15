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
const applyPlayImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) currentIcon.remove();

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
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
const applySkipImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) currentIcon.remove();

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
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
const applyVolumeImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i, img");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) {
        currentIcon.remove();
    }

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
    img.style.cssText = `
        z-index: 9999;
        position: absolute;
        pointer-events: none;
        top: 33.3%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35px;
        height: 35px;
    `;

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
};
const applyAutoplay = (buttonEl, id, iconClass, title) => {
    if (!buttonEl) return;
    const currentIcon = buttonEl.querySelector("i");
    const svgIcon = buttonEl.querySelector(".ytp-autonav-toggle-button-container");

    if (svgIcon) svgIcon.remove(); // remove

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
const applyAutoplayImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i, img");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) {
        currentIcon.remove();
    }

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
};
const applyCC = (buttonEl, id, iconClass, title) => {
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
const applyCCImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) currentIcon.remove();

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
};
const applySettings = (buttonEl, id, iconClass, title) => {
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
const applySettingsImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) currentIcon.remove();

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
};
const applyMiniplayer = (buttonEl, id, iconClass, title) => {
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
const applyMiniplayerImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) currentIcon.remove();

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
};
const applyTheater = (buttonEl, id, iconClass, title) => {
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
const applyTheaterImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) currentIcon.remove();

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
};
const applyFullScreen = (buttonEl, id, iconClass, title) => {
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
const applyFullScreenImg = (buttonEl, id, base64data, title) => {
    if (!buttonEl) return;

    const svgIcon = buttonEl.querySelector("svg");
    const currentIcon = buttonEl.querySelector("i");

    if (svgIcon) svgIcon.style.visibility = "hidden";
    if (currentIcon) currentIcon.remove();

    const img = document.createElement("img");
    img.src = base64data;
    img.id = id;
    img.title = title;
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

    buttonEl.style.position = "relative";
    buttonEl.appendChild(img);
};
// LISTEN TO CHANGES IN STORAGE
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local" && changes.chosenIcons) {
        if (!changes.chosenIcons.newValue) {
            clearIconsFromDOM2(); // << your cleanup logic
            return;
        }

        const icons = changes.chosenIcons.newValue;
        const play = document.querySelector(".ytp-play-button");
        const skip = document.querySelector(".ytp-next-button");
        const volume = document.querySelector(".ytp-volume-icon");
        const autoplay = document.querySelector(".ytp-autonav-toggle");
        const cc = document.querySelector(".ytp-subtitles-button");
        const settings = document.querySelector(".ytp-settings-button");
        const miniplayer = document.querySelector(".ytp-miniplayer-button");
        const theater = document.querySelector(".ytp-size-button");
        const fullscreen = document.querySelector(".ytp-fullscreen-button");
        icons.forEach((icon) => {
            if (icon.content === "ICON") {
                if (icon.name[0] === "play") applyPlay(play, "play2", icon.data, icon.data);
                else if (icon.name[0] === "skip") applySkip(skip, "skip", icon.data, icon.data);
                else if (icon.name[0] === "volume") applyVolume(volume, "volume", icon.data, icon.data);
                else if (icon.name[0] === "autoplay") applyAutoplay(autoplay, "autoplay", icon.data, icon.data);
                else if (icon.name[0] === "settings") applySettings(settings, "settings", icon.data, icon.data);
                else if (icon.name[0] === "cc") applyCC(cc, "cc", icon.data, icon.data);
                else if (icon.name[0] === "pip") applyMiniplayer(miniplayer, "miniplayer", icon.data, icon.data);
                else if (icon.name[0] === "theater") applyTheater(theater, "theater", icon.data, icon.data);
                else if (icon.name[0] === "fullscreen") applyFullScreen(fullscreen, "fullscreen", icon.data, icon.data);
            } else if (icon.content === "IMAGE") {
                if (icon.name[0] === "play") applyPlayImg(play, "play2", icon.data, icon.data);
                else if (icon.name[0] === "skip") applySkipImg(skip, "skip", icon.data, icon.data);
                else if (icon.name[0] === "volume") applyVolumeImg(volume, "volume", icon.data, icon.data);
                else if (icon.name[0] === "autoplay") applyAutoplayImg(autoplay, "autoplay", icon.data, icon.data);
                else if (icon.name[0] === "cc") applyCCImg(cc, "cc", icon.data, icon.data);
                else if (icon.name[0] === "settings") applySettingsImg(settings, "settings", icon.data, icon.data);
                else if (icon.name[0] === "pip") applyMiniplayerImg(miniplayer, "miniplayer", icon.data, icon.data);
                else if (icon.name[0] === "theater") applyTheaterImg(theater, "theater", icon.data, icon.data);
                else if (icon.name[0] === "fullscreen") applyFullScreenImg(fullscreen, "fullscreen", icon.data, icon.data);
            }
        });
    }
});
// APPLY SAVED ICONS FROM STORAGE

function applySavedIcons() {
    chrome.storage.local.get("chosenIcons", (result) => {
        const icons = result.chosenIcons;

        if (!icons) {
            clearIconsFromDOM2(); // << handle clearing
            return;
        }
        const settings = document.querySelector(".ytp-settings-button");
        const miniplayer = document.querySelector(".ytp-miniplayer-button");
        const play = document.querySelector(".ytp-play-button");
        const skip = document.querySelector(".ytp-next-button");
        const volume = document.querySelector(".ytp-volume-icon");
        const autoplay = document.querySelector(".ytp-autonav-toggle");
        const cc = document.querySelector(".ytp-subtitles-button");
        const theater = document.querySelector(".ytp-size-button");
        icons.forEach((icon) => {
            if (icon.content === "ICON") {
                if (icon.name[0] === "play") applyPlay(play, "play2", icon.data, icon.data);
                else if (icon.name[0] === "skip") applySkip(skip, "skip", icon.data, icon.data);
                else if (icon.name[0] === "volume") applyVolume(volume, "volume", icon.data, icon.data);
                else if (icon.name[0] === "autoplay") applyAutoplay(autoplay, "autoplay", icon.data, icon.data);
                else if (icon.name[0] === "cc") applyCC(cc, "cc", icon.data, icon.data);
                else if (icon.name[0] === "pip") applyMiniplayer(miniplayer, "miniplayer", icon.data, icon.data);
                else if (icon.name[0] === "settings") applySettings(settings, "settings", icon.data, icon.data);
                else if (icon.name[0] === "theater") applyTheater(theater, "theater", icon.data, icon.data);
                else if (icon.name[0] === "fullscreen") applyFullScreen(fullscreen, "fullscreen", icon.data, icon.data);
            } else if (icon.content === "IMAGE") {
                if (icon.name[0] === "play") applyPlayImg(play, "play2", icon.data, icon.data);
                else if (icon.name[0] === "skip") applySkipImg(skip, "skip", icon.data, icon.data);
                else if (icon.name[0] === "volume") applyVolumeImg(volume, "volume", icon.data, icon.data);
                else if (icon.name[0] === "autoplay") applyAutoplayImg(autoplay, "autoplay", icon.data, icon.data);
                else if (icon.name[0] === "cc") applyCCImg(cc, "cc", icon.data, icon.data);
                else if (icon.name[0] === "pip") applyMiniplayerImg(miniplayer, "miniplayer", icon.data, icon.data);
                else if (icon.name[0] === "settings") applySettingsImg(settings, "settings", icon.data, icon.data);
                else if (icon.name[0] === "theater") applyTheaterImg(theater, "theater", icon.data, icon.data);
                else if (icon.name[0] === "fullscreen") applyFullScreenImg(fullscreen, "fullscreen", icon.data, icon.data);
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

        observer.disconnect(); // Avoid infinite loop

        chrome.storage.local.get("chosenIcons", (result) => {
            const icons = result.chosenIcons || [];
            icons.forEach((icon) => {
                if (icon.name[0] === "volume") {
                    const currentVolumeButton = document.querySelector(".ytp-volume-icon");
                    if (currentVolumeButton) {
                        if (icon.content === "ICON") {
                            applyVolume(currentVolumeButton, "volume", icon.data, icon.data);
                        } else if (icon.content === "IMAGE") {
                            applyVolumeImg(currentVolumeButton, "volume", icon.data, icon.data);
                        }
                    }
                }
            });

            observer.observe(target, {
                attributes: true,
                childList: true,
                subtree: true,
            });
        });
    }
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "clearIcons") {
        const play = document.querySelector(".ytp-play-button");
        const skip = document.querySelector(".ytp-next-button");
        const volume = document.querySelector(".ytp-volume-icon");
        const autoplay = document.querySelector(".ytp-autonav-toggle");
        const cc = document.querySelector(".ytp-subtitles-button");
        const settings = document.querySelector(".ytp-settings-button");
        const miniplayer = document.querySelector(".ytp-miniplayer-button");
        const theater = document.querySelector(".ytp-size-button");
        const fullscreen = document.querySelector(".ytp-fullscreen-button");
        [play, skip, volume, autoplay, cc, settings, miniplayer, theater, fullscreen].forEach((btn) => {
            if (!btn) return;
            const customIcon = btn.querySelector("i, img");
            const svgIcon = btn.querySelector("svg");

            if (customIcon) customIcon.remove();
            if (svgIcon) svgIcon.style.visibility = "visible";
        });
    }
});
function clearIconsFromDOM() {
    const buttons = [
        document.querySelector(".ytp-play-button"),
        document.querySelector(".ytp-next-button"),
        document.querySelector(".ytp-volume-icon"),
        document.querySelector(".ytp-autonav-toggle"),
        document.querySelector(".ytp-subtitles-button"),
        document.querySelector(".ytp-settings-button"),
        document.querySelector(".ytp-miniplayer-button"),
        document.querySelector(".ytp-size-button"),
        document.querySelector(".ytp-fullscreen-button"),
    ];
    buttons.forEach((btn) => {
        if (!btn) return;
        const customIcon = btn.querySelector("i, img");
        const svgIcon = btn.querySelector("svg");
        if (customIcon) customIcon.remove();
        if (svgIcon) svgIcon.style.visibility = "visible"; // restore native icon
    });
}
function clearIconsFromDOM2() {
    document
        .querySelectorAll(
            ".ytp-fullscreen-button i,.ytp-size-button i,.ytp-miniplayer-button i, .ytp-play-button i, .ytp-settings-button i,.ytp-subtitles-button i, .ytp-next-button i, .ytp-volume-icon i, .ytp-autonav-toggle i, .ytp-play-button img, .ytp-next-button img, .ytp-volume-icon img, .ytp-autonav-toggle img,"
        )
        .forEach((el) => el.remove());

    const resetVisibility = (selector) => {
        const svg = document.querySelector(`${selector} svg`);
        if (svg) svg.style.visibility = "visible";
    };

    resetVisibility(".ytp-play-button");
    resetVisibility(".ytp-next-button");
    resetVisibility(".ytp-volume-icon");
    resetVisibility(".ytp-autonav-toggle");
    resetVisibility(".ytp-subtitles-button");
    resetVisibility(".ytp-settings-button");
    resetVisibility(".ytp-miniplayer-button");
    resetVisibility(".ytp-size-button");
    resetVisibility(".ytp-fullscreen-button");
}
