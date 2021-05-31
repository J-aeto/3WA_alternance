<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Twitter</title>
  <link href="https://fonts.googleapis.com/css2?family=Grandstander&family=Roboto+Slab&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./pages/home.css">
</head>

<body>
  <header>
    <h1>Bienvenue sur Twitter</h1>
  </header>
  <form method="post" class="form">
    <div class="form-group">
      <input type="text" name="content" placeholder="A vos tweets!" class="form__input">
      <label for="content" class="form__label">A vos tweets!!</label>
    </div>
    <button type="submit" class="btn">Tweet !</button>
  </form>

  <?php foreach ($tweets as $tweet) : ?>
    <div class="tweet">
      <span><?= $tweet->getAuthor() ?> a écrit le <?= $tweet->getPublishedAt() ?></span>
      <blockquote><?= $tweet->getContent() ?></blockquote>

      <form action="like.php" method="post">
        <span><?= $tweet->getLikes() ?></span>
        <button>👍</button>
        <input type="hidden" name="tweet_id" value="<?= $tweet->getId() ?>">
      </form>
    </div>
  <?php endforeach ?>

</body>

</html>