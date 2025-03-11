<?php
session_start();
if (!isset($_SESSION['user'])) header('Location: login.php');
?>
<h1>Hello <?= $_SESSION['user'] ?></h1>
<form method="post" action="logout.php">
  <button>Logout</button>
</form>