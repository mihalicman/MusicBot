<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","music_bot");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $sql = "INSERT INTO registration(username,email,password) VALUES('$username','$email','$password');";
        $res = mysqli_query($conn, $sql);
        $conn->close();
        if ($res) {
            header("Location: /");
            exit(); 
        }
    }
?>