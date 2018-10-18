$.getScript('components/map/Map.js', function(){
    $('head').append(
        $('<link>', {rel: 'stylesheet', href: 'components/map/map.css'})
    );
    var m = new Map(10, 10);

    $.getScript('components/devil/MikeDuze.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/devil/mike-duze.css'})
        );
        var d = new MikeDuze(1,1);
        d.render();
    })
    $.getScript('components/packman/PackMan.js', function(){
        $('head').append(
            $('<link>', {rel: 'stylesheet', href: 'components/packman/packman.css'})
        );
        var p = new PackMan(1,1);
        p.render();
    })
    m.render();
});