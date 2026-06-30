function goHome() {
    window.location.href = "/";
}

function reloadPage() {
    location.reload();
}

// Auto update server status every 5 seconds
const status = document.querySelector(".status");

setInterval(() => {
    const online = navigator.onLine;

    if (online) {
        status.innerHTML =
        '<span class="dot" style="background:lime"></span>Server Status: Online';
    } else {
        status.innerHTML =
        '<span class="dot"></span>Server Status: Offline';
    }
}, 5000);