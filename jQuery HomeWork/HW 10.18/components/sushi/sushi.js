class Sushi{
    constructor(x,y){

        this.x = x;
        this.y = y;
    }
    render(){
        var div = $('<div>', { class: 'sushi' });
        $('#map').append(div);
    }
}