<?php
	if(empty($_POST["email"]) || empty($_POST["pass"])) {echo "Stop playing with my code bitch!"; exit();}
	$userMail = $_POST["email"];
	$userPass = $_POST["pass"];
	if($userMail == "me@devrohitnair.com" && $userPass == "Love2Create"){
		echo "true";
	}
	else{
		echo "false";
	}

?>
