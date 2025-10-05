
const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1); // используем random
    key += characters[index];
  }
  return key;
};

// 🔹 Проверка:
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; //базово задано
const key = generateKey(16, characters);
console.log(key); // например: "eg599gb60q926j8i" (базово задано)
