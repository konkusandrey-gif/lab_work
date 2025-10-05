const average = (a, b) => (a + b) / 2;
console.log(average(1, 8));

const square = x => x * x;  
console.log(square(3)); 

const cube = x => x ** 3;
console.log(cube(4));

function calculate() {}
  const results = [];

  for (let i = 0; i <= 9; i++) {
    const sq = square(i);      
    const cb = cube(i);        
    const avg = average(sq, cb);
    results.push(avg);         

  return results;
}


console.log(calculate());

module.exports = { average, square, cube, calculate }; 