var Screen = function(canvas) {
  var
    context = canvas.getContext('2d'),
    objects = [];

  this.add = function(object) {
    objects.push(object);

    if (object.init) {
      object.init(context);
    }
  };

  this.clear = function() {
    objects.forEach(function(object) {
      object.clear(context);
    });
  };

  this.update = function() {
    objects.forEach(function(object) {
      object.update();
    });
  };

  this.draw = function() {
    objects.forEach(function(object) {
      object.draw(context);
    });
  };
};
