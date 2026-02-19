<?php 

    //disabling caching
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Pragma: no-cache");
    header("Content-Type: application/octet-stream");
    
    //generate 5mb of random data
    $size = 5 * 1024 * 1024;
    $data = random_bytes($size);
    
    echo $data;
    exit;
?>