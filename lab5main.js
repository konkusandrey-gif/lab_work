
// 1. Функция chainSeq(...args)
//    — замыкание + чейнинг с другими числами

function chainSeq(func) {
  const operations = [func]; // сохраняем первую функцию

  function chain(next) {
    // если аргумент — функция, добавляем и продолжаем чейнинг
    if (typeof next === 'function') {
      operations.push(next);
      return chain;
    }

    // если аргумент — число, прогоняем через все функции
    if (typeof next === 'number') {
      return operations.reduce((result, f) => f(result), next);
    }

    return undefined; // на всякий случай
  }

  return chain;
}

// Примеры использования:
console.log(
  chainSeq(x => x * 3)
    (x => x - 4)(6)
); // (6 * 3) - 4 = 14

console.log(
  chainSeq(x => x / 2)
    (x => x + 9)(8)
); // (8 / 2) + 9 = 13

console.log(
  chainSeq(x => x - 5)
    (x => x * 4)
    (x => x + 2)
    (x => x / 3)(9)
); // (((9 - 5) * 4) + 2) / 3 = 6



// 2. Функция makeArray()
//    — функциональный объект с замыканием

function makeArray() {
  const storage = [];

  // Основная функция для доступа к элементам
  function arrAt(index) {
    return storage[index];
  }

  // Добавить элемент в конец
  arrAt.add = function(item) {
    storage.push(item);
  };

  // Удалить последний элемент
  arrAt.remove = function() {
    return storage.pop();
  };

  return arrAt;
}

// Пример использования:
const items = makeArray();

items.add('apple');
items.add('banana');
items.add('cherry');

console.log(items(0)); // apple
console.log(items(1)); // banana
console.log(items(2)); // cherry

console.log(items.remove()); // cherry
console.log(items.remove()); // banana
console.log(items.remove()); // apple

console.log(items.remove()); // undefined
