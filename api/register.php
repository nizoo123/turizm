<?php
require_once 'config.php';

// Yalnız POST request qəbul et
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Yalnız POST request qəbul edilir');
}

// JSON data al
$input = json_decode(file_get_contents('php://input'), true);

// Məlumatları yoxla
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$password = $input['password'] ?? '';
$language = $input['language'] ?? 'az';

// Validasiya
if (empty($name)) {
    sendResponse(false, $language === 'az' ? 'Ad daxil edin' : 'Please enter your name');
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, $language === 'az' ? 'Düzgün e-poçt daxil edin' : 'Please enter a valid email');
}

if (strlen($password) < 6) {
    sendResponse(false, $language === 'az' ? 'Şifrə ən azı 6 simvol olmalıdır' : 'Password must be at least 6 characters');
}

try {
    $pdo = getDBConnection();
    
    // E-poçtun mövcudluğunu yoxla
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);
    
    if ($stmt->fetch()) {
        sendResponse(false, $language === 'az' ? 'Bu e-poçt artıq qeydiyyatdan keçib' : 'This email is already registered');
    }
    
    // Şifrəni hash et
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // İstifadəçini əlavə et
    $stmt = $pdo->prepare("INSERT INTO users (name, email, phone, password, preferred_language) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$name, $email, $phone, $hashedPassword, $language]);
    
    $userId = $pdo->lastInsertId();
    
    // Session yarat
    $_SESSION['user_id'] = $userId;
    $_SESSION['user_name'] = $name;
    $_SESSION['user_email'] = $email;
    
    sendResponse(true, $language === 'az' ? 'Qeydiyyat uğurla tamamlandı' : 'Registration successful', [
        'user' => [
            'id' => $userId,
            'name' => $name,
            'email' => $email
        ]
    ]);
    
} catch (PDOException $e) {
    sendResponse(false, $language === 'az' ? 'Xəta baş verdi. Yenidən cəhd edin.' : 'An error occurred. Please try again.');
}
?>




