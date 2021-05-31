<?php

use Twitter\Controller\TweetController;
use Twitter\Database\Connection;
use Twitter\Http\Request;
use Twitter\Model\TweetModel;
use Twitter\View\Renderer;

require "vendor/autoload.php";

$controller = new TweetController(
  new Renderer,
  new TweetModel(
    new Connection("localhost", "twitter", "root", "", 3306)
  )
);

$response = $controller->createTweet(new Request());

$response->send();
