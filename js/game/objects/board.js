var Board = function(origin) {
  var
    width = 330, height = 330, rowsColsCount = 11;

  this.init = function(context) {
    context.beginPath();
    context.lineWidth = "1";
    context.strokeStyle = "black";
    context.rect(origin.x(), origin.y(), width, height);

    var
      rowHeight = height / rowsColsCount,
      colWidth = width / rowsColsCount;

    for (var i = 1; i < rowsColsCount; i++) {
      var
        x = i * rowHeight + origin.x(),
        y = i * colWidth + origin.y();

      context.moveTo(x, origin.y());
      context.lineTo(x, width + origin.y());
      context.moveTo(origin.x(), y);
      context.lineTo(height + origin.x(), y);
    }

    context.stroke();
  };

  this.clear = function(context) {

  };

  this.update = function() {

  };

  this.draw = function(context) {

  };
};
