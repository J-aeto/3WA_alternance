<?php

use PHPUnit\Framework\TestCase;
use Twitter\Controller\TweetController;
use Twitter\Http\Request;
use Twitter\View\Renderer;

class TweetControllerTest extends TestCase
{
    public function test_verification()
    {
        $request = new Request("GET");
        $renderer = new Renderer;

        $controller = new TweetController($request, $renderer);

        $html = $controller->createTweet();
        $this->assertStringContainsString('<h1>', $html);
        $this->assertStringContainsString('<form', $html);
    }
}
