var Board = function(origin, state) {
  var
    WIDTH = 330,
    HEIGHT = 330,
    ROW_HEIGHT = HEIGHT / (state.rowsCount() + 1),
    COL_WIDTH = WIDTH / (state.colsCount() + 1);

  function drawBorder(context) {
    context.beginPath();
    context.lineWidth = '1';
    context.strokeStyle = 'black';
    context.rect(origin.x(), origin.y(), WIDTH, HEIGHT);
  }

  function drawGrid(context) {
    for (var i = 1; i <= state.rowsCount(); i++) {
      var x = i * ROW_HEIGHT + origin.x();

      context.moveTo(x, origin.y());
      context.lineTo(x, WIDTH + origin.y());
    }

    for (var i = 1; i <= state.colsCount(); i++) {
      var y = i * COL_WIDTH + origin.y();

      context.moveTo(origin.x(), y);
      context.lineTo(HEIGHT + origin.x(), y);
    }

    context.stroke();
  }

  function drawLabels(context) {
    var xInc = 6, yInc = 1, letterA = 65;

    context.font = '30px Lucida Console';
    context.textAlign = 'left';
    context.textBaseline = 'top';

    for (var i = 1; i <= state.colsCount(); i++) {
      var
        x = i * COL_WIDTH + origin.x() + xInc,
        letterLabel = String.fromCharCode(letterA + (i - 1));

      context.fillText(letterLabel, x, origin.y() + yInc);
    }

    for (var i = 1; i <= state.rowsCount(); i++) {
      var
        y = i * ROW_HEIGHT + origin.y() + yInc,
        numberLabel = (i - 1).toString();

      context.fillText(numberLabel, origin.x() + xInc, y);
    }
  }

  this.init = function(context) {
    drawBorder(context);
    drawGrid(context);
    drawLabels(context);
  };

  this.clear = function(context) {

  };

  this.update = function() {

  };

  this.draw = function(context) {
    for (var i = 1; i <= state.rowsCount(); i++) {
      for (var j = 1; j <= state.colsCount(); j++) {
        if (state.positionOccupied(i - 1, j - 1)) {
          context.fillStyle = 'yellow';
        } else {
          context.fillStyle = 'blue';
        }

        var
          cornerX = COL_WIDTH * j + origin.x(),
          cornerY = ROW_HEIGHT * i + origin.y();

        context.fillRect(cornerX + 1, cornerY + 1, COL_WIDTH - 1, ROW_HEIGHT - 1);
      }
    }
  };
};
