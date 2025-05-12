let icons = {};

// Load the simplified icon map
fetch(chrome.runtime.getURL("../assets/bootstrap-icons.json"))
    .then((res) => res.json())
    .then((data) => {
        icons = data;
        displayIcons(Object.keys(icons));
    });

document.getElementById("search").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = Object.keys(icons).filter((name) => name.includes(query));
    displayIcons(filtered);
});

function displayIcons(iconNames) {
    const results = document.getElementById("results");
    results.innerHTML = ""; // Clear previous results

    iconNames.forEach((name) => {
        const div = document.createElement("div");
        div.className = "icon-box";
        div.innerHTML = `<i class="bi bi-${name}" title="${name}"></i>`;
        results.appendChild(div);

        // Attach the hover event listeners directly here for each .icon-box
        div.onmouseover = () => {
            div.style.backgroundColor = "rgb(189, 189, 189)";
        };
        div.onmouseout = () => {
            div.style.backgroundColor = ""; // Reset to default
        };
    });
}
