<?php

namespace Twitter\Model;

use Twitter\Database\Connection;

class TweetModel
{
    protected Connection $connexion;

    public function __construct(Connection $connexion)
    {
        $this->connexion = $connexion;
    }


    public function save(string $author, string $content)
    {
        $this->connexion->execute('INSERT INTO tweet SET content = :content, author = :author, published_at = NOW()', [
            'content' => $content,
            'author' => $author
        ]);
    }

    public function find(int $id)
    {
        return $this->connexion->query('SELECT * FROM tweet WHERE id = :id', [
            'id' => $id
        ]);
    }

    public function delete(int $id)
    {
    }

    public function findAll()
    {
    }
}
