<?php
require_once 'config.php';

// Session-un mövcudluğunu yoxla
if (isset($_SESSION['user_id']) && isset($_SESSION['user_name'])) {
    sendResponse(true, 'Session aktiv', [
        'user' => [
            'id' => $_SESSION['user_id'],
            'name' => $_SESSION['user_name'],
            'email' => $_SESSION['user_email'] ?? ''
        ]
    ]);
} else {
    sendResponse(false, 'Session yoxdur');
}
?>




