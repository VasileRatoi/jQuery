class Coin{
    constructor(x,y){

        this.x = x;
        this.y = y;
    }
    render(){
        var div = $('<div>', { class: 'coin' });
        $('#map').append(div);
    }
}