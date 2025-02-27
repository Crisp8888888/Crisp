<?php
$servername = "localhost"; // replace with your MySQL server address
$dbname = "your_database_name"; // replace with your MySQL database name
$username = "your_username"; // replace with your MySQL username
$password = "your_password"; // replace with your MySQL password
 
try {
  $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
  $stmt = $pdo->query("SELECT * FROM students");
  $students = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
 
  <!DOCTYPE html>
  <html>
 
  <head>
    <title>Student Records</title>
  </head>
 
  <body>
    <h1>Student Records</h1>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Grade</th>
      </tr>
      <?php foreach ($students as $student): ?>
        <tr>
          <td><?php echo htmlspecialchars($student['id']); ?></td>
          <td><?php echo htmlspecialchars($student['first_name']); ?></td>
          <td><?php echo htmlspecialchars($student['last_name']); ?></td>
          <td><?php echo htmlspecialchars($student['age']); ?></td>
          <td><?php echo htmlspecialchars($student['grade']); ?></td>
        </tr>
      <?php endforeach; ?>
    </table>
  </body>
 
  </html>
 
<?php
  $pdo = null;
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}
?>