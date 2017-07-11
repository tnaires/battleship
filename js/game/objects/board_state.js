var BoardState = function(rowsCount, colsCount) {
  var
    WATER = 0,
    HIT = 10,
    MISS = 11,
    board = [];

  function initBoard() {
    for (var i = 0; i < rowsCount; i++) {
      var row = [];

      for (var j = 0; j < colsCount; j++) {
        row.push(WATER);
      }

      board.push(row);
    }
  }

  function randomizeShips() {
    for (var i = 0; i < Ship.FLEET.length; i++) {
      var
        ship = Ship.FLEET[i],
        directions = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST],
        x, y, direction, directionChosen;

      // Randomize positions while not occupied
      do {
        x = Math.floor(Math.random() * rowsCount);
        y = Math.floor(Math.random() * colsCount);
      } while (board[x][y] !== WATER);

      // Randomize and check direction
      do {
        direction = directions.splice(Math.floor(Math.random() * directions.length), 1)[0];
        directionChosen = true;

        for (var j = 1; j < ship.size(); j++) {
          if (direction === Direction.NORTH) {
            if (y - j < 0 || board[x][y - j] !== WATER) {
              directionChosen = false;
              break;
            }
          } else if (direction === Direction.EAST) {
            if (x + j >= colsCount || board[x + j][y] !== WATER) {
              directionChosen = false;
              break;
            }
          } else if (direction === Direction.SOUTH) {
            if (y + j >= rowsCount || board[x][y + j] !== WATER) {
              directionChosen = false;
              break;
            }
          } else if (direction === Direction.WEST) {
            if (x - j < 0 || board[x - j][y] !== WATER) {
              directionChosen = false;
              break;
            }
          }
        }
      } while (!directionChosen);

      // Place ship
      for (var j = 0; j < ship.size(); j++) {
        switch (direction) {
          case Direction.NORTH:
            board[x][y - j] = ship.index();
            break;
          case Direction.EAST:
            board[x + j][y] = ship.index();
            break;
          case Direction.SOUTH:
            board[x][y + j] = ship.index();
            break;
          case Direction.WEST:
            board[x - j][y] = ship.index();
            break;
        }
      }
    }
  }

  this.rowsCount = function() {
    return rowsCount;
  };

  this.colsCount = function() {
    return colsCount;
  };

  this.positionOccupied = function(x, y) {
    return board[x][y] !== WATER;
  }

  this.positionHit = function(x, y) {
    return board[x][y] === HIT;
  }

  this.positionMiss = function(x, y) {
    return board[x][y] === MISS;
  }

  this.shoot = function(row, col) {
    var occupier = board[row][col];

    switch (occupier) {
      case WATER:
        board[row][col] = MISS;
        return BoardState.WATER_HIT;
      case HIT:
      case MISS:
        return BoardState.REPEATED_SHOT;
      default:
        board[row][col] = HIT;
        return BoardState.SHIP_HIT;
    }
  }

  this.init = function() {
    initBoard();
    randomizeShips();
  };
}

BoardState.REPEATED_SHOT = 0;
BoardState.SHIP_HIT = 1;
BoardState.WATER_HIT = 2;
