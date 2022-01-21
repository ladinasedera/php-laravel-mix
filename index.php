<?php 
    include 'config/config.php';
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laravel Mix</title>
        <link rel="stylesheet" href="public/css/app.css?id=<?= START ?>">
    </head>
    <body>
        <div id="app">
            <router-view/>
        </div>
        <script src="public/js/app.js?id=<?= START ?>"></script>
    </body>
</html>