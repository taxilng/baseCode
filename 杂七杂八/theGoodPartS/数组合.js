const arr = [1,2,3,4,5]
const newArr = arr.forEach(v => {
  return arr.find(i => v + i === 6)
})
console.log(newArr);
