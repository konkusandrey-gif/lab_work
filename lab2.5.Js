
const phoneBookArray = [
  { name: '"Andrey', phone: '+491517244980' },
  { name: 'Oleksiy', phone: '+38098065684' },
  { name: 'Maria', phone: '+380957157636' },
  { name: 'Viktoria', phone: '+,+491705056537' }
];


function findPhoneByName(name) {
  for (let i = 0; i < phoneBookArray.length; i++) {
    if (phoneBookArray[i].name === name) {
      return phoneBookArray[i].phone; 
    }
  }
  return 'Name not found';
}


const phoneBooknumber = {
  'Andrey': '+491517244980',
  'Oleksiy': '+38098065684',
  'Maria': '+380957157636',
  'Viktoria': '+,+491705056537'
};


function findPhoneByNamenumber(name) {
  return phoneBooknumber[name] || 'Name not found';
}

console.log(findPhoneByName('Andrey'));     // +491517244980
console.log(findPhoneByName('Viktoria'));   // +491705056537
console.log(findPhoneByName('Taras'));      // Name not found

console.log(findNameByPhone("+491517244980")); // Andrey
console.log(findNameByPhone("+491705056537")); // Viktoria
console.log(findNameByPhone("+380123456789")); // Phone not found
