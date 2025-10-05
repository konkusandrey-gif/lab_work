

const arr = [
  true, 'hello', 5, 12, -200, false, false, 'word', 
  3.14, 'JS', null, vilka, 0, { 1:8}, [1, 2], 
  'example', true
];

// Объект-коллекция для подсчёта
const counter = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0 };

// Цикл подсчёта
for (const item of arr) {
  let type = typeof item;
  
  // Для массивов и null typeof возвращает 'object'
  if (item === null) type = 'null'; // отдельный случай для null
  if (Array.isArray(item)) type = 'array'; // отдельный случай для массивов

  if (!(type in counter)) counter[type] = 0; // добавляем новые типы при необходимости
  counter[type]++;
}

console.log(counter);

