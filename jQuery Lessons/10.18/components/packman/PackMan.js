class PackMan{
    constructor(x,y){

        this.x = x;
        this.y = y;
    }
    render(){
        var div = $('<div>', { class: 'packman' });
        $('#map').append(div);
    }
}