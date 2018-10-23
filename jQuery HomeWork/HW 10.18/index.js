var d;

$.getScript('components/map/Map.js', function(){
    loadStyle('components/map/map.css');
    var m = new Map(10, 10);

    $.getScript('components/devil/MikeDuze.js', function(){
        loadStyle('components/devil/mike-duze.css');
        
        d = new MikeDuze(randCoord(),randCoord());
        // d.move();
    })
    $.getScript('components/packman/PackMan.js', function(){
        loadStyle('components/packman/packman.css');
        
        var p = new PackMan(randCoord(),randCoord());
        d.hunt(p);
    })
    // $.getScript('components/bomb/bomb.js', function(){
    //     loadStyle('components/bomb/bomb.css');        
    //     var b = new Bomb(1,1);
    //     b.render();
    // })
    // $.getScript('components/brick/brick.js', function(){
    //     loadStyle('components/brick/brick.css'); 
    //     var b = new Brick(1,1);
    //     b.render();
    // })
    // $.getScript('components/coin/coin.js', function(){
    //     loadStyle('components/coin/coin.css');
    //     var b = new Coin(1,1);
    //     b.render();
    // })
    // $.getScript('components/heart/heart.js', function(){
    //     loadStyle('components/heart/heart.css');
    //     var b = new Heart(1,1);
    //     b.render();
    // })
    // $.getScript('components/sushi/sushi.js', function(){
    //     loadStyle('components/sushi/sushi.css');
    //     var b = new Sushi(1,1);
    //     b.render();
    // })
});