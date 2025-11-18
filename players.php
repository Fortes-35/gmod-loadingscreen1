<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'SourceQuery.php'; // Путь к скачанному файлу

$server_ip = 'YOUR.SERVER.IP';     // ЗАМЕНИТЕ на IP вашего GMod сервера
$server_port = 27015;              // ЗАМЕНИТЕ на порт (обычно game port)
$timeout = 3;

$Query = new SourceQuery();

try {
    $Query->Connect($server_ip, $server_port, $timeout, SourceQuery::SOURCE);
    $info = $Query->GetInfo();
    $Query->Disconnect();

    echo json_encode([
        'players' => $info['players'],
        'maxplayers' => $info['maxplayers']
    ]);
} catch (Exception $e) {
    echo json_encode(['players' => 0, 'maxplayers' => 0]);
}
?>