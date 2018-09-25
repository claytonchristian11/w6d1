//Surrogate trick
Function.prototype.inherits = function inherits(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// object.create

Function.prototype.inherits2 = function(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    console.log('moved');
  }
}

class Circle {
  constructor(radius, x, y) {
    super(x,y);
    this.radius = radius;

  }

}
// function Shape(length) {
//   this.length = length;
// }
//
// Shape.prototype.move = function move() {
//   console.log('moved');
// };
//
// function Circle(radius) {
//   Shape.call(this, radius);
// }

Circle.inherits(Shape);

c = new Circle(1);
s = new Shape(1);

s.move();
c.move();
