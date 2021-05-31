<?php

namespace Twitter\Model;

use Twitter\Database\Connection;
use Twitter\Model\Entity\Tweet;

class TweetModel
{

  protected Connection $connection;

  public function __construct(Connection $connection)
  {
    $this->connection = $connection;
  }


  public function save(Tweet $tweet)
  {

    $this->connection->execute('INSERT INTO tweet SET content = :content, author = :author, published_at = NOW()', [
      'author' => $tweet->getAuthor(),
      'content' => $tweet->getContent(),
    ]);
  }

  public function delete(int $id)
  {
    $this->connection->execute('DELETE FROM tweet WHERE id = :id', [
      'id' => $id
    ]);
  }

  public function find(int $id)
  {
    $tweet = $this->connection->query('SELECT * FROM tweet WHERE id = :id', ['id' => $id]);

    if (!$tweet) {
      return null;
    }

    return $this->mapArrayToTweet($tweet);
  }

  public function findAll(): array
  {
    $result = $this->connection->queryAll('SELECT * FROM tweet');

    return array_map([$this, 'mapArrayToTweet'], $result);
  }

  public function incrementLikes(int $id)
  {
    $this->connection->execute('UPDATE tweet SET likes = likes + 1 WHERE id = :id', ['id' => $id]);
  }

  protected function mapArrayToTweet(array $arr): Tweet
  {
    return new Tweet($arr['author'], $arr['content'], $arr['published_at'], $arr['likes'], $arr['id']);
  }
}
