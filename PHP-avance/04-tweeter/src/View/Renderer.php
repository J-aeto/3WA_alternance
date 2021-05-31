<?php


namespace Twitter\View;

class Renderer
{

  public function display(string $name, array $variables): string
  {
    //on crée des variables identiques aux clés et valeurs du tableau variables
    extract($variables);

    // On ouvre un tampon mémoire
    ob_start();
    // L'affichage va se confiner dans le tampon mémoire
    require "pages/{$name}.html.php";
    // Je prends le contenu du tampon (donc l'affichage)
    $html = ob_get_clean();
    // Et je le retourne
    return $html;
  }
}
