<?php 
    //disable caching
    header("Content-Type: application/json");

    //Just read raw input 
    $input = file_get_contents("php://input");

    //we don't need to store it
    echo json_encode(["received" => strlen($input)]);
    exit;
?>