const main = () => {
    console.log("Youtube Video Detected!");
};

main();

//Makes sure that main runs when we move from one video to another
let lastUrl = location.href;
new MutationObserver(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        if (location.href.includes("youtube.com/watch")) {
            main();
        }
    }
}).observe(document, { subtree: true, childList: true });
