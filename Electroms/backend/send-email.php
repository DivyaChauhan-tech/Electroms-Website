<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

function loadEnv($path = '.env') {
    if (!file_exists($path)) {
        return false;
    }
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') === false || strpos($line, '#') === 0) {
            continue;
        }
        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);
        $_ENV[$key] = $value;
        putenv("$key=$value");
    }
    return true;
}
$envLoaded = loadEnv('../.env') || loadEnv('.env');
if (!$envLoaded) {
    error_log("Warning: .env file not found");
}

header('Access-Control-Allow-Origin: ' . getenv('ALLOWED_ORIGIN'));
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}



if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['debug'])) {
    echo json_encode([
        'env_loaded' => $envLoaded,
        'MAIL_HOST' => getenv('MAIL_HOST') ? 'SET' : 'NOT SET',
        'MAIL_USERNAME' => getenv('MAIL_USERNAME') ? 'SET' : 'NOT SET',
        'MAIL_PASSWORD' => getenv('MAIL_PASSWORD') ? 'SET' : 'NOT SET',
        'MAIL_FROM_EMAIL' => getenv('MAIL_FROM_EMAIL') ? 'SET' : 'NOT SET',
        'MAIL_TO_EMAIL' => getenv('MAIL_TO_EMAIL') ? 'SET' : 'NOT SET',
        'MAIL_PORT' => getenv('MAIL_PORT') ? 'SET' : 'NOT SET',
    ]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents('php://input'), true);
    $name     = trim(htmlspecialchars($input['name'] ?? ''));
    $email    = trim($input['email'] ?? '');
    $contact  = trim($input['contact'] ?? '');
    $country  = trim(htmlspecialchars($input['country'] ?? ''));
    $category = trim(htmlspecialchars($input['category'] ?? ''));
    $message  = trim(htmlspecialchars($input['message'] ?? ''));

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Name, email, and message are required'
    ]);
    exit;
}

$email = filter_var($email, FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid email address'
    ]);
    exit;
}

if (!empty($contact)) {
    if (!preg_match('/^[0-9]+$/', $contact)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Phone number must contain only digits. No letters or special characters allowed'
        ]);
        exit;
    }

    if (strlen($contact) !== 10) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Phone number must be exactly 10 digits'
        ]);
        exit;
    }

    if (!preg_match('/^[6-9][0-9]{9}$/', $contact)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Phone number must start with 6, 7, 8, or 9'
        ]);
        exit;
    }
}


    try {
        $required_env = ['MAIL_HOST', 'MAIL_USERNAME', 'MAIL_PASSWORD', 'MAIL_FROM_EMAIL', 'MAIL_TO_EMAIL'];
        foreach ($required_env as $env_var) {
            if (!getenv($env_var)) {
                throw new Exception("Missing environment variable: $env_var");
            }
        }

        $mail = new PHPMailer(true);        
        $mail->isSMTP();
        $mail->Host = getenv('MAIL_HOST');
        $mail->SMTPAuth = true;
        $mail->Username = getenv('MAIL_USERNAME');
        $mail->Password = getenv('MAIL_PASSWORD');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = getenv('MAIL_PORT') ?: 587;
        $mail->Timeout = 10;
        $mail->SMTPKeepAlive = false;

        $mail->setFrom(getenv('MAIL_FROM_EMAIL'), getenv('MAIL_FROM_NAME') ?: 'Contact Form');
        $mail->addAddress(getenv('MAIL_TO_EMAIL'));

        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Message from $name";
        $mail->Body = "
            <h3>New Contact Message</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Contact:</strong> $contact</p>
            <p><strong>Country:</strong> $country</p>
            <p><strong>Category:</strong> $category</p>
            <p><strong>Message:</strong> $message</p>
        ";
        $mail->AltBody = "New Contact Message\n\nName: $name\nEmail: $email\nContact: $contact\nCountry: $country\nCategory: $category\nMessage: $message";

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } catch (Exception $e) {
        error_log("Email error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to send email: ' . $e->getMessage()]);
    }
    exit;
}
?>
