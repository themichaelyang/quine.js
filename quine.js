let data = {
  'c': "console.log('let data = ' + JSON.stringify(data))",
  'f': "for (let i of data['p']) {",
  'l': "console.log(data[i]) }",
  'p': "cfl"
}

console.log('let data = ' + JSON.stringify(data))
for (let i of data['p']) {
  console.log(data[i]) }
