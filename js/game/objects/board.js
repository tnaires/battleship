var Board = function(origin) {
  var
    WIDTH = 330,
    HEIGHT = 330,
    ROWS_COLS_COUNT = 11,
    ROW_HEIGHT = HEIGHT / ROWS_COLS_COUNT,
    COL_WIDTH = WIDTH / ROWS_COLS_COUNT;

  function drawBorder(context) {
    context.beginPath();
    context.lineWidth = '1';
    context.strokeStyle = 'black';
    context.rect(origin.x(), origin.y(), WIDTH, HEIGHT);
  }

  function drawGrid(context) {
    for (var i = 1; i < ROWS_COLS_COUNT; i++) {
      var
        x = i * ROW_HEIGHT + origin.x(),
        y = i * COL_WIDTH + origin.y();

      context.moveTo(x, origin.y());
      context.lineTo(x, WIDTH + origin.y());
      context.moveTo(origin.x(), y);
      context.lineTo(HEIGHT + origin.x(), y);
    }

    context.stroke();
  }

  function drawLabels(context) {
    var xInc = 6, yInc = 1, letterA = 65, number1 = 49;

    context.font = '30px Lucida Console';
    context.textAlign = 'left';
    context.textBaseline = 'top';

    for (var i = 1; i <= ROWS_COLS_COUNT - 1; i++) {
      var
        x = i * COL_WIDTH + origin.x() + xInc,
        y = i * ROW_HEIGHT + origin.y() + yInc,
        letterLabel = String.fromCharCode(letterA + (i - 1)),
        numberLabel = (i - 1).toString();

      context.fillText(letterLabel, x, origin.y() + yInc);
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

  };
};
