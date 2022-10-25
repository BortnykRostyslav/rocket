// // створити функцію яка приймає три числа та виводить найбільше.
// створити функцію яка приймає три числа та виводить найменьше.


// function outputMaxNumber(a = 12, b = 14, c = 18){
//     if( a > b && a > c){
//         console.log('Max number = ' + a)
//     }
//     if( a < b && b > c){
//         console.log('Max number = ' + b)
//     }
//     if( a < c && b < c){
//         console.log('Max number = ' + c)
//     }
// }
//
// function outputMinNumber(a = 1, b = 14, c = 22){
//     if( a < b && a < c){
//         console.log('Min number = ' + a)
//     }
//     if( a > b && b < c){
//         console.log('Min number = ' + b)
//     }
//     if( a > c && b > c){
//         console.log('Min number = ' + c)
//     }
// }
//
// outputMinNumber();
// outputMaxNumber();

//  створити функцію яка повертає найбільше число з масиву
//  створити функцію яка повертає найменьше число з масиву

// let array = [];
//
// function randomNumber(){
//     for (let i = 0; array.length < 20; i= i + 3){
//         let i = Math.round(Math.random() * 100);
//         array.push(i);
//     }
//     console.log(array)
//
//     function outputMinNumber (){
//         console.log(Math.min(...array));
//     }
//     outputMinNumber()
//
//     function outputMaxNumber (){
//         console.log(Math.max(...array));
//     }
//     outputMaxNumber()
// }
//
// randomNumber();

// створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// створити функцію яка приймає масив чисел
// та повертає середнє арифметичне його значень.

// function sumElements(array = [100,250,50,168,120,345,188], sum = 0){
//     for (const arrayNumber of array) {
//         console.log(arrayNumber)
//         sum = sum + arrayNumber;
//     }
//     console.log(sum/array.length)
// }
//
// sumElements();

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function arrayKey(array = [{name: 'Dima', age: 13}, {model: 'Camry'}]){
//
// }


//Створити функцію яка приймає масив будь яких объектів,
// та повертає масив ключів всіх обєктів

// function Key (array =[{name: 'Dima', age: 13}, {model: 'Camry'}], key_array = [] ){
//     array.map(value => {
//         key_array.push(...Object.keys(value))
//     });
//     console.log(key_array)
// }
//
// Key();

// Створити функцію яка приймає масив будь яких объектів
// та повертає масив значень всіх обєктів

// function Value (array =[{name: 'Dima', age: 13}, {model: 'Camry'}], key_array = [] ){
//     array.map(value => {
//         key_array.push(...Object.values(value))
//     });
//     console.log(key_array)
// }
//
// Value();

//створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив
// будь яких розмірів

// const array1 = [1,2,3,4,7];
// const  array2 = [2,3,4,5];
//
// function SumArray (array1 = [],array2 = [] ){
//     let newArray = [];
//
//     const biggestLenght = array1.length > array2.length ? array1.length : array2.length;
//
//     for (let i = 0; i < biggestLenght; i++) {
//         newArray[i] = ((array1[i] || 0) + (array2[i] || 0));
//     }
//     return newArray;
// }
//
// let sumArray = SumArray(array1, array2);
//
// console.log(sumArray);
// console.log(array1);
// console.log(array2);


