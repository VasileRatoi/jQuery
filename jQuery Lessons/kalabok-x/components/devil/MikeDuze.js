class MikeDuze {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = 'right';
        var position = 'top: ' + this.y * 50 + 'px' + '; left: ' + this.x * 50 + 'px';
        var div = $('<div>', {
            class: 'mike-duze ' + this.direction,
            style: position
        });
        $('#map').append(div);
        // Pastram legatura cu divul hartii
        this.$div = div;
       
        this.hunt();
    }

    // Va cauta obiectul
    hunt() {        
        var _self = this;
        setInterval(function () {
            var target = null;
            //cautam kalaboku pe harta
            for(var t = 0; t < game_map.things.length; t++){
                if( game_map.things[t] instanceof Kalabok ){
                    target = game_map.things[t];
                }
            }
            if(!target) return;
           
            console.log('Hunting target:' + target.x + '; ' + target.y);

            // console.log(_self);
            if (target.x > _self.x) {
                _self.turnRight();
                _self.moveRight();
            }
            if (target.x < _self.x) {
                _self.turnLeft();
                _self.moveLeft();
            }
            if (target.y < _self.y) {
                _self.turnUp();
                _self.moveUp();
            }
            if (target.y > _self.y) {
                _self.turnDown();
                _self.moveDown();
            }
            if ( target.y == _self.y && target.x == _self.x ) {
                target.hp-=10;
                target.updateHp();
            }
        }, 1000);
    }

    move() {
        var _self = this;
        setInterval(function() {
            // console.log(_self);
            if (_self.direction == 'right') {
                _self.moveRight();
            }
            if (_self.direction == 'left') {
                _self.moveLeft();
            }
            if (_self.direction == 'up') {
                _self.moveUp();
            }
            if (_self.direction == 'down') {
                _self.moveDown();
            }            
        },1000);
    }

    // Movement
    moveRight(){
        this.x++;
        this.$div.css('left', this.x * 50 + 'px');
    }

    moveLeft() {
        this.x--;
        this.$div.css('left', this.x * 50 + 'px');
    }

    moveUp() {
        this.y--;
        this.$div.css('top', this.y * 50 + 'px');
    }

    moveDown() {
        this.y++;
        this.$div.css('top', this.y * 50 + 'px');
    }

    turnRight() {
        this.direction = 'right';
        this.$div.attr('class', 'mike-duze right');
    }

    turnLeft() {
        this.direction = 'left';
        this.$div.attr('class', 'mike-duze left');
    }

    turnUp() {
        this.direction = 'up';
        this.$div.attr('class', 'mike-duze up');
    }

    turnDown() {
        this.direction = 'down';
        this.$div.attr('class', 'mike-duze down');
    }
}