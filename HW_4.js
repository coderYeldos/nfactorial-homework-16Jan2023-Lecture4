// Part 1
let age = 20;
let checkAge = (age > 18) ? true: confirm("Do u have permission?");
console.log(checkAge);


// Part 2
let power = (x,n) => (x ** n);
console.log(power(5,2));


// Part 3  
 
let ask = (question,yes, no) => (confirm(question) ? yes(): no());
  
ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );


// Part 4
let arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => (b-a));

alert( arr ); // 8, 5, 2, 1, -10

// Part 5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша


// Part 6
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

const usersMapped = users.map(tmp => ({
    fullName: `${tmp.name} ${tmp.surname}`,
    id: tmp.id
}));
/* ... ваш код ... *//*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

// Part 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (arr) => {
    return arr.reduce((acc, val) => acc + val.age, 0) / arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28