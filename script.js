let totalFiles = 0;
let neededFiles = 0;

// Информация о сервере
function GameDetails(serverName, serverURL, mapName, maxPlayers, steamID, gameMode) {
    document.getElementById("server").innerHTML = "Сервер: " + serverName;
    document.getElementById("map").innerHTML = "Карта: " + mapName;
    document.getElementById("players").innerHTML = "Игроков: 0/" + maxPlayers;
}

// Установка количества файлов
function SetFilesTotal(total) {
    totalFiles = total;
}

// Установка оставшихся файлов
function SetFilesNeeded(needed) {
    neededFiles = needed;
    updateProgress();
}

// Обновление статуса загрузки
function SetStatusChanged(status) {
    document.getElementById("status").innerHTML = status;
    document.getElementById("loading-text").innerHTML = status;

    // Когда статус включает "lua" (независимо от регистра), заполняем прогресс-бар до 100% плавно
    if (status.toLowerCase().includes("lua")) {
        document.getElementById("progress").style.width = "100%";
    }
}

// Загрузка файла
function DownloadingFile(fileName) {
    const text = "Загрузка файла: " + fileName;
    document.getElementById("status").innerHTML = text;
    document.getElementById("loading-text").innerHTML = text;
}

// Прогресс-бар
function updateProgress() {
    if (totalFiles <= 0) return;

    let percent = ((totalFiles - neededFiles) / totalFiles) * 100;
    percent = Math.min(Math.max(percent, 0), 100);

    // Убрал Math.floor для более плавного расчета процента
    document.getElementById("progress").style.width = percent + "%";
}