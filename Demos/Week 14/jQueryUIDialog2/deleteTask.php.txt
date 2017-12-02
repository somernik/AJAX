<?php

$db = new mysqli("localhost", "ajax", "student", "ToDo");

$sql = "delete from tasks where id=?";

$stmt = $db->prepare($sql);

$stmt->bind_param("i", $_REQUEST["id"]);

$stmt->execute();

echo $stmt->affected_rows;

?>