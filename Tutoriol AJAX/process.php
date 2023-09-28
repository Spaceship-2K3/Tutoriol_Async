<?php

echo 'Processing...';

// todo : check for GET varialbe
if (isset($_GET['name'])){
    echo 'GET: Your name is '. $_GET['name'];
}

// todo : check for POST varialbe
if (isset($_POST['name'])){
    echo 'GET: Your name is '. $_POST['name'];
}