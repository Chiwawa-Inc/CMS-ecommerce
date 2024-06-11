<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up the email
    $to = 'sanilshakya9@gmail.com';
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: sender@example.com\r\n";
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Failed to send email.';
    }

    // Add message to the contact_messages table
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $dbname = "your_database_name";

    // Create a new PDO instance
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare the SQL statement
        $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (:name, :email, :message)");

        // Bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':message', $message);

        // Execute the statement
        $stmt->execute();

    } catch(PDOException $e) {
        echo 'Failed to send email and add message to the contact_messages table: ' . $e->getMessage();
    }

    // Close the database connection
    $conn = null;

}

header("Location: contact.php?message=sent");
exit;
?>