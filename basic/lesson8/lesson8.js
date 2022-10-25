// Зробити свій розпорядок дня.
// У вас має бути не більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Наприклад.
// Прокинутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// // І так далі

// AWAIT
// function goWakeUp (wakeup){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeup >= 8.00){
//                 resolve('Прокидайся, час вставати.')
//             }else {
//                 reject('Ще рано прокидатись.')
//             }
//         },10)
//     })
// }
//
// function goBreakfast(breakfast){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (breakfast >= 8.15){
//                 resolve('Пора снідати.')
//             } else {
//                 reject('Ще рано снідати.')
//             }
//         }, 20)
//     })
// }
//
// function takeAShower(shower){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shower >= 8.30){
//                 resolve('Пора йти в душ.')
//             } else {
//                 reject('Ти ще не поїв, рано йти в душ.')
//             }
//         }, 30)
//     })
// }
//
// function goToWork(work){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (work >= 9.30){
//                 resolve('Пора йти на роботу, і заробляти собі на життя.')
//             } else {
//                 reject('Посиди ще вдома встигнеш, ше напрацюватись.')
//             }
//         }, 15)
//     })
// }
//
// function goDinner(dinner){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dinner >= 13.00){
//                 resolve('Ти попрацював пів дня, йди обідати.')
//             } else {
//                 reject('Потерпи, ще трошки і підеш обідати.')
//             }
//         }, 15)
//     })
// }
//
// function goToHome(home){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (home >= 18.00){
//                 resolve('Ти плідно попрацював, тепер можна і додому.')
//             } else {
//                 reject('Ще не час, сиди працюй.')
//             }
//         }, 10)
//     })
// }
//
// function goToSleep(sleep){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleep >= 23.30){
//                 resolve('Ти виконав усі справи, пора спати, завтра новий день.')
//             } else {
//                 reject('Посиди ше трошки, а через трохи підеш спати.')
//             }
//         }, 10)
//     })
// }
//
// async function myDay(){
//     const wakeup = await goWakeUp(8.00);
//     console.log(wakeup);
//
//     const breakfast = await goBreakfast(8.15);
//     console.log(breakfast);
//
//     const shower = await takeAShower(8.30);
//     console.log(shower);
//
//     const work = await goToWork(9.30);
//     console.log(work);
//
//     const dinner = await goDinner(13.00);
//     console.log(dinner);
//
//     const home = await goToHome(18.10);
//     console.log(home);
//
//     const sleep = await goToSleep(23.30);
//     console.log(sleep);
// }
//
// myDay();

// Проміси
// function goWakeUp (wakeup){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeup >= 8.00){
//                 resolve('Прокидайся, час вставати.')
//             }else {
//                 reject('Ще рано прокидатись.')
//             }
//         },10)
//     })
// }
//
// function goBreakfast(breakfast){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (breakfast >= 8.15){
//                 resolve('Пора снідати.')
//             } else {
//                 reject('Ще рано снідати.')
//             }
//         }, 9)
//     })
// }
//
// function takeAShower(shower){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shower >= 8.30){
//                 resolve('Пора йти в душ.')
//             } else {
//                 reject('Ти ще не поїв, рано йти в душ.')
//             }
//         }, 8)
//     })
// }
//
// function goToWork(work){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             if (work >= 9.30){
//                 resolve('Пора йти на роботу, і заробляти собі на життя.')
//             } else {
//                 reject('Посиди ще вдома встигнеш, ше напрацюватись.')
//             }
//         }, 7)
//     })
// }
//
// function goDinner(dinner){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dinner >= 13.00){
//                 resolve('Ти попрацював пів дня, йди обідати.')
//             } else {
//                 reject('Потерпи, ще трошки і підеш обідати.')
//             }
//         }, 6)
//     })
// }
//
// function goToHome(home){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (home >= 18.00){
//                 resolve('Ти плідно попрацював, тепер можна і додому.')
//             } else {
//                 reject('Ще не час, сиди працюй.')
//             }
//         }, 5)
//     })
// }
//
// function goToSleep(sleep){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleep >= 23.30){
//                 resolve('Ти виконав усі справи, пора спати, завтра новий день.')
//             } else {
//                 reject('Посиди ше трошки, а через трохи підеш спати.')
//             }
//         }, 4)
//     })
// }
//
// goWakeUp(8.00)
//     .then((wakeup) =>{
//         console.log(wakeup);
//
//         return goBreakfast(8.15)
//     })
//     .then((breakfast) => {
//         console.log(breakfast);
//
//         return takeAShower(8.30)
//     })
//     .then((shower ) => {
//         console.log(shower);
//
//         return goToWork(9.30)
//     })
//     .then((work) => {
//         console.log(work);
//
//         return goDinner(13.00)
//     })
//     .then((dinner) => {
//         console.log(dinner);
//
//         return goToHome(18.00)
//     })
//     .then((home) => {
//         console.log(home);
//
//         return goToSleep(23.30)
//     })
//     .then((sleep) => {
//         console.log(sleep);
//     })

