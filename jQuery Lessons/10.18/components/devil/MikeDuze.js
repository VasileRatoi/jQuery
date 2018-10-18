class MikeDuze{
    constructor(x,y){

        this.x = x;
        this.y = y;
    }
    render(){
        var div = $('<div>', { class: 'mike-duze' });
        $('#map').append(div);
    }
}