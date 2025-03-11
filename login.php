<?php
session_start();
if ($_POST['username'] === 'user1' && $_POST['password'] === 'password12') {
  $_SESSION['user'] = 'user1';
  header('Location: welcome.php');
  exit;
}
?>
<form method="post">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button>Login</button>
</form>