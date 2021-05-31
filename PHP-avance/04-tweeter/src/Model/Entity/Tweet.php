<?php

namespace Twitter\Model\Entity;

class Tweet
{
    private string $author;
    private string $content;
    private string $publishedAt;
    private int $likes;
    private ?int $id = null;

    public function __construct(string $author = "", string $content = "", string $publishedAt = "", int $likes = 0, ?int $id = null)
    {
        $this->author = $author;
        $this->content = $content;
        $this->publishedAt = $publishedAt;
        $this->likes = $likes;
        $this->id = $id;
    }

    // Getters
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function getPublishedAt(): ?string
    {
        return $this->publishedAt;
    }

    public function getLikes(): int
    {
        return $this->likes;
    }

    // Setters
    public function setId(int $id)
    {
        $this->id = $id;

        return $this;
    }

    public function setAuthor(string $author)
    {
        $this->author = $author;

        return $this;
    }

    public function setContent(string $content)
    {
        $this->content = $content;

        return $this;
    }

    public function setPublishedAt(string $publishedAt)
    {
        $this->publishedAt = $publishedAt;

        return $this;
    }

    public function transformToArray(): array
    {
        return [
            'author' => $this->getAuthor(),
            'content' => $this->getContent(),
            'publishedAt' => $this->getPublishedAt(),
            'id' => $this->getId()
        ];
    }
}
