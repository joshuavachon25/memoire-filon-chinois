    <script>
        let selection;
    </script>
    <?php

    if(isset($_GET['lvl'])){
        ?>
        <script>
            selection = $_GET['lvl'];
        </script>
        <?php
    }else{
        ?>
        <script>
            selection = 42;
        </script>
        <?php
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu de mémoire Filon Chinois</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <div id="app">
        <div class="overlay"></div>
        <div class="pop nouvelle">
        
        </div>
        <div class="pop resultat">
        
        </div>
        <div class="header noselect">
            <div class="timer">00:00</div>
            <div class="score">
                <span class="coups">0</span>
                <span class="coups_label">coups</span>
            </div>
            <div class="menu">
                <button class="btn pause">Pause</button>
                <button class="btn recommencer">Nouvelle partie</button>
            </div>
        </div>
        <div class="jeu">
            <div class="carte carte1"></div>
            <div class="carte carte2"></div>
            <div class="carte carte3"></div>
            <div class="carte carte4"></div>
            <div class="carte carte5"></div>
            <div class="carte carte6"></div>
            <div class="carte carte7"></div>
            <div class="carte carte8"></div>
            <div class="carte carte9"></div>
            <div class="carte carte10"></div>
            <div class="carte carte11"></div>
            <div class="carte carte12"></div>
            <div class="carte carte13"></div>
            <div class="carte carte14"></div>
            <div class="carte carte15"></div>
            <div class="carte carte16"></div>
        </div>
    </div>
    <script src="app.js"></script>
    <script>
        init(selection);
    </script>
</body>
</html>