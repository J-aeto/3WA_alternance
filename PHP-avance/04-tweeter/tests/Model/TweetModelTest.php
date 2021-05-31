<?php

use PHPUnit\Framework\TestCase;
use Tests\Factory\ConnectionFactory;
use Tests\Factory\TweetFactory;
use Twitter\Database\Connection;
use Twitter\Model\Entity\Tweet;
use Twitter\Model\TweetModel;

class TweetModelTest extends TestCase
{
  protected Connection $connection;
  protected TweetModel $tweetModel;

  protected function setUp(): void
  {
    $this->connection = ConnectionFactory::getConnection();
    $this->tweetModel = new TweetModel($this->connection);

    $this->connection->execute('DELETE FROM tweet');
  }


  public function test_find_return_a_tweet_object()
  {
    // Given we have a tweet in the database
    $this->connection->execute('DELETE FROM tweet');

    TweetFactory::create([
      'author' => 'Toto',
      'content' => "tweet test",
      'likes' => 599
    ]);

    $id = $this->connection->getLastInsertId();

    // When i call find on TweetModel
    $result = $this->tweetModel->find($id);

    // Then result should be instance of tweet class
    $this->assertInstanceOf(Tweet::class, $result);
    $this->assertEquals("Toto", $result->getAuthor());
  }

  public function test_find_will_return_null_if_id_does_not_exist()
  {
    // Given we have no tweet 42 in the database
    // When we call find on tweetModel with id 42
    $result = $this->tweetModel->find(42);

    // Then
    $this->assertNull($result);
  }

  public function test_we_can_find_all_the_tweets()
  {
    //Given, we have inserted 3 tweets in the table
    TweetFactory::createMany(3);
    //When I call findAll method on TweetModel
    $results = $this->tweetModel->findAll();

    //Then I should find 3 tweets
    $this->assertIsArray($results);
    $this->assertCount(3, $results);

    foreach ($results as $tweet) {
      $this->assertInstanceOf(Tweet::class, $tweet);
    }
  }
}
