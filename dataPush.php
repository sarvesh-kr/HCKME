<?php
$servername = "";
$username = "";
$password = "";
$dbname = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$first_name = mysqli_real_escape_string($conn, $_REQUEST['regFirstName']);
$middle_name = mysqli_real_escape_string($conn, $_REQUEST['regMiddleName']);
$last_name = mysqli_real_escape_string($conn, $_REQUEST['regLastName']);
$uemail = mysqli_real_escape_string($conn, $_REQUEST['uemail']);
$regPass = mysqli_real_escape_string($conn, $_REQUEST['regPass']);

$sql = "INSERT INTO regData (FirstName, MiddleName, LastName, Email, Pass)
VALUES ('$first_name', '$middle_name', '$last_name', '$uemail', '$regPass')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>