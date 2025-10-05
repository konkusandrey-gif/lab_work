// Интроспекция объекта
const introspect = (iface) => {
  const result = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
};


const iface = {
  m1: x => [x],
  m2: (x, y) => [x, y],
  m3: (x, y, z) => [x, y, z],
  notFunc: 42
};

console.log(introspect(iface));