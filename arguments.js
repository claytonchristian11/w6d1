function sum(args) {
  let actualArgs = Array.from(arguments);
  let result = 0;
  for (var i = 0; i < actualArgs.length; i++) {
    result += actualArgs[i];
  }

  return result;
}

function sum2(...args) {
  let result = 0;
  for (var i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

// console.log(sum2(1, 2, 3, 4));// === 10
// console.log(sum2(1, 2, 3, 4, 5));// === 15

Function.prototype.myBind = function(context) {
  let actualArgs = Array.from(arguments);
  actualArgs = actualArgs.slice(1);
  that = this;
  return (function _bndFunction() {
    newArgs = Array.from(arguments);
    console.log('ARGS');
    return that.apply(context, args);
  });
};

Function.prototype.myBind2 = function(context, ...bindArgs) {
  console.log(bindArgs);
  return (...callArgs) => {
    console.log(callArgs);
    this.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says.myBind2(breakfast, "meow", "Kush")();
// markov.says.myBind2(breakfast)("meow", "a tree");
// markov.says.myBind2(breakfast, "meow")("Markov");
// const notMarkovSays = markov.says.myBind2(breakfast);
// notMarkovSays("meow", "me");


const curriedSum = function(numArgs) {
  let numbers = [];

  const _curriedSum = function(arg) {
    numbers.push(arg);

    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach((el) => {sum += el; });

      return sum;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

// const newsum = curriedSum(4);
// console.log(newsum(1)(5)(11)(5));

Function.prototype.curry = function(numArgs) {
  numbers = [];
  that = this;

  const _curried = function(arg) {
    numbers.push(arg);

    if (numbers.length !== numArgs) {
      return _curried;
    } else {
      return that(...numbers);
    }
  };
  return _curried;
};

const newsum = curriedSum(4);
console.log(newsum(1)(5)(11)(5));
