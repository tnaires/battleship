var
  FPS = 60,
  canvas = document.getElementById('screen'),
  game = new Game(FPS, canvas);

game.setUp();
game.start();
