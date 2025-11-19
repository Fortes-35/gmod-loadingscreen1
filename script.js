let totalFiles = 0;
let neededFiles = 0;
let luaStarted = false;

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
    
    // Проверяем, началась ли загрузка Lua
    if (status.includes("Lua") || status.toLowerCase().includes("started")) {
        luaStarted = true;
        // Заполняем прогресс-бар до конца при запуске Lua
        document.getElementById("progress").style.width = "100%";
        document.getElementById("loading-text").innerHTML = "Lua started";
    }
}

// Загрузка файла
function DownloadingFile(fileName) {
    const text = "Загрузка файла: " + fileName;
    document.getElementById("status").innerHTML = text;
    document.getElemenфlet totalFiles = 0;
let neededFiles = 0;
let luaStarted = false;

// Информация о сервере
function GameDetails(serverName, serverURL, mapName, maxPlayers, steamID, gameMode) {
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
    
    // Проверяем, началась ли загрузка Lua
    if (status.includes("Lua") || status.toLowerCase().includes("started")) {
        luaStarted = true;
        // Заполняем прогресс-бар до конца при запуске Lua
        document.getElementById("progress").style.width = "100%";
        document.getElementById("loading-text").innerHTML = "Lua started";
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

    let percent = Math.floor(((totalFiles - neededFiles) / totalFiles) * 100);
    percent = Math.min(Math.max(percent, 0), 100);

    document.getElementById("progress").style.width = percent + "%";
    
    // Если загрузка завершена и Lua еще не началась
    if (percent === 100 && !luaStarted) {
        document.getElementById("loading-text").innerHTML = "Загрузка завершена";
    }
}

// Функция для принудительной установки статуса Lua started (для тестирования)
function SetLuaStarted() {
    luaStarted = true;
    document.getElementById("progress").style.width = "100%";
    document.getElementById("loading-text").innerHTML = "Lua started";
    document.getElementById("status").innerHTML = "Lua started";
}tById("loading-text").innerHTML = text;
}

// Прогресс-бар
function updateProgress() {
    if (totalFiles <= 0) return;

    let percent = Math.floor(((totalFiles - neededFiles) / totalFiles) * 100);
    percent = Math.min(Math.max(percent, 0), 100);

    document.getElementById("progress").style.width = percent + "%";
    
    // Если загрузка завершена и Lua еще не началась
    if (percent === 100 && !luaStarted) {
        document.getElementById("loading-text").innerHTML = "Загрузка завершена";
    }
}

// Функция для принудительной установки статуса Lua started (для тестирования)
function SetLuaStarted() {
    luaStarted = true;
    document.getElementById("progress").style.width = "100%";
    document.getElementById("loading-text").innerHTML = "Lua started";
    document.getElementById("status").innerHTML = "Lua started";
}