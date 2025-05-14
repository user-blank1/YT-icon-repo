chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local" && changes.chosenIcons) {
    }
});
