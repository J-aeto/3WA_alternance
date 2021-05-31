<?php

namespace Twitter\Controller;

use Twitter\Http\RedirectResponse;
use Twitter\Http\Request;
use Twitter\Http\Response;
use Twitter\Model\TweetModel;

class LikeController
{
    protected TweetModel $model;

    public function __construct(TweetModel $model)
    {
        $this->model = $model;
    }

    public function addLike(Request $request): Response
    {
        $id = $request->get('tweet_id');

        $this->model->incrementLikes($id);

        return new RedirectResponse('/');
    }
}
