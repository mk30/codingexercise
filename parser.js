var fs = require('fs')

var fulltext =
fs.readFileSync('./test.txt').toString().split('\n')
var rows = []

for (var a = 0; a <= 27; a++){
  for (var i = 0; i < fulltext.length - 3; i+=4) {
    rows.push([
      fulltext[i].substr(a,3),
      fulltext[(i+1)].substr(a,3),
      fulltext[(i+2)].substr(a,3),
      fulltext[(i+3)].substr(a,3)
    ])
  } 
}

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

