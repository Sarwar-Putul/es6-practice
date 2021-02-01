function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result); // স্বাভাবিক ফাংশন।

// অথবা
const doubleIt = function(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

// অথবা
const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result); //(=>) arrow ফাংশন দিয়ে লিখলে (=>) চিহ্নের পূর্বে থাকে প্যারামিটার এবং পরে থাকে return ।

// অথবা
const add = (x, y) => x + y;
const result = add(50, 70);
console.log(result); // (=>) arrow ফাংশনে দুইটা প্যারামিটার থাকলে ১ম বন্ধনি ()  দিয়ে লিখতে হয়।

// অথবা

const give5 = () => 5;
const result = give5();
console.log(result); // (=>) arrow ফাংশনে কুনো প্যারামিটার না থাকলে একটা ফাকা বন্ধনি দিতে হয়। 

// অথবা

const doMath(x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
};
const result = doMath(7, 5);
console.log(result); // (=>) arrow ফাংশনে বিশাল ভাবে MATH আকারে লিখলে ( => ) এর পরে দ্বিতীয় বন্ধনি দিতে হয়।