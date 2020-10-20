<?php

namespace Twitter\View;

class Renderer
{
    public function display(string $name)
    {
        require_once "pages/{$name}.html.php";
    }
}
