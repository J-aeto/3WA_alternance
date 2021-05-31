<?php

namespace Twitter\Http;

class Request
{

  protected string $method;
  protected array $params;

  public function __construct(string $method="", array $params = [])
  {
    $this->method = $method ? $method : ($_SERVER['REQUEST_METHOD'] ?? 'GET');

    $this->params = $params ? $params : $_REQUEST;
  }

  public function getMethod(): string
  {
    return $this->method;
  }

  public function isMethod(string $method): bool
  {
    return $this->getMethod() === $method;
  }

  public function get(string $name): ?string
  {
    return $this->params[$name] ?? null;
  }
}
