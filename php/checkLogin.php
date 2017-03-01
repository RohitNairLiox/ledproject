<?php
	if(empty($_POST["email"]) || empty($_POST["pass"])) {echo "Stop playing with my code!"; exit();}
	$userMail = $_POST["email"];
	$userPass = $_POST["pass"];
	if($userMail == "xyz@yourdomain.com" && $userPass == "LoveJavaScript!"){
		echo "true";
	}
	else{
		echo "false";
	}

?>
