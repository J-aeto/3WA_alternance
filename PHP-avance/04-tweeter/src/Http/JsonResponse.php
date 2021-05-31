<?php

namespace Twitter\Http;

use Twitter\Http\Response;

class JsonResponse extends Response
{
    public function __construct($data, int $statusCode = 200)
    {
        $json = json_encode($data, JSON_UNESCAPED_UNICODE);

        // if ($json === false) {
        //     // throw new ImpossibleJsonTransformation()
        // }

        $this->statusCode = $statusCode;
        $this->setContent($json);
        $this->setHeader('Content-Type', 'application/json');
    }
}
