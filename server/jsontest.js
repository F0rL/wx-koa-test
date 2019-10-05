const obj = {
  name: 'kuma',
  age: 18,
  toJSON: function () {
    return {
      name: 'love'
    }
  }
}

console.log(typeof(JSON.stringify(obj)))
console.log(JSON.stringify(obj))