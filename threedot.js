const age = [12, 13, 14, 15, 16, 17];
const age2 = [21, 22, 23, 24, 25, 26];
const allAges = age.concat(age2);
console.log(allAges); //২টা array একত্রিত করার ট্রেডিশনাল পদ্ধতি।

// অথবা

const age = [12, 13, 14, 15, 16, 17];
const age2 = [21, 22, 23, 24, 25, 26];
const age3 = [12, 13, 14, 15, 16];
const allAges = age.concat(age2).concat(age3);
console.log(allAges); //৩টা array একত্রিত করার ট্রেডিশনাল পদ্ধতি।

// অথবা

const age = [12, 13, 14, 15, 16, 17];
const age2 = [21, 22, 23, 24, 25, 26];
const age3 = [12, 13, 14, 15, 16];
const allAges = age.concat(age2).concat([5]).concat(age3);
console.log(allAges); //একাদিক array একত্রিত করার  সাথে সাথে নতুন এলিমেন্ট সেট করার ট্রেডিশনাল পদ্ধতি।

// অথবা

const age = [12, 13, 14, 15, 16, 17];
const age2 = [21, 22, 23, 24, 25, 26];
const age3 = [12, 13, 14, 15, 16];
const allAges = [...age, ...age2, 5, ...age3];
console.log(allAges); //একাদিক array একত্রিত করার  সাথে সাথে নতুন এলিমেন্ট সেট করার (...)threeDot পদ্ধতি।

// এবং

const business = 650;
const minister = 450;
const sochib = 900;
const takaPoisa = [659, 450, 900, 1500];
const maximum = Math.max(...takaPoisa);
console.log(maximum); // array এর মধ্যে সর্বোচ্চ মান বের করার (...)threeDot পদ্ধতি।