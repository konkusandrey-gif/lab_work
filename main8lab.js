//  iterate(object, callback)
// 
function iterate(object, callback) {
  Object.keys(object).forEach(key => {
    callback(key, object[key], object);
  });
}

// 
const user = { name: 'Eva', age: 28, city: 'Helsinki' };

iterate(user, (key, value) => {
  console.log({ key, value });
});
// Пример:
// { key: 'name', value: 'Eva' }
// { key: 'age', value: 28 }
// { key: 'city', value: 'Helsinki' }



// store(value)

function store(value) {
  return function() {
    return value;
  };
}


const readMessage = store('Hello from closure!');
console.log(readMessage()); // "Hello from closure!"

const readNumber = store(42);
console.log(readNumber()); // 42



//  contract(fn, ...types)

function contract(fn, ...types) {
  return function(...args) {
    const argTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];

    // Проверка количества аргументов
    if (args.length !== argTypes.length) {
      throw new TypeError(`Ожидалось ${argTypes.length} аргументов, получено ${args.length}`);
    }

    // Проверка типов входных аргументов
    args.forEach((arg, i) => {
      const expectedType = argTypes[i].name.toLowerCase();
      if (typeof arg !== expectedType) {
        throw new TypeError(
          `Аргумент №${i + 1} должен быть типа ${argTypes[i].name}, получен ${typeof arg}`
        );
      }
    });

    const result = fn(...args);

    // Проверка 
    const expectedReturnType = returnType.name.toLowerCase();
    if (typeof result !== expectedReturnType) {
      throw new TypeError(
        `Результат должен быть типа ${returnType.name}, получен ${typeof result}`
      );
    }

    return result;
  };
}


// функция сложения чисел
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const sum = addNumbers(10, 15);
console.log(sum); //  25

//конкатенация строк
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const message = concatStrings('Good ', 'morning!');
console.log(message); //  "Good morning!"

// ошибка
try {
  const wrong = addNumbers(5, 'oops');
} catch (e) {
  console.error('Ошибка:', e.message);
}
