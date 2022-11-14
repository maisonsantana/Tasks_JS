"use strict";

// 1. Людина вводить номер місяця, ви виводите пору року.
// виконати 2 варіантами: через switch та if...else if...else.

// switch

// const userNumber = +prompt("Введите номер месяца!");

// switch (userNumber) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("fall");
//     break;
//   default:
//     alert("404 try again");
// }

// if...else

// const userNumber = +prompt("Введите номер месяца!");

// if (userNumber === 12) {
//   console.log("winter");
// } else if (userNumber <= 2) {
//   console.log("winter");
// } else if (userNumber <= 5) {
//   console.log("spring");
// } else if (userNumber <= 8) {
//   console.log("summer");
// } else if (userNumber <= 11) {
//   console.log("fall");
// } else {
//   console.log("404 try again");
// }

// ----------------------------------------------

// 2. Людина вводить вік (привести до числа), ви виводите класифікацію за віком.

// const userAge = +prompt("Введите свой возраст!");

// if (userAge <= 2) {
//   console.log("baby");
// } else if (userAge <= 6) {
//   console.log("kinder");
// } else if (userAge <= 12) {
//   console.log("child");
// } else if (userAge <= 18) {
//   console.log("teenager");
// } else if (userAge <= 65) {
//   console.log("adult");
// } else if (userAge <= 100) {
//   console.log("oldmen");
// } else if (userAge <= 150) {
//   console.log("super!");
// } else {
//   alert("404 try again");
// }

// ----------------------------------------------

// 3. Людина вводить годину([0-23]), ви виводите привітання
// виконати 2 варіантами: через switch та if...else if...else

// switch

// const userValue = +prompt("Введите ваше время!");

// switch (userValue) {
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     console.log("good morning");
//     break;
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//     console.log("good day");
//     break;
//   case 19:
//   case 20:
//   case 21:
//   case 22:
//   case 23:
//     console.log("good evening");
//     break;
//   case 24:
//     console.log("good night");
//     break;
//   default:
//     alert("404 try again");
// }

// if...else

// const userValue = +prompt("Введите ваше время!");

// if (userValue >= 7 && userValue <= 11) {
//   console.log("good morning");
// } else if (userValue >= 12 && userValue <= 18) {
//   console.log("good day");
// } else if (userValue >= 19 && userValue <= 23) {
//   console.log("good evening");
// } else if (userValue === 24) {
//   console.log("good night");
// } else {
//   alert("404 try again");
// }
