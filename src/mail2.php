<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$userName = $_POST['username'];
$userPhone = $_POST['phone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "Форма успешно отправлена";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'erevanovarmen@gmail.com'; // Логин на почте
    $mail->Password   = '86yVL1Ux'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('erevanovarmen@gmail.com', 'Андрей'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('Andrey9053@yandex.ru');  
    

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новая заявка';
        $mail->Body    = "<b>Имя:</b> $userName <br>
        <b>Телефон:</b> $userPhone<br>";
// Проверяем отравленность сообщения
if ($mail->send()) {
   echo "Форма успешно отправлена";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}