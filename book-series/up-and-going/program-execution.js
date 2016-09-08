/*
 Execution is the process of getting something from a high level language to machine code.

 The JavaScript engine is what takes your code and turns it into something the machine can understand.

 A misunderstanding is that JavaScript is a scripting language, and is interpreted (where only one thing
 at a time is processed/interpreted line by line.

 This is not true of modern JavaScript. It is actually a compiled language.
 In JS compilation means there is more than one pass through your program.
  */

a = 2;
2();

/* In an interpreted language, line a =2 would be run first, then it would error out.
In JavaScript it runs through the the entire execution before running, and errors out before line one runs.
It is not a 100% compiled language in the traditional sense, but the code is run through an 'error checker'
before any code is executed.
 */


