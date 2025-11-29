<?php
require_once 'config.php';

// Session-u məhv et
session_destroy();

sendResponse(true, 'Uğurla çıxış etdiniz');
?>




