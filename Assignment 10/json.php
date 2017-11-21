<?php
    header('Content-Type: application/json');

    $name = $_POST["name"];

    $array = array ('id'=>1,'name'=>$name,'email'=>'student@matc.edu');

    echo json_encode($array);

?>