const person = { name: 'John', age: 35, email: 'sarwarputul@gmail', address: 'Sylhet', phone: '01723231819', gfName: 'Kate Winslate' };
const { address, phone, incomes, gfName } = person;
console.log(gfName, phone, address);
console.log(gfName, address, incomes);

// অথবা

const friends = ['Sakib khan', 'Arman khan', 'Salman khan', 'Amir khan', 'Shahrukh khan'];
const [chutoFriend, nextFriend, ...restFriends] = friends;
console.log(chutoFriend, nextFriend, ...restFriends);
console.log(...restFriends);

// অথবা 
const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger shrof'
    }
}

const { leader } = complexObject.info;