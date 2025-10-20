const compose = (...fns) => {
  // Проверяем, что все аргументы — функции
  if (fns.some(fn => typeof fn !== 'function')) {
    throw new TypeError('All arguments to compose must be functions');
  }

  // Список обработчиков ошибок
  const errorHandlers = new Set();

  // Основная функция композиции
  const composed = (x) => {
    try {
      // Выполняем справа налево без рекурсии
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (e) {
      // На ошибке — вызываем всех подписчиков
      errorHandlers.forEach(handler => handler(e));
      return undefined; // Завершаем с undefined
    }
  };

  // Метод подписки на ошибки
  composed.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      errorHandlers.add(handler);
    }
    return composed; // для чейнинга
  };

  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(cube, twice, inc);
console.log(f(2)); // (2 + 1) * 2 = 6 → 6³ = 216

const g = compose(inc, inc);
console.log(g(7)); // 9

// Ошибка при передаче не функции
try {
  const bad = compose(inc, 7, cube);
} catch (e) {
  console.error('Ошибка композиции:', e.message);
}

// Ошибка внутри функции
const boom = () => { throw new Error('Fail'); };
const h = compose(cube, boom, inc);

h.on('error', e => console.error('Поймал ошибку:', e.message));
console.log(h(3)); // undefined
