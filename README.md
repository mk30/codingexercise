original program submitted June 7th:
https://github.com/mk30/codingexercise/tree/68ab978a13b736974454ab5013263907aab8ca2f

the latest commit includes a refactored version of the
original program that now deals with strings instead of
arrays, processes the numbers across instead of down, and
parses underscore-and-pipe numbers into digits via an object
that has underscore-and-pipe numbers as keys and digits as
values (previously each underscore-and-pipe number passed
through a series of if-else comparison statements).

to run: `node parser.js test.txt`

to do:

* part 2: plug each digit of account number into checksum
 formula. if the outcome of the formula is anything but 0,
 return "invalid."

* part 3: format account number output so that each account
 number is on its own line. run incoming account numbers
 through a regex that checks for presence of question marks.
 if an account number returns a match for one or more
 question marks, add 'ILL' to end of the line. run the
 remaining account numbers
 through the checksum formula and if an account number fails,
 add 'ERR' to end of the line.

* part 4: still thinking.
