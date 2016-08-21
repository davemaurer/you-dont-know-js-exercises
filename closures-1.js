var addTo = function(passed) {

  var add = function(inner) {
    return passed + inner;
  };

  return add;
};

console.log(addTo(5));

var addThree = new addTo(3);
var addFour = new addTo(4);

console.log(addThree);
console.log(addThree(1), addFour(3));
