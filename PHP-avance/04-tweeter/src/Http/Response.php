<?php

namespace Twitter\Http;

class Response
{

    protected int $statusCode = 200;
    protected string $content = "";
    protected array $headers = [];

    public function send()
    {
        // 1. Mettre en place le code HTTP correspondant
        http_response_code($this->statusCode);

        // 2. Ajouter tous les entêtes
        foreach ($this->headers as $name => $value) {
            header("$name: $value");
        }

        // 3. Afficher le contenu de la réponse
        echo $this->content;
    }

    public function setHeader(string $name, string $value)
    {
        $this->headers[$name] = $value;
    }

    public function getHeader(string $name): ?string
    {
        return $this->headers[$name] ?? null;
    }

    public function getStatusCode(): int
    {
        return $this->statusCode;
    }

    public function setStatusCode(int $code)
    {
        $this->statusCode = $code;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content)
    {
        $this->content = $content;
    }

    public function getHeaders(): array
    {
        return $this->headers;
    }
}
