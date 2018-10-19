class Brick{
    constructor(x,y){

        this.x = x;
        this.y = y;
    }
    render(){
        var div = $('<div>', { class: 'brick' });
        $('#map').append(div);
    }
}