// IPv4 → число
const ipToNumber = (ip = '127.0.0.1') => {
  const bytes = ip.split('.').map(Number);
  return bytes.reduce((acc, byte, index) => acc + (byte << ((3 - index) * 8)), 0);
};

// 🔹 Проверка:
console.log(ipToNumber());                // 2130706433
console.log(ipToNumber('10.0.0.1'));      // 167772161
console.log(ipToNumber('192.168.1.10'));  // -1062731510
console.log(ipToNumber('165.225.133.150'));// -1511946858
console.log(ipToNumber('0.0.0.0'));       // 0
console.log(ipToNumber('8.8.8.8'));       // 134744072
