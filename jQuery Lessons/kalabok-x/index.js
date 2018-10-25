var game_map;
$.getScript('components/map/Map.js', function () {
    game_map = new Map(10, 10);
   
    loadStyle('components/map/map.css');

    $.getScript('components/devil/MikeDuze.js', function () {
        loadStyle('components/devil/mike-duze.css');
        game_map.addThing( new MikeDuze(randCoord(), randCoord()) );
        
    });

    $.getScript('components/kalabok/Kalabok.js', function () {
        loadStyle('components/kalabok/kalabok.css');
        game_map.addThing( new Kalabok(randCoord(), randCoord()) );

        console.log(game_map.things[1] instanceof Kalabok);
    });
});