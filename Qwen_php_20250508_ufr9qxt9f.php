<?php
// send.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Получите данные из формы
  $name = htmlspecialchars($_POST['name']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);

  // Сохраните данные в CSV-файл
  $file = fopen('leads.csv', 'a');
  fputcsv($file, [$name, $phone, $message, date('Y-m-d H:i:s')]);
  fclose($file);

  // Перенаправьте на главную страницу
  header('Location: /index.html');
  exit;
}
?>