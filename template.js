const firstName = "Justin";
const lastName = "TimberLance";
const fullName = firstName + " " + lastName + " is a good boy";
console.log(fullName); //এইভাবেও অধিক স্ট্রিং এর মাজে ফাক দেওয়া যায়।

// অথবা 
const firstName = "Justin";
const lastName = "TimberLance";
const fullName2 = `${firstName} ${lastName} is a good boy`;
console.log(fullName2); //এইভাবেও(``)carrot sign দিয়ে অধিক স্ট্রিং এর মাজে ফাক দেওয়া যায়।

// অথবা 
const firstName = "Justin";
const lastName = "TimberLance";
const fullName2 = `${firstName} ${10 +21+40+ 10 +11} is a good boy`;
console.log(fullName2); //এইভাবেও(``)carrot sign দিয়ে অধিক স্ট্রিং এর মাজে ফাক সহ হিসাব করে  দেওয়া যায়।

//(``) carrot sign দিয়ে multiline পর পর দেওয়া যায়। 
const multiLine = `I love you
I miss you
no. I don't need you
Don't call me any more
Baily road e ar dekha hobena bondhu.`
console.log(multiLine);