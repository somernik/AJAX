<?php


    $db = new mysqli("localhost", "ajax", "student", "AJAXSortable");
	$sql = "update tasks set rank = ? where id= ?";
	$stmt = $db->prepare($sql);
	$tasks = $_POST["task"];
	$counter = 0;
	
foreach($tasks as $rank=>$taskId) {
    $stmt->bind_param("ii", $rank, $taskId);
    $stmt->execute();
}

	/*

		order[rank] = 2
	*/



?>