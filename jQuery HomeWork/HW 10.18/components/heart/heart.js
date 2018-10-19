class Heart{
    constructor(x,y){

        this.x = x;
        this.y = y;
    }
    render(){
        var div = $('<div>', { class: 'heart' });
        $('#map').append(div);
    }
}