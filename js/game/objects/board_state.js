var BoardState = function(rowsCount, colsCount) {
  var
    WATER = 0,
    HIT = 10,
    MISS = 11,
    NORTH = 'N',
    EAST = 'E',
    SOUTH = 'S',
    WEST =  'W',
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
        directions = [NORTH, EAST, SOUTH, WEST],
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
          if (direction === NORTH) {
            if (y - j < 0 || board[x][y - j] !== WATER) {
              directionChosen = false;
              break;
            }
          } else if (direction === EAST) {
            if (x + j >= colsCount || board[x + j][y] !== WATER) {
              directionChosen = false;
              break;
            }
          } else if (direction === SOUTH) {
            if (y + j >= rowsCount || board[x][y + j] !== WATER) {
              directionChosen = false;
              break;
            }
          } else if (direction === WEST) {
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
          case NORTH:
            board[x][y - j] = ship.index();
            break;
          case EAST:
            board[x + j][y] = ship.index();
            break;
          case SOUTH:
            board[x][y + j] = ship.index();
            break;
          case WEST:
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
        break;
      case HIT:
      case MISS:
        break;
      default:
        board[row][col] = HIT;
    }
  }

  this.init = function() {
    initBoard();
    randomizeShips();
  };
}
