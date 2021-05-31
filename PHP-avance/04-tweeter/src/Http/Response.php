<?php

namespace Twitter\Http;

class Response
{
  protected int $statusCode = 200;
  protected string $content = "";
  protected array $headers = [
    'Content-Type' => 'text/html'
  ];

  public function __construct(string $content = "", int $statusCode = 200, array $headers = ["Content-Type" => "text/html"])
  {
    $this->content = $content;
    $this->statusCode = $statusCode;
    $this->headers = $headers;
  }

  // -------- GETTERS --------
  public function getStatusCode(): int
  {
    return $this->statusCode;
  }
  public function getContent(): string
  {
    return $this->content;
  }
  public function getHeader(string $name): string
  {
    return $this->headers[$name] ?? null;
  }

  //---------- SETTERS ----------

  public function setStatusCode(string $statusCode)
  {
    $this->statusCode = $statusCode;
  }
  public function setContent(string $content)
  {
    $this->content = $content;
  }
  public function setHeader(string $name, string $value)
  {
    $this->headers[$name] = $value;
  }

  //-----------

  public function send()
  {
    // 1. Mettre en place le code HTTP correspondant
    http_response_code($this->statusCode);

    // 2. Ajouter tous les entêtes
    foreach ($this->headers as $name => $value) {
      header("$name: $value");
    }

    // 3. Afficher le contenu de la reponse
    echo $this->content;
  }
}
