function add(num1, num2) {
    return num1 + num2;
}
const total = add(15, 17);
console.log(total); // যোগের নিয়ম


function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(15);
console.log(total); //২য় ভ্যলু না থাকলে।

// //** অথবা */

function add(num1, num2) {
    num2 = num2 || 20;
    return num1 + num2;
}
const total = add(15);
console.log(total); // নতুন ভ্যলু দিয়েও করা যায়।

//** অথবা

function add(num1, num2 = 30) {
    return num1 + num2;
}
const total = add(15);
console.log(total); // এইভাবেও করা যায়।

//** অথবা

function add(num1, num2 = 30) {
    return num1 + num2;
}
const total = add(15, 5);
console.log(total);