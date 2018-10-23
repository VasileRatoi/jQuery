class MikeDuze{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.direction = "up";
        var div = $('<div>', { class: 'mike-duze ' + this.direction });
        $('#map').append(div);
        div.css('top', this.x * 50 + 'px')
            .css('left', this.y * 50 + 'px');
        
        this.$div = div; //legatura cu divul personajului
    }

    hunt( target ){ // functioa care va cauta obiectul
        // console.log('HUNTING TARGET ', target.x, target.y);
        var _self = this;
        setInterval(function(){
            if(target.x > _self.x){
                _self.turnRight();
                _self.moveRight();
            }
            if(target.x < _self.x){
                _self.turnLeft();
                _self.moveLeft();
            }
            if(target.y > _self.y){
                _self.turnUp();
                _self.moveUp();
            }
            if(target.y < _self.y){
                _self.turnDown();
                _self.moveDown();
            }
        }, 1000);
    }

    move(){
        var _self = this;
        setInterval(function(){
            if(_self.direction == 'right'){
                _self.moveRight();
            }
            if(_self.direction == 'left'){
                _self.moveLeft();
            }
            if(_self.direction == 'up'){
                _self.moveUp();
            }
            if(_self.direction == 'down'){
                _self.moveDown();
            }
        }, 1000);
    }

    // movement
    moveRight(){
        this.x++;
        this.$div.css('left', this.x*50 + 'px');
    }
    moveLeft(){
        this.x--;
        this.$div.css('left', this.x*50 + 'px');
    }
    moveUp(){
        this.y--;
        this.$div.css('top', this.y*50 + 'px');
    }
    moveDown(){
        this.y++;
        this.$div.css('top', this.y*50 + 'px');
    }


    turnRight(){
        this.direction = 'right';
        this.$div.attr('class', 'mike-duze right');
    }
    turnLeft(){
        this.direction = 'left';
        this.$div.attr('class', 'mike-duze left');
    }
    turnUp(){
        this.direction = 'up';
        this.$div.attr('class', 'mike-duze up');
    }
    turnDown(){
        this.direction = 'down';
        this.$div.attr('class', 'mike-duze down');
    }
}

