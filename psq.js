// ************************************ 1 **************************//

// const name = "venkatesh";
// const result = name.split('');
// console.log(result);


// ************************************ 2 **************************//

// const newArray = [1,2,[3,4],[5,6,7,[8,9,10,[12,13,14,15,16]],11]];
// const result = newArray.flat(Infinity)
// console.log(result);


// ********************************** 3 *****************************//

// 1

// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// const outPut = Math.max(...number);
// console.log(outPut);


// // ****************using For Loop********************//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log(max); 

// ******************************* 4 *********************************/

// const removeDuplicateEle = (inputArr) => {
//     let uniqueArr = [];
//     for(let i=0; i<inputArr.length; i++) {
//         if(!uniqueArr.includes(inputArr[i]))
//             uniqueArr.push(inputArr[i])
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicateEle([1,2,3,5,3,1,9]));  


//**************************************** 5 *****************************//


// let a = ["venki@gmail.com","pavan@gmail.com","kumar@gmail.com"];
// Method--1
// for(let i = 0; i < a.length; i++) {
//     console.log(a[i].slice(0, a[i].indexOf('@')));
// }
// Method-2
// const data = a.map((item) => {
//     return item.split('@')[0];
// });

// console.log(data);