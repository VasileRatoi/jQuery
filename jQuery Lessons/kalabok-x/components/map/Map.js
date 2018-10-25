class Map {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.things = []; // lista tuturor obiectelor de pe harta
        var divs = [];
        for (var y = 0; y < this.h; y++) {
            for (var x = 0; x < this.w; x++) {
                // Creaza 1 sector
                divs.push(
                    $('<div>')
                        .css('top', y * 50 + 'px')
                        .css('left', x * 50 + 'px')
                );
            }
        }
        $('#map').append(divs);
        // Pastram legatura cu divul hartii
        this.$div = $('#map');
    }
    addThing( thing ){
        this.things.push( thing );
    }
}