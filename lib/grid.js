var $ = require('jquery');
var Tile = require('../lib/tile.js');


function Grid(){
  this._length = 0;
  this.allTiles = [];
}

Grid.prototype.orient = function(){

  for (var i = 0; i < 16; i++) {
    this.allTiles.push(new Tile( null, i));
  }
  var array = this.allTiles;

  this.allTiles.forEach(function(e, i) {
    if ((e.position+1) % 4 !== 0) {
      e.right = array[i + 1];
    }
    if (i > 0) {
      e.left = array[i - 1];
    }
    if (i > 3) {
      e.above = array[i-4];
    }
    if (i < 12) {
      e.below = array[i+4];
    }
  });

  this.allTiles = this.allTiles;
};


Grid.prototype.initGrid = function(){
  this.orient();
  this.allTiles[0].data = null;
  this.allTiles[1].data = 4;
  this.allTiles[2].data = null;
  this.allTiles[3].data = 4;

  for (var i = 1; i < 17; i++) {
  $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;

  }
};

Grid.prototype.loadGrid = function (){
  this.orient();

  for (var i = 1; i < 17; i++) {
    $(`#c${i}`)[0].innerHTML = this.allTiles[i - 1].data;

  }
};

Grid.prototype.setHeads = function() {
  this.row1 = this.allTiles[0];
  this.row2 = this.allTiles[4];
};

// Grid.prototype.multiply = function() {
//   this.data = this.data * 2;
// };

Grid.prototype.moveRight = function() {
  this.row1 = this.allTiles[0];


    if (this.row1.right.right.right.data === this.row1.right.right.data) {
      this.row1.right.right.right.data = this.row1.right.right.data * 2;
      this.row1.right.right.data = null;
      console.log(this.row1.right.right.right.data);
    }
    if(this.row1.right.right.data === null){
      this.row1.right.right.data = this.row1.right.data;
      this.row1.right.data = null;
    }
  };
// create pullTiles
// when the up arrow is pressed -- key 38
// row 1 becomes all the pullTiles

// when the down arrow is pressed -- key 40
// row 4 becomes all the pullTiles

// when the left arrow is pressed -- key 37
// column 1 becomes all the pullTiles

// when the right arrow is pressed -- key 39
// column 4 becomes all the pullTiles


// when the up arrow is pressed
// row 1 becomes all the pullTiles
// should keep going until edge

// compare pullTile to pullTile.below

// case equal pullTile === pullTile.below
// function multiply();
// case null pullTile.below === null
// function smush();
  	  // case equal
  		// function multiply();
  		// case null
  		// function smush();
  		// case different
  		// done
// case different pullTile.below.data != pullTile.data
// done








module.exports = Grid;