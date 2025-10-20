
// 1. Сумма аргументов — цикл for

function sumFor(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// Примеры
console.log("sumFor:", sumFor(5, 10, 15)); // 30
console.log(sumFor(100)); // 100
console.log(sumFor()); // 0
console.log(sumFor(2, -2, 3)); // 3
console.log(sumFor(20, -5, -5, -3)); // 7



// 2. Сумма аргументов — цикл for..of

function sumForOf(...args) {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
}

console.log("sumForOf:", sumForOf(5, 10, 15)); // 30



// 3. Сумма аргументов — цикл while

function sumWhile(...args) {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
}

console.log("sumWhile:", sumWhile(5, 10, 15)); // 30



// 4. Сумма аргументов — цикл do..while

function sumDoWhile(...args) {
  if (args.length === 0) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
}

console.log("sumDoWhile:", sumDoWhile(5, 10, 15)); // 30



// 5. Сумма аргументов — метод reduce()

function sumReduce(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log("sumReduce:", sumReduce(5, 10, 15)); // 30



// 6. Максимальный элемент в двумерном массиве

function max(matrix) {
  let maxValue = -Infinity;
  for (const row of matrix) {
    for (const num of row) {
      if (num > maxValue) {
        maxValue = num;
      }
    }
  }
  return maxValue;
}

// Новый массив 
const m = max([
  [3, 8, 12],
  [15, 22, 9],
  [17, 42, 5],
]);
console.log("max:", m); // 42



// 7. Подсчет продолжительности жизни людей
//     через for..in 

function ages(persons) {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }
  return result;
}

const leaders = {
  roosevelt: { born: 1882, died: 1945 }, // Франклин Рузвельт
  churchill: { born: 1874, died: 1965 }, // Уинстон Черчилль
  stalin: { born: 1878, died: 1953 },    // Иосиф Сталин
  deGaulle: { born: 1890, died: 1970 },  // Шарль де Голль
};

console.log("ages:", ages(leaders));
// { roosevelt: 63, churchill: 91, stalin: 75, deGaulle: 80 }