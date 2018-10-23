class PackMan{
    constructor(x,y){
        this.x = x;
        this.y = y;
        var div = $('<div>', { class: 'packman' });
        $('#map').append(div);           
        div.css('top', this.x * 50 + 'px')
            .css('left', this.y * 50 + 'px');
        this.$div = div;
    }    
}