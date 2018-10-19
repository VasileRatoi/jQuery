class Bomb{
    constructor(x,y){

        this.x = x;
        this.y = y;
    }
    render(){
        var div = $('<div>', { class: 'bomb' });
        $('#map').append(div);
    }
}