<?php
//письмо
$message = '';
$message .= '<h1>Email first form</h1>';
$message .= '<p>Name: '.$_POST['name1'].'</p>';
$message .= '<p>Email: '.$_POST['email1'].'</p>';
$message .= '<p>Address: '.$_POST['adress1'].'</p>';
$message .= '<p>Phone: '.$_POST['phone1'].'</p>';
$message .= '<p>Country: '.$_POST['country1'].'</p>';

$to = 'vovkadavidyuk@gmail.com'.',';
$to .=$_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Massage first form', $spectext.$message.'</body></html>', $headers);
if ($m) {echo 1;} else {echo 0;}