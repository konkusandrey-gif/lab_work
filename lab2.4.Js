'use strict';
function fn() {
 
  const firstUser = { name: 'Alice' };

  let broUser = { name: 'Bob' };

  firstUser.name = 'Anna';      
  broUser.name = 'Boris';       

  console.log('після зміни:');
  console.log('firstUser:', firstUser); 
  console.log('broUser:', broUser);

    return { broUser, firstUser };
}

function createUser(name, city) {
    return { name, city };
}
console.log(createUser('Andrey','Kharkov'));
module.exports = { fn, createUser };

