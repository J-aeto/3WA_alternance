<?php

use Twitter\Controller\TweetController;

require "vendor/autoload.php";

$controller = new  TweetController;

$controller->createTweet();
