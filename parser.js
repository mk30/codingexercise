var fs = require('fs')

var fulltext =
fs.readFileSync(process.argv[2]).toString().split('\n')
fulltext.pop()
var rows = []

for (var a = 0; a <= fulltext.length; a+=3){
  for (var i = 0; i < fulltext.length - 3; i+=4) {
    rows.push([
      fulltext[(i)].substr(a,3), 
      fulltext[(i+1)].substr(a,3), 
      fulltext[(i+2)].substr(a,3), 
      fulltext[(i+3)].substr(a,3)
    ])
  } 
}
var zero = [ ' _ ', '| |', '|_|', '   ' ] 
var one = [ '   ', '  |', '  |', '   ' ]
var two = [ ' _ ', ' _|', '|_ ', '   ' ]
var three = [ ' _ ', ' _|', ' _|', '   ' ]
var four = [ '   ', '|_|', '  |', '   ' ]
var five = [ ' _ ', '|_ ', ' _|', '   ' ]
var six = [ ' _ ', '|_ ', '|_|', '   ' ]
var seven = [ ' _ ', '  |', '  |', '   ' ]
var eight = [ ' _ ', '|_|', '|_|', '   ' ]
var nine = [ ' _ ', '|_|', ' _|', '   ' ]

for (var i = 0; i < rows.length; i++){
  if (JSON.stringify(rows[i]) == JSON.stringify(zero))
    console.log(0)
  else if (JSON.stringify(rows[i]) == JSON.stringify(one))
    console.log(1)
  else if (JSON.stringify(rows[i]) == JSON.stringify(two))
    console.log(2)
  else if (JSON.stringify(rows[i]) == JSON.stringify(three))
    console.log(3)
  else if (JSON.stringify(rows[i]) == JSON.stringify(four))
    console.log(4)
  else if (JSON.stringify(rows[i]) == JSON.stringify(five))
    console.log(5)
  else if (JSON.stringify(rows[i]) == JSON.stringify(six))
    console.log(6)
  else if (JSON.stringify(rows[i]) == JSON.stringify(seven))
    console.log(7)
  else if (JSON.stringify(rows[i]) == JSON.stringify(eight))
    console.log(8)
  else if (JSON.stringify(rows[i]) == JSON.stringify(nine))
    console.log(9)
  else return
}
