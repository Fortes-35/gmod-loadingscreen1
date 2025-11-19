let progress = 0;
const progressBar = document.getElementById("progress");
const statusText = document.getElementById("status");
const loadingText = document.getElementById("loading-text");
const playersText = document.getElementById("players");
const mapText = document.getElementById("map");

function setProgress(target) {
    progress = Math.min(target, 100);
    progressBar.style.width = progress + "%";
}

function smoothIncrease(to) {
    let start = progress;
    let end = to;
    let duration = 1200;
    let startTime = performance.now();

    function animate(time) {
        let t = (time - startTime) / duration;
        if (t > 1) t = 1;

        let value = start + (end - start) * t;
        setProgress(value);

        if (t < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

window.addEventListener("message", function (event) {
    const data = event.data;

    if (data.type === "status") {
        loadingText.textContent = data.text;
        smoothIncrease(progress + 10);
    }

    if (data.type === "download") {
        loadingText.textContent = data.file;
        smoothIncrease(progress + 3);
    }

    if (data.type === "info") {
        mapText.textContent = "Карта: " + data.map;
        playersText.textContent = `Игроков: ${data.players}/${data.maxPlayers}`;
    }

    if (data.type === "lua_started") {
        loadingText.textContent = "Загрузка завершена!";
        smoothIncrease(100);
    }
});
