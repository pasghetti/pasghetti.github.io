var DirectionEnum = {
    RIGHT : 0,
    UP : 1,
    LEFT : 2,
    DOWN : 3
};
(function() {
        var names = []; //use to add bots
        var board = [
            []
        ];
        var boardSize = 100;
        var sessionStarted = false;
        var teams = false;
        var strip = [];
        for (var j = 0; j < boardSize; j++) {
            strip.append(0);
        }
        for (var i = 0; i < boardSize; i++) {
            board.append(j);
        }
        boardCache = board;
        var Square = (function(coordx, coordy) {
            this.x = coordx;
            this.y = coordy;
        });
        for (var a = 0; a < names.length; a++) {
            if ((name[a] + "_enter") in window) {
                window[name[a] + "_enter"](teams, new Square(Math.floor(Math.rand() * 100), Math.floor(Math.rand() * 100));
                }
                else {
                    names.splice(a, 1);
                    a--;
                }
            }
            var gameCont = true;
            var boardCache;
            var moveCache = [];
            var directions = [];
            for(var d = 0; d < names.length; d++){
                directions.append(DirectionENUM.UP)
                //TODO: SETUP BOARD (SVG)
            }
            while (gameCont) {
                boardCache = board;
                for (var b = 0; b < names.length; b++) {
                    if ((name[b] + "_move") in window) {
                        moveCache.append(window[name[b] + "_move"](boardCache));
                    } else {
                        moveCache.append({ NoGood : true });
                    }
                }
                var res;
                for(var  c = 0; c < moveCache.length; c++){
                    if(("rotate" in moveCache) && (Number.isInteger(res = moveCache["rotate"])) && (0 <= res) && (res <= 3)){
                        directions[c] = res;

                    }
                }
            }
        }
    )
    ();
