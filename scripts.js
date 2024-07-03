function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('current-time').textContent = utcTime;
    document.getElementById('current-day').textContent = dayOfWeek;
}

document.addEventListener('DOMContentLoaded', updateTimeAndDay);
setInterval(updateTimeAndDay, 1000)

function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if(x.className === "topnav") {
        x.className += " responsive";
        /* change topnav to topnav.responsive */
    } else {
        x.className = "topnav";
    }
}