// Cb
// function goWakeUp (wakeup, cb){
//     setTimeout(() => {
//         if (wakeup >= 8.00){
//             cb(null, 'Прокидайся, час вставати.');
//         }else {
//             cb('Ще рано прокидатись.')
//         }
//     },10)
// }
//
// function goBreakfast(breakfast, cb){
//     setTimeout(() => {
//         if (breakfast >= 8.14){
//             cb(null, 'Пора снідати.');
//         } else {
//             cb('Ще рано снідати.')
//         }
//     }, 9)
// }
//
// function takeAShower(shower, cb){
//     setTimeout(() => {
//         if (shower >= 8.30){
//             cb(null, 'Пора йти в душ.');
//         } else {
//             cb('Ти ще не поїв, рано йти в душ.')
//         }
//     }, 8)
// }
//
// function goToWork(work, cb){
//     setTimeout(() =>{
//         if (work >= 9.30){
//             cb(null, 'Пора йти на роботу, і заробляти собі на життя.');
//         } else {
//             cb('Посиди ще вдома встигнеш, ше напрацюватись.')
//         }
//     }, 7)
// }
//
// function goDinner(dinner, cb){
//     setTimeout(() => {
//         if (dinner >= 13.00){
//             cb(null, 'Ти попрацював пів дня, йди обідати.');
//         } else {
//             cb('Потерпи, ще трошки і підеш обідати.')
//         }
//     }, 6)
// }
//
// function goToHome(home, cb){
//     setTimeout(() => {
//         if (home >= 18.00){
//             cb(null, 'Ти плідно попрацював, тепер можна і додому.');
//         } else {
//             cb('Ще не час, сиди працюй.')
//         }
//     }, 5)
// }
//
// function goToSleep(sleep,cb){
//     setTimeout(() => {
//         if (sleep >= 23.30){
//             cb(null, 'Ти виконав усі справи, пора спати, завтра новий день.');
//         } else {
//             cb('Посиди ше трошки, а через трохи підеш спати.')
//         }
//     }, 4)
// }
//
// goWakeUp(8.00, (e, msg) =>{
//     if (e){
//         console.error(e);
//         return
//     }
//
//     console.log(msg);
//
//     goBreakfast(8.15, (e, msg) => {
//         if (e){
//             console.error(e);
//             return
//         }
//
//         console.log(msg);
//
//         takeAShower(8.30, (e, msg) =>{
//             if (e){
//                 console.error(e);
//                 return
//             }
//
//             console.log(msg);
//
//             goToWork(9.30, (e, msg) =>{
//                 if(e){
//                     console.error(e);
//                     return
//                 }
//
//                 console.log(msg);
//
//                 goDinner(13.00, (e, msg) => {
//                     if (e){
//                         console.error(e);
//                         return
//                     }
//
//                     console.log(msg);
//
//                     goToHome(18.00, (e, msg) => {
//                         if (e){
//                             console.error(e);
//                             return
//                         }
//
//                         console.log(msg);
//
//                         goToSleep(23.30, (e, msg) => {
//                             if (e){
//                                 console.error(e);
//                                 return
//                             }
//
//                             console.log(msg);
//                             console.log('День закінчено.');
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })