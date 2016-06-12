var fs = require('fs')

var fulltext = fs.readFileSync(process.argv[2]).toString()
var maxn = (fulltext.split('\n').length - 1)/4

//object with pipe-and-underscore numbers mapped to digits

var rosettaStone = {
  ' _ | ||_|   ' : 0,
  '     |  |   ' : 1, 
  ' _  _||_    ' : 2,
  ' _  _| _|   ' : 3,
  '   |_|  |   ' : 4,
  ' _ |_  _|   ' : 5,
  ' _ |_ |_|   ' : 6,
  ' _   |  |   ' : 7,
  ' _ |_||_|   ' : 8,
  ' _ |_| _|   ' : 9
}

/*
the code below loops over 3 characters at a time from 4 rows
at a time in order to get at each pipe-and-underscore
number. it then takes the resulting concatenated string and uses it as a
key to the rosettaStone object. if the string is a valid key, the
corresponding value (a digit) will be printed. an extra newline is
added after each set of 9 numbers as a delimiter
between account numbers. 
*/

for (var n = 0; n < maxn; n++){
  for (var i = 112*n; i < 27+(112*n); i+=3) {
    console.log(
      rosettaStone[
        fulltext.substr(i, 3) + 
        fulltext.substr(i + 28, 3) + 
        fulltext.substr(i + (28*2), 3) + 
        fulltext.substr(i + (28*3), 3)
      ]
    )
  } 
  console.log('\n')
}
