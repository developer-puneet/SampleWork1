<?php
require "connection.php";
if($_POST['user'] == "r"){
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$gender = $_POST['gender'];
	$dob = $_POST['dob'];
	$uname = $_POST['uname'];
	$pass = $_POST['pass'];
	try{
		$query = $conn->prepare("CALL createAccount(:fname,:lname,:email,:gender,:dob,:uname,:pass,@msg)");
		$query->bindParam(':fname',$fname);
		$query->bindParam(':lname',$lname);
		$query->bindParam(':email',$email);
		$query->bindParam(':gender',$gender);
		$query->bindParam(':dob',$dob);
		$query->bindParam(':uname',$uname);
		$query->bindParam(':pass',$pass);
		$query->execute();
		$output = $conn->query("select @msg")->fetch(PDO::FETCH_ASSOC);
		echo $output['@msg'];
	}catch(PDOException $e){
		echo $e;
	}
}
if($_POST['user'] == "l"){
	$uname = $_POST['uname'];
	$pass = $_POST['pass'];
	try{
		$query = $conn->prepare("CALL loginUser(:uname,:pass,@msg)");
		$query->bindParam(':uname',$uname);
		$query->bindParam(':pass',$pass);
		$query->execute();
		$result = $query->fetch(PDO :: FETCH_ASSOC);
		echo $result['UID'];			
	}catch(PDOException $e){
		echo $e;
	}
}
if($_POST['user'] == "edit"){
	$uid = $_POST['uid'];
	$editinfo = $_POST['editinfo'];
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$gender = $_POST['gender'];
	$dob = $_POST['dob'];
	$uname = $_POST['uname'];
	$pass = $_POST['pass'];
	try{
		$query = $conn->prepare("CALL editProfile(:uid,:editinfo,:fname,:lname,:email,:gender,:dob,:uname,:pass,@msg)");
		$query->bindParam(':uid',$uid);
		$query->bindParam(':editinfo',$editinfo);
		$query->bindParam(':fname',$fname);
		$query->bindParam(':lname',$lname);
		$query->bindParam(':email',$email);
		$query->bindParam(':gender',$gender);
		$query->bindParam(':dob',$dob);
		$query->bindParam(':uname',$uname);
		$query->bindParam(':pass',$pass);
		$query->execute();
		$output = $conn->query("select @msg")->fetch(PDO::FETCH_ASSOC);
		echo $output['@msg'];
	}catch(PDOException $e){
		echo $e;
	}
}
?>