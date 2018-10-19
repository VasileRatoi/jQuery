class MikeDuze{
    constructor(x,y){
        this.x = x;
        this.y = y;
        // this.x = Math.floor(Math.random() * 10);
        // this.y = Math.floor(Math.random() * 10);
    }
    render(){
        var div = $('<div>', { class: 'mike-duze' });
        $('#map').append(div);
        div.css('top', (this.x - 1) * 50 + 'px')
            .css('left', (this.y - 1) * 50 + 'px')  
    }
}