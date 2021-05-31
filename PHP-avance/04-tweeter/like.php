<?php

use Twitter\Controller\LikeController;
use Twitter\Database\Connection;
use Twitter\Http\Request;
use Twitter\Model\TweetModel;

require_once "vendor/autoload.php";

$controller = new LikeController(
    new TweetModel(
        new Connection("localhost", "twitter", "root", "")
    )
);

$response = $controller->addLike(new Request());

$response->send();
