<?php

namespace Twitter\Http;

class RedirectResponse extends Response
{
    public function __construct(string $url)
    {
        $this->statusCode = 302;
        $this->setHeader('Location', $url);
    }
}
