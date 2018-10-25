class Kalabok {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hp = 100;
        var position = 'top: ' + this.y * 50 + 'px' + '; left: ' + this.x * 50 + 'px';
        var div = $('<div>', {
            id: 'kalabok',
            class: "kalabok",
            style: position
        });
        div.append($('<div>', {
                class:'hp', 
                style: 'width:'+this.hp*0.5+'px;'+
                'border: 1px solid rgb('+ (255-this.hp*2) + ',' + this.hp * 2 + ',0);' +
                'top: 0; left: 0;'

            })
        )
        $('#map').append(div);
        // Pastram legatura cu divul hartii
        this.$div = div;

        this.watch();
    }

    watch() {
        var _self = this;
        $(document).keydown(function (e) {
            e.preventDefault();
            // console.log(e.keyCode);
            if (e.keyCode == 38) {
                _self.turnUp();
                _self.moveUp();
            }
            if (e.keyCode == 39) {
                _self.turnRight();
                _self.moveRight();
            }
            if (e.keyCode == 40) {
                _self.turnDown();
                _self.moveDown();
            }
            if (e.keyCode == 37) {
                _self.turnLeft();
                _self.moveLeft();
            }
        });
    }

    updateHp(){
        $('.kalabok .hp')
            .width(this.hp*0.5)
            .attr('style','border: 1px solid rgb('+ (255-this.hp*2) + ',' + this.hp * 2 + ',0);')
    }

    // Movement
    moveRight() {
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
        this.$div.attr('class', 'kalabok right');
    }

    turnLeft() {
        this.direction = 'left';
        this.$div.attr('class', 'kalabok left');
    }

    turnUp() {
        this.direction = 'up';
        this.$div.attr('class', 'kalabok up');
    }

    turnDown() {
        this.direction = 'down';
        this.$div.attr('class', 'kalabok down');
    }
}