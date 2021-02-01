const hubby = "Eliyas Kanchon";
//hubby = "Omor sunny";  //const দিয়ে কোনো ভেরিয়েভল ডিক্লেয়ার করলে তা আর চেঞ্জ হবে না।
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
//numbers = ["Sunn", "Salman", "Manna"]; const এর array এর ভিতরে নতুন ভেলু যোগ/ বদলানো যায় কিন্তু সম্পুর্ন array পরিবর্তন করা যায় না।
const nayok = { name: 'Sakib khan', phone: '01723' };
//console.log(numbers);

let patientName = 'Rahim chacha';
patientName = 'Fatema Khala';
console.log(patientName); // let দিয়ে বেরিয়েবল ডিক্লেয়ার করলে ভিতরের মান চেঞ্জ করা যাবে , কিন্তু বাহির থেকে কনসল করা যাবেনা অর্থাৎ let এর মান বাহিরে leack হবে না । 

let sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i); //আবার Var দিয়ে ডিক্লেয়ার করলে বাহির/ ভিতর সব জায়গা থেকে console করা যায়।