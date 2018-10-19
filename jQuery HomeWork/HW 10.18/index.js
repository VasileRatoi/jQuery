$.getScript('components/map/Map.js', function(){
    $('head').append(
        $('<link>', {rel: 'stylesheet', href: 'components/map/map.css'})
    );
    var m = new Map(10, 10);

    $.getScript('components/devil/MikeDuze.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/devil/mike-duze.css'})
        );
        var d = new MikeDuze(4,4);
        d.render();
    })
    $.getScript('components/packman/PackMan.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/packman/packman.css'})
        );
        var p = new PackMan(2,2);
        p.render();
    })
    $.getScript('components/bomb/bomb.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/bomb/bomb.css'})
        );
        var b = new Bomb(1,1);
        b.render();
    })
    $.getScript('components/brick/brick.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/brick/brick.css'})
        );
        var b = new Brick(1,1);
        b.render();
    })
    $.getScript('components/coin/coin.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/coin/coin.css'})
        );
        var b = new Coin(1,1);
        b.render();
    })
    $.getScript('components/heart/heart.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/heart/heart.css'})
        );
        var b = new Heart(1,1);
        b.render();
    })
    $.getScript('components/sushi/sushi.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/sushi/sushi.css'})
        );
        var b = new Sushi(1,1);
        b.render();
    })
    m.render();
});