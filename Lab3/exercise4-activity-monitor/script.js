let activities = [];
let clickCount = 0;
function logActivity(type, detail) {
    const activity = {
        type: type,
        detail: detail,
        time: new Date().toLocaleTimeString()
    };

    activities.push(activity);
    displayLog();
}
function displayLog() {
    const log = document.getElementById("log");
    log.innerHTML = "";

    activities.forEach(act => {
        const li = document.createElement("li");
        li.textContent = `[${act.time}] ${act.type}: ${act.detail}`;
        log.appendChild(li);
    });
}
document.addEventListener("click", () => {
    clickCount++;
    logActivity("Click", "Mouse clicked");

    if (clickCount > 5) {
        alert("Too many clicks detected!");
    }
});

document.addEventListener("keydown", (e) => {
    logActivity("Key Press", e.key);
});

document.addEventListener("focusin", () => {
    logActivity("Focus", "Element focused");
});
function resetLog() {
    activities = [];
    clickCount = 0;
    displayLog();
}
