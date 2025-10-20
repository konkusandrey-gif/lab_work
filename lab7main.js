// 1️ 
function removeElement(array, item) {
  const index = array.indexOf(item); // ищем индекс элемента
  if (index !== -1) {
    array.splice(index, 1); // удаляем элемент по индексу
  }
}

// Пример
const numbers = [10, 20, 30, 40, 50, 60];
removeElement(numbers, 30);
console.log(numbers); 
// [10, 20, 40, 50, 60]

const cities = ['Paris', 'Rome', 'Madrid', 'Lisbon'];
removeElement(cities, 'Madrid');
removeElement(cities, 'Berlin'); // нет в массиве 
console.log(cities);
//  ['Paris', 'Rome', 'Lisbon']


// 2️ 
function removeElements(array, ...items) {
  items.forEach(item => {
    let index;
    // Удаляем все вхождения элемента
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  });
}

// Пример
const products = ['apple', 'banana', 'orange', 'kiwi', 'banana'];
removeElements(products, 'banana', 'kiwi');
console.log(products);
//  ['apple', 'orange']


const digits = [5, 7, 9, 5, 1, 9, 3];
removeElements(digits, 5, 9);
console.log(digits);
//  [7, 1, 3]


// 3️ 
function unique(array) {
  return Array.from(new Set(array)); // или [...new Set(array)]
}

// Пример
const colors = ['red', 'blue', 'red', 'green', 'blue'];
const uniqueColors = unique(colors);
console.log(uniqueColors);
//  ['red', 'blue', 'green']

const animals = ['cat', 'dog', 'cat', 'bird', 'dog'];
console.log(unique(animals));
//  ['cat', 'dog', 'bird']


// 4️ 
function difference(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}

// Пример
const list1 = [100, 200, 300, 400, 500];
const list2 = [200, 500];
const result1 = difference(list1, list2);
console.log(result1);
// [100, 300, 400]

const teamA = ['Alice', 'Bob', 'Charlie'];
const teamB = ['Bob', 'Diana'];
const result2 = difference(teamA, teamB);
console.log(result2);
// ['Alice', 'Charlie']

