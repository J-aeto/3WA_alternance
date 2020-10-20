<?php

namespace Twitter\Http;

class Request
{
    public function getMethod(): string
    {
        return $_SERVER['REQUEST_METHOD'];
    }

    public function isMethod(string $method): Bool
    {
        if ($method === $this->getMethod()) {
            return true;
        }
        return false;
    }
}
