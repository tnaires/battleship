var Game = function(fps, canvas) {
  var
    screen,

    tick = function() {
      screen.clear();
      screen.update();
      screen.draw();
    };

  this.setUp = function() {
    screen = new Screen(canvas);

    var
      playerOrigin = new Position(10, 10),
      playerBoard = new Board(playerOrigin),

      enemyOrigin = new Position(410, 200),
      enemyBoard = new Board(enemyOrigin);

    screen.add(playerBoard);
    screen.add(enemyBoard);
  };

  this.start = function() {
    setInterval(tick, 1000 / fps);
  };
};
