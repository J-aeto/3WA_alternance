<?php

namespace Twitter\Controller;

use Twitter\Http\Request;
use Twitter\Http\Response;
use Twitter\Model\TweetModel;
use Twitter\View\Renderer;

class TweetController
{
    protected Request $request;
    protected Renderer $renderer;
    protected TweetModel $model;

    public function __construct(Request $request, Renderer $renderer, TweetModel $model)
    {
        $this->request = $request;
        $this->renderer = $renderer;
        $this->model = $model;
    }

    public function createTweet(): Response
    {
        if ($this->request->isMethod('POST')) {
            $this->model->save("jason", $this->request->get('content'));

            $response = new Response;
            //header('Location: /');
            $response->setHeader('Location', '/');
            //http_response_code(302);
            $response->setStatusCode(302);

            return $response;
        }
        $html = $this->renderer->display("home");
        $response = new Response;
        $response->setStatusCode(200);
        $response->setContent($html);

        return $response;
    }
}
