var Ship = function(index, name, size) {
  this.index = function() {
    return index;
  }

  this.name = function() {
    return name;
  }

  this.size = function() {
    return size;
  }
}

Ship.CARRIER = new Ship(1, 'Carrier', 5);
Ship.BATTLESHIP = new Ship(2, 'Battleship', 4);
Ship.CRUISER = new Ship(3, 'Cruiser', 3);
Ship.SUBMARINE = new Ship(4, 'Submarine', 3);
Ship.DESTROYER = new Ship(5, 'Destroyer', 2);

Ship.FLEET = [Ship.CARRIER, Ship.BATTLESHIP, Ship.CRUISER, Ship.SUBMARINE, Ship.DESTROYER];
