<!DOCTYPE html>
<html lang="en">
<head>
  <title>PHPExperts.com</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../../public/css/member.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="../../public/js/userinfo.js"></script>
  <script type="text/javascript" src="../../public/js/validation.js"></script>
</head>
<body style="background-color : #ffdcb3">  
  <?php
    require "connection.php";
    $uid = $_GET['uid'];
    try{
    $query = $conn->prepare("CALL userInfo(:uid)");
    $query->bindParam(':uid',$uid);
    $query->execute();
    $result = $query->fetch(PDO :: FETCH_ASSOC);         
  }catch(PDOException $e){
    echo $e;
  }
    include "navigation.php";
    include "userprofile.php";  
    include "footer.php";  
  ?>
  <input id="fnamehdn" type="hidden" value="<?php echo $result['FIRSTNAME'] ?>">
  <input id="lnamehdn" type="hidden" value="<?php echo $result['LASTNAME'] ?>">
   <input id="uidhdn" type="hidden" value="<?php echo $uid ?>">
</body>
</html>