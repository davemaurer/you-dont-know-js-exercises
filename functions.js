function printAmount(amt) {
  console.log( amt.toFixed(2) );
}

function formatAmount() {
  return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log(amount);


function outer(){
  var a = 1;
  function inner() {
    var b = 2;
    console.log(a + b);
  }
  inner();
  console.log(a);
  // console.log(b); // blows up because the parent cannot inherit from the child
}

outer();

function foo(){
  return 42;
}

foo.bar = "hello world";

console.log(typeof foo,
typeof foo(),
typeof foo.bar
);
