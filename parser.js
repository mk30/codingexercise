var fs = require('fs')


var fulltext =
fs.readFileSync('./test.txt').toString().split('\n')
var line = []

/*
line.push(fulltext[32].substr(3,3), fulltext[33].substr(3,3),
fulltext[34].substr(3,3), fulltext[35].substr(3,3))
*/

for (var i = 0; i < fulltext.length - 3; i+=4) {
  line.push(
    fulltext[i].substr(0,3),
    fulltext[(i+1)].substr(0,3),
    fulltext[(i+2)].substr(0,3),
    fulltext[(i+3)].substr(0,3)
  )
} 

console.log(line)

var zero = [ ' _ ', '| |', '|_|', '' ]
var one = [ '', '  |', '  |', '' ]
var two = [ ' _ ', ' _|', '|_ ', '' ]
var three = [ ' _ ', ' _|', ' _|', '' ]
var four = [ '   ', '|_|', '  |', '' ]
var five = [ ' _ ', '|_ ', ' _|', '' ]
var six = [ ' _ ', '|_ ', '|_|', '' ]
var seven = [ ' _ ', '  |', '  |', '' ]
var eight = [ ' _ ', '|_|', '|_|', '' ]
var nine = [ ' _ ', '|_|', ' _|', '' ]

