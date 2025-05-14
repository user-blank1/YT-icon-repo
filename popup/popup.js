let icons = {};

let chosenIcons = [];

chrome.storage.local.get("chosenIcons", (result) => {
    if (Array.isArray(result.chosenIcons)) {
        chosenIcons = result.chosenIcons;

        // Optional: restore the icons visually on load
        chosenIcons.forEach((icon) => {
            const target = document.querySelector(`[name="${icon.name[0]}"]`);
            if (target) {
                if (icon.content === "NotAnIMG") {
                    target.querySelector(".what-it-becomes").innerHTML = `<i class="bi bi-${icon.data}" title="${icon.data}"></i>`;
                } else {
                    target.querySelector(".what-it-becomes").innerHTML = `<img id="custom-image-preview-2" src="${icon.data}" alt="${icon.data}">`;
                }
                target.classList.add("add-border");
            }
        });
    } else {
        console.log("No chosenIcons found or invalid format in storage");
    }
});
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let flag = false;
let clickedIdx = 0;
Array.from(document.querySelectorAll(".pairing-up")).forEach((div) => {
    div.addEventListener("click", () => {
        if (flag === false) {
            div.style.backgroundColor = "rgb(189, 189, 189)";
            iconChoices(div);
        }
    });
});
function iconChoices(div) {
    flag = true;
    div.classList.add("add-border");
    getIcon().then((chosenIcon) => {
        if (chosenIcon.includes("custom")) {
            const file = fileInput.files[0];
            const imageUrl = URL.createObjectURL(file);
            div.querySelector(".what-it-becomes").innerHTML = `<img id ="custom-image-preview-2" src="${imageUrl}" alt="${file.name}">`;

            const reader = new FileReader();
            reader.onload = () => {
                const base64Data = reader.result; // base64 encoded image
                chosenIcons.push({ data: base64Data, name: [div.getAttribute("name")], content: "IMAGE" });
            };
            reader.readAsDataURL(file);
        } else if (chosenIcon) {
            div.querySelector(".what-it-becomes").innerHTML = `<i class="bi bi-${chosenIcon}" title="${chosenIcon}"></i>`;
            chosenIcons.push({ data: chosenIcon, name: [div.getAttribute("name")], content: "ICON" });
        }
        div.style.backgroundColor = "";
        flag = false;
    });
}
const getIcon = () => {
    return new Promise((resolve) => {
        const results = document.getElementById("results");

        const handleClick = (e) => {
            const iconEl = e.target.closest(".icon-box i");
            if (!iconEl) return;

            const iconName = iconEl.getAttribute("title");
            results.removeEventListener("click", handleClick); // remove listener after selection
            resolve(iconName);
        };
        const handleClick2 = () => {
            const iconName = "custom-" + fileInput.files[0].name.split(".")[0];
            resolve(iconName);
        };

        results.addEventListener("click", handleClick);
        document.getElementById("custom-image-upload-button").addEventListener("click", handleClick2);
    });
};

const fileInput = document.getElementById("custom-image-upload");
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    document.getElementById("custom-image-upload-button").style.display = "block";
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("saveBtn").addEventListener("click", () => {
    chrome.storage.local.set({ chosenIcons: chosenIcons });
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

document.getElementById("clearBtn").addEventListener("click", () => {
    chosenIcons = [];

    Array.from(document.querySelectorAll(".pairing-up")).forEach((div) => {
        div.classList.remove("add-border");
    });
    Array.from(document.querySelectorAll(".pairing-up")).forEach((div) => {
        div.querySelector(".what-it-becomes").innerHTML = "";
    });
    chrome.storage.local.remove("chosenIcons", () => {
        console.log("chosenIcons removed");
    });
});

chrome.storage.local.get("chosenIcons", (result) => {
    // Check if there are any stored values for "chosenIcons"
    if (result.chosenIcons) {
        result.chosenIcons.forEach((icon) => {
            if (icon.content == "ICON") {
                document
                    .querySelector(`[name="${icon.name[0]}"]`)
                    .querySelector(".what-it-becomes").innerHTML = `<i class="bi bi-${icon.data}" title="${icon.data}"></i>`;
            } else {
                document
                    .querySelector(`[name="${icon.name[0]}"]`)
                    .querySelector(".what-it-becomes").innerHTML = `<img id ="custom-image-preview-2" src="${icon.data}" alt="customIMG">`;
            }
        });
    } else {
        console.log("No chosenIcons found in storage");
    }
});
