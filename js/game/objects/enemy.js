var Enemy = function(playerBoardState) {
  this.play = function() {
    var
      row = Math.floor(Math.random() * playerBoardState.rowsCount());
      col = Math.floor(Math.random() * playerBoardState.colsCount());

    playerBoardState.shoot(row, col);
  };
}
