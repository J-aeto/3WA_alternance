<?php

namespace Twitter\View;

class Renderer
{
    public function display(string $name): string
    {
        ob_start();
        require_once "pages/{$name}.html.php";
        $html = ob_get_clean();

        return $html;
    }
}
