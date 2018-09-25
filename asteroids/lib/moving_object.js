Function.prototype.inherits = function inherits(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function movingObject(...args) {
  this.pos = args[0];
  this.vel = args[1];
  ths.radius = args[2];
  this.color = args[3];
}

MovingObject.prototype.draw = function(ctx) {
  this.centerX = center
};

module.exports = MovingObject;
