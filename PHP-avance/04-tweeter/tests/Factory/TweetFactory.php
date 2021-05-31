<?php

namespace Tests\Factory;

use Twitter\Database\Connection;

class TweetFactory
{
    static public function create(array $data = ['author' => 'test author', 'content' => 'test Content', 'likes' => 0])
    {
        $connection = ConnectionFactory::getConnection();
        $connection->execute('INSERT INTO tweet SET author = :author, content = :content, published_at = NOW(), likes = :likes', $data);
    }

    static public function createMany(int $count = 1, array $data = ['author' => 'test author', 'content' => 'test Content', 'likes' => 0])
    {
        for ($i = 0; $i < $count; $i++) {
            self::create($data);
        }
    }
}
