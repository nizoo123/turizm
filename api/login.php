<?php
require_once 'config.php';

// Yalnız POST request qəbul et
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Yalnız POST request qəbul edilir');
}

// JSON data al
$input = json_decode(file_get_contents('php://input'), true);

// Məlumatları yoxla
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';
$language = $input['language'] ?? 'az';

// Validasiya
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, $language === 'az' ? 'Düzgün e-poçt daxil edin' : 'Please enter a valid email');
}

if (empty($password)) {
    sendResponse(false, $language === 'az' ? 'Şifrə daxil edin' : 'Please enter your password');
}

try {
    $pdo = getDBConnection();
    
    // İstifadəçini tap
    $stmt = $pdo->prepare("SELECT id, name, email, phone, password, preferred_language FROM users WHERE email = ? AND is_active = 1");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    
    if (!$user) {
        sendResponse(false, $language === 'az' ? 'E-poçt və ya şifrə yanlışdır' : 'Invalid email or password');
    }
    
    // Şifrəni yoxla
    if (!password_verify($password, $user['password'])) {
        sendResponse(false, $language === 'az' ? 'E-poçt və ya şifrə yanlışdır' : 'Invalid email or password');
    }
    
    // Son giriş vaxtını yenilə
    $stmt = $pdo->prepare("UPDATE users SET last_login = NOW() WHERE id = ?");
    $stmt->execute([$user['id']]);
    
    // Session yarat
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_name'] = $user['name'];
    $_SESSION['user_email'] = $user['email'];
    
    sendResponse(true, $language === 'az' ? 'Uğurla daxil oldunuz' : 'Login successful', [
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'phone' => $user['phone'],
            'language' => $user['preferred_language']
        ]
    ]);
    
} catch (PDOException $e) {
    sendResponse(false, $language === 'az' ? 'Xəta baş verdi. Yenidən cəhd edin.' : 'An error occurred. Please try again.');
}
?>




