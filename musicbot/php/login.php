<?php
    header('Access-Control-Allow-Origin: *');
    $conn = new mysqli("localhost", "root", "", "music_bot");

    if (mysqli_connect_error()) {
        echo mysqli_connect_error();
        exit();
    } else {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM registration WHERE username = '$username'";
        $result = mysqli_query($conn, $sql);

        if ($result && mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            $storedPassword = $row['password'];

            if (password_verify($password, $storedPassword)) {
                echo "Login successful!";
            } else {
                echo "Invalid username or password";
            }
        } else {
            echo "Invalid username or password";
        }

        $conn->close();
    }
?>
