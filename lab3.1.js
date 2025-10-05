// Случайное целое число в диапазоне [min, max]
const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


console.log(random(5));      // от 0 до 5
console.log(random(10, 20)); // от 10 до 20
console.log(random(100, 1000)); // от 100 до 1000