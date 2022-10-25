// const arrayExa = [1, 2, 3, 4 ,5 ,6, 7, 8, 9];
//
// for ( let i = 0; i < arrayExa.length; i++ ){
//     if (arrayExa[i] % 3 ===  0 ){
//         console.log(arrayExa[i]);
//     }
// }


// const array = ['js', 'css', 'jq'];
// console.log(array);
//
// array.unshift(2);
// console.log(array);
//
// array.pop()
// array.pop()
// array.shift()
//
// console.log(array)


// const array = ['js', 'css', 'jq'];
// console.log(array);
//
// array.push(2);
// console.log(array);
//
// array.shift()
// array.shift()
// array.pop()
//
// console.log(array)

//
// let array = [1, 2, 3, 4, 5];
// console.log(array);
//
// const five = array.pop();
// const four = array.pop();
// console.log(array);
//
// array.push('a', 'b', 'c', four, five);
// console.log(array);


// let array = [1, 2, 3, 4, 5];
// console.log(array);
//
// const five = array.pop();
// const four = array.pop();
// const three = array.pop();
// const two = array.pop();
// console.log(array);
//
// array.push('a', 'b', two, three, four, 'c', five, 'e');
// console.log(array);


// Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший.
//
// const array = [1, 2, 3, 5, 7, 9, 10];
// const array2 = [];
//
// console.log(array);
// console.log(array2);
//
// for (let i = 0; i <= 0; i++){
//      array2.push([i]);
// }
//
// console.log(array2)




//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// - перебрати його циклом for
// - перебрати циклом for та вивести  числа тільки з непарним індексом
// - перебрати циклом for та вивести  числа тільки парні  значення

// let array = [2,17,13,6,22,31,45,66,100,-18];
// console.log(array)
//
// for (let i = 0; i < array.length; i++){
//     if (array[i] % 3 === 0){
//         console.log('Rostyslav');
//     }else {
//         console.log(array[i]);
//     }
// }


//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// - перебрати його циклом while
// - перебрати циклом while та вивести  числа тільки з непарним індексом
// - перебрати циклом while та вивести  числа тільки парні  значення

// let array = [2,17,13,6,22,31,45,66,100,-18];
// console.log(array)
//
// let i = 0;
// while (i < array.length) {
//     i++;
//     if (array[i] % 3 === 0){
//         console.log('Rostyslav');
//     } else {
//         console.log(array[i]);
//     }
// }


// -вивести масив в зворотньому порядку.

// let array = [2,17,13,6,22,31,45,66,100,-18];
// console.log(array)
//
// for (let i = array.length - 1; i >= 0; i--){
//     if(array[i] % 3 === 0 ){
//         console.log('Rostyslav');
//     } else {
//         console.log(array[i]);
//     }
// }


// -вивести масив в зворотньому порядку.

// let array = [2,17,13,6,22,31,45,66,100,-18];
// console.log(array);
//
// let i = array.length;
// while (i >=0 ) {
//     if (array[i] % 3 === 0){
//         console.log('Rostyslav');
//     } else {
//         console.log(array[i]);
//     }
//     i--;
// }


// створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let array = [];
//
// for(let i = 0; array.length < 50; i++){
//     if(i % 2 === 0){
//          array.push(i + ' TEST');
//     }
// }
// console.log(array)

// let array = [2, 3, 'test', true, false, 4, 32, 'rostyslav'];
//
// for (let i =0; i < array.length; i++){
//     if (typeof array[i] === 'boolean' && array[i] === true ){
//         console.log(array[i])
//
//     }
// }


// let array = [];
//
// for (let i = 0; array.length < 20; i= i + 3){
//     let i = Math.round(Math.random() * 100);
//     array.push(i);
// }
// console.log(array)

//вивести кожний 3 елемент, якщо він парний записати в новий масив

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array)
// let array2 = [];
//
// for (let i = 0; i < array.length; i = i + 3){
//     if(i % 2 === 0){
//         console.log(i)
//         array2.push(i);
//     }
// }
// console.log(array2)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//         console.log(array[i - 1])
//     }
// }

// Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки.
// Обрахувати середній чек.

// let array = [100,250,50,168,120,345,188];
// let sum = 0;
//
// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
//     sum = sum + array[i];
//
// }
// console.log(sum + ' Check')
// console.log(sum/array.length)


//Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


// const array = [2, 'false', true, 18, [], 0];
// const otherArray = [];
// const anotherArray = [];
//
// for (const element of array) {
//     if(typeof element === 'number'){
//         console.log(element);
//         otherArray.push(element);
//     }
// }
//
// console.log(otherArray)
// // Створити масив з рандомними значеннями
// // помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// for (const element of otherArray) {
//     anotherArray.push(element * 5);
// }
//
// console.log(anotherArray)
