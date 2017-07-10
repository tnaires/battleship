var Game = function(fps, canvas) {
  var screen;

  function tick() {
    screen.clear();
    screen.update();
    screen.draw();
  }

  this.init = function() {
    screen = new Screen(canvas);

    var
      playerBoardPosition = new Position(10, 10),
      playerBoardState = new BoardState(10, 10),
      playerBoard = new Board(playerBoardPosition, playerBoardState, false),

      enemyBoardPosition = new Position(410, 200),
      enemyBoardState = new BoardState(10, 10),
      enemyBoard = new Board(enemyBoardPosition, enemyBoardState, true),
      enemy = new Enemy(playerBoardState);

    playerBoardState.init();
    enemyBoardState.init();

    screen.add(playerBoard);
    screen.add(enemyBoard);

    canvas.onmousedown = function(e) {
      var canvasRect = canvas.getBoundingClientRect();
      enemyBoard.handleClick(e.clientX - canvasRect.left, e.clientY - canvasRect.top);
      enemy.play();
    }
  };

  this.start = function() {
    setInterval(tick, 1000 / fps);
  };
};
