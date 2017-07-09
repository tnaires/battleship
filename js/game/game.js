var Game = function(fps, canvas) {
  var
    screen,

    tick = function() {
      screen.clear();
      screen.update();
      screen.draw();
    };

  this.init = function() {
    screen = new Screen(canvas);

    var
      playerBoardPosition = new Position(10, 10),
      playerBoardState = new BoardState(10, 10),
      playerBoard = new Board(playerBoardPosition, playerBoardState),

      enemyBoardPosition = new Position(410, 200),
      enemyBoardState = new BoardState(10, 10),
      enemyBoard = new Board(enemyBoardPosition, enemyBoardState);

    playerBoardState.init();
    enemyBoardState.init();

    screen.add(playerBoard);
    screen.add(enemyBoard);
  };

  this.start = function() {
    setInterval(tick, 1000 / fps);
  };
};
