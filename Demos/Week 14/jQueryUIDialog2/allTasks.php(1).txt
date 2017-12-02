<?php

$db = new mysqli("localhost", "ajax", "student", "ToDo");

$sql = "select id, description from tasks";

$stmt = $db->prepare($sql);

$stmt->bind_result($id, $desc);

$stmt->execute();

$tasks = array();
while($stmt->fetch()) {

	$task = array("id"=>$id, "description"=>$desc);
	$tasks[] = $task;

}

echo json_encode($tasks);

?>