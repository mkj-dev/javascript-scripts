function factorialize(num) {
  let arr = []
  if (num === 0) return 1
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
  num = arr.reduce((prev, next) => prev * next)
  return num;
}
