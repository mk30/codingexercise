var fs = require('fs')

var fulltext = fs.readFileSync(process.argv[2]).toString()
var maxn = (fulltext.split('\n').length - 1)/4

var rosettaStone = {
  ' _ | ||_|   ': 0,
 '     |  |   ':1, 
  ' _  _||_    ' :2,
 ' _  _| _|   ' :3,
  '   |_|  |   ' :4,
 ' _ |_  _|   ':5,
 ' _ |_ |_|   ' :6,
 ' _   |  |   ' :7,
  ' _ |_||_|   ' :8,
  ' _ |_| _|   ' :9
}

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
