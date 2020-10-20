<?php

namespace Twitter\Controller;

use Twitter\Http\Request;
use Twitter\View\Renderer;

class TweetController
{
    public function createTweet()
    {
        $request = new Request;
        $renderer = new Renderer;

        if ($request->isMethod('POST')) {
            var_dump("Enregistrement du tweet");
            return;
        }
        $renderer->display("home");
    }
}
