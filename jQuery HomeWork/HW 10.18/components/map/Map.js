class Map{
    constructor(w,h){
        this.w = w;
        this.h = h;
        var divs = [];
        for(var y = 0; y < this.h; y++){
            for(var x = 0; x < this.w; x++){
                // CREAZA 1 PATRAT (SECTOR)
                divs.push( 
                    $('<div>')
                        .css('top', y * 50 + 'px')
                        .css('left', x * 50 + 'px')
                );
            }
        }
        $('#map').append( divs );
        
        this.$ = $('#map'); // Pastram legatura cu div-ul in care se deseneaza harta
    }   
}


// var m = new Map();