var filesTotal = 0;
var filesNeeded = 0;
var maxPlayers = 0;
var mapName = '';
var playersUrl = 'https://your-php-host.com/players.php'; // ЗАМЕНИТЕ на URL вашего players.php

// Инициализация текста прогресса при старте
document.getElementById('loading-text').innerHTML = 'Загрузка... 0%';

// Функция GMod
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    mapName = mapname;
    maxPlayers = maxplayers;
    document.getElementById('map').innerHTML = 'Карта: ' + mapName;
    loadPlayerCount();
}

// Общее количество файлов
function SetFilesTotal(total) {
    filesTotal = total;
    updateProgress();
}

// Оставшиеся файлы
function SetFilesNeeded(needed) {
    filesNeeded = needed;
    updateProgress();
}

// Статус (Lua Started! и т.д.)
function SetStatusChanged(status) {
    document.getElementById('status').innerHTML = status;
}

// Загрузка файла (статус файла показывается внизу, прогресс — в баре)
function DownloadingFile(fileName) {
    document.getElementById('status').innerHTML = 'Загрузка файла: ' + fileName;
    updateProgress(); // Обновляем прогресс при каждой загрузке файла
}

function updateProgress() {
    if (filesTotal > 0) {
        var percent = Math.round((filesTotal - filesNeeded) / filesTotal * 100);
        document.getElementById('progress').style.width = percent + '%';
        document.getElementById('loading-text').innerHTML = 'Загрузка... ' + percent + '%'; // Всегда показывает прогресс вместо статического текста
    } else {
        document.getElementById('loading-text').innerHTML = 'Загрузка... 0%';
    }
}

function loadPlayerCount() {
    fetch(playersUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('players').innerHTML = 'Игроков на сервере ' + data.players + '/' + data.maxplayers;
        })
        .catch(() => {
            document.getElementById('players').innerHTML = 'Игроков на сервере 0/' + maxPlayers;
        });
}

// Авто-загрузка игроков каждые 5 сек (опционально)
setInterval(loadPlayerCount, 5000);