<?php
if(empty($_GET["action"])){
echo "Stop playing with my code bitch!";
exit();
}
$userVal = $_GET["action"];
	if($userVal == "1"){
		file_put_contents("../cmds/cmd.txt", "1");
		echo "ON";
	}
	elseif($userVal == "2"){
		file_put_contents("../cmds/cmd.txt", "2");
		echo "OFF";
	}
	else{
		echo "Stop playing with my code bitch!";
	}

?>
