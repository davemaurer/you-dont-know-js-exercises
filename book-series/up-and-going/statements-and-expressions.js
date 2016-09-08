// Statements are executable pieces of code

// this is a single statement
a = b * 2;

/*
 programming goes from right to left, so this statements assigns the result of the value of 'b' * 2 to the
 variable/target 'a'
  */

/*
  Statements are comprised of 'phrases' called expressions. Anything that resolves to a value is an expression, so
  in the example above, we have the following expressions.
  a
  b
  2
  b*2
  a = b * 2
  */

// Exercise: Find all of the expressions in the following Statement.

a = b * 2 + foo(c * 3);

/*
a | b | 2 | 3 | c | c * 3 | b * 2 | foo(c * 3) | b * 2 + foo(c * 3) | a = b * 2 + foo(c * 3)

[ [a] = [ [ [b] * [2] ] + [ [foo]( [[c] * [3]] ) ] ] ];
 */

/*
 To make the above code more readable you can put parens around b * 2,
 so anyone reading it won't need to understand operator precedence.
  */

a = (b * 2) + foo(c * 3);

