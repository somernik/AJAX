<?php
    header('Content-type: application/json');

    $db = new mysqli("localhost", "ajax", "student", "AJAXSortable");
    
    $sql = "select * from tasks order by rank";
    
    $stmt = $db->prepare($sql);
    
    $stmt->bind_result($id, $desc, $rank);
    
    $stmt->execute();
    
    $tasks = array();
    while($stmt->fetch()) {
        $task = array("id"=>$id, "description"=>$desc, "rank"=>$rank);
        $tasks[] = $task;
    }
   

    echo json_encode($tasks);
?>