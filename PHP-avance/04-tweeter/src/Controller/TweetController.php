<?php

namespace Twitter\Controller;

use Twitter\Http\JsonResponse;
use Twitter\Exception\MissingTweetIdException;
use Twitter\Http\RedirectResponse;
use Twitter\Http\Request;
use Twitter\Http\Response;
use Twitter\Model\Entity\Tweet;
use Twitter\Model\TweetModel;
use Twitter\View\Renderer;

class TweetController
{
  protected Renderer $renderer;
  protected TweetModel $model;

  /**
   * constructeur de la classe TweetControlle
   *
   * @param Request $request
   * @param Renderer $renderer
   * @param TweetModel $model
   */
  public function __construct(Renderer $renderer, TweetModel $model)
  {
    $this->renderer = $renderer;
    $this->model = $model;
  }

  /**
   * fonction qui crée un tweet
   *
   * @return Response
   */
  public function createTweet(Request $request): Response
  {
    //1. j'arrive sur le formulaire
    if ($request->isMethod('POST')) {

      $tweet = new Tweet('jason', $request->get('content'));
      $this->model->save($tweet);

      //Enregistrer le tweet en db

      return new RedirectResponse("/");
    }

    $tweets = $this->model->findAll();

    if ($request->get('format') === 'json') {
      $tweetsArray = $this->transformTweetsToArray($tweets);

      $response =  new JsonResponse($tweetsArray);

      return $response;
    }

    $html = $this->renderer->display('home', ['tweets' => $tweets]);

    return new Response($html);
  }

  /**
   * fonction qui supprime un tweet
   *
   * @return Response
   */
  public function deleteTweet(Request $request): Response
  {
    $id = $request->get('tweet_id');

    if ($id === null) {
      throw new MissingTweetIdException("Vous devez préciser l'identifiant du tweet à supprimer (tweet_id).");
    }

    $this->model->delete($id);

    return new RedirectResponse("/");
  }

  protected function transformTweetsToArray(array $tweets): array
  {
    return array_map(fn (Tweet $tweet) => $tweet->transformToArray(), $tweets);
  }
}
