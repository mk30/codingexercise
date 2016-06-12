var fs = require('fs')

var fulltext =
fs.readFileSync(process.argv[2]).toString()
for (var n = 0; n < 20; n++){
  for (var i = 112*n; i < 27+(112*n); i+=3) {
    console.log(fulltext.substr(i, 3))
    console.log(fulltext.substr(i + 28, 3))
    console.log(fulltext.substr(i + (28*2), 3))
    console.log(fulltext.substr(i + (28*3), 3))
  } 
}
/*
for (var i = 112; i < (27+112); i+=3) {
  console.log(fulltext.substr(i, 3))
  console.log(fulltext.substr(i + 28, 3))
  console.log(fulltext.substr(i + (28*2), 3))
  console.log(fulltext.substr(i + (28*3), 3))
} 
for (var i = (112*2); i < (27+(112*2)); i+=3) {
  console.log(fulltext.substr(i, 3))
  console.log(fulltext.substr(i + 28, 3))
  console.log(fulltext.substr(i + (28*2), 3))
  console.log(fulltext.substr(i + (28*3), 3))
} 
for (var i = (112*3); i < (27+(112*3)); i+=3) {
  console.log(fulltext.substr(i, 3))
  console.log(fulltext.substr(i + 28, 3))
  console.log(fulltext.substr(i + (28*2), 3))
  console.log(fulltext.substr(i + (28*3), 3))
} 
*/

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
/*
for (var i = 0; i < nums.length; i++){
  if (JSON.stringify(nums[i]) == JSON.stringify(zero))
    console.log(0)
  else if (JSON.stringify(nums[i]) == JSON.stringify(one))
    console.log(1)
  else if (JSON.stringify(nums[i]) == JSON.stringify(two))
    console.log(2)
  else if (JSON.stringify(nums[i]) == JSON.stringify(three))
    console.log(3)
  else if (JSON.stringify(nums[i]) == JSON.stringify(four))
    console.log(4)
  else if (JSON.stringify(nums[i]) == JSON.stringify(five))
    console.log(5)
  else if (JSON.stringify(nums[i]) == JSON.stringify(six))
    console.log(6)
  else if (JSON.stringify(nums[i]) == JSON.stringify(seven))
    console.log(7)
  else if (JSON.stringify(nums[i]) == JSON.stringify(eight))
    console.log(8)
  else if (JSON.stringify(nums[i]) == JSON.stringify(nine))
    console.log(9)
  else return
}
*/
