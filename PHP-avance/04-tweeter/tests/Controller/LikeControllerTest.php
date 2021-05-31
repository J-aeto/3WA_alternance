<?php

use PHPUnit\Framework\TestCase;
use Tests\Factory\ConnectionFactory;
use Tests\Factory\TweetFactory;
use Twitter\Controller\LikeController;
use Twitter\Http\Request;
use Twitter\Model\TweetModel;

class LikeControllerTest extends TestCase
{
    public function test_we_can_like_a_tweet()
    {
        // Given we have a tweet
        TweetFactory::create();

        $id = ConnectionFactory::getConnection()->getLastInsertId();

        // When we send a POST request to likeController
        $controller = new LikeController(new TweetModel(ConnectionFactory::getConnection()));
        $response = $controller->addLike(new Request("POST", [
            'tweet_id' => $id
        ]));

        // Then the tweet should have 1 like int he database
        $tweet = ConnectionFactory::getConnection()->query('SELECT * FROM tweet WHERE id = :id', ['id' => $id]);
        $this->assertEquals(1, $tweet['likes']);

        $this->assertEquals(302, $response->getStatusCode());
        $this->assertEquals('/', $response->getHeader('Location'));
    }
}
