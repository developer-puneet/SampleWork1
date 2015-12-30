<?php
	$dbhost="localhost";
	$dbusername="root";
	$dbuserpass="puni@123";
	$dbname="a9604648_php1";
	try {
    	$conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbusername, $dbuserpass);
    	// set the PDO error mode to exception
    	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
	catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }
?>