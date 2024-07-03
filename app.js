////////////////////////////////////////****************************  var let and const *************************//////////////////
// console.log(a,b);
// var a;
// var b = 10;
// var b = 20;
// console.log(a,b);




// console.log(x,y);
// let x = 30;
// let y;
// y = 60;
// let x = 40;
// console.log(x,y)





// console.log(p,q);
// const p = 90;
// const p = 100;
// const q;
// q = 200;
// console.log(p,q);




// 
// functions
// 1 decleration
// function fact(n){
//     if(n === 0  || n === 1){
//         return 1;
//     } else {
//         return ( n * fact(n-1));
//     }
// }

// console.log(fact(6));

// 2 expression
// const fact = function(n){
//     if(n === 0  || n === 1){
//                 return 1;
//             } else {
//                 return ( n * fact(n-1));
//             }
// }

// console.log(fact(4))



// 3 arrow function
// const fact = (n) => {
//         if(n === 0  || n === 1){
//                     return 1;
//                 } else {
//                     return ( n * fact(n-1));
//                 }
//     }
    
//     console.log(fact(4))



// block scope
// var x = 10
// {
//     var x = 20;
//     console.log(x)
// }
// console.log(x)



// shodwing 
// const x = 10
// {
//     var x = 20;
//     console.log(x)
// }
// console.log(x)



// closures
// 1
// console.log(print())
// // console.log(brek())   not posiiible closure
// function print() {
//     let n = 300;
//     // console.log(brek()) only possible
//     function brek() {
//         var av = 200;
//         console.log(av);
//         console.log(n)
//     }
// }


// 2

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();

// 3
// function createCounter() {
//     let count = 0;
//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// console.log(counter.increment()); // Outputs: 1
// console.log(counter.increment()); // Outputs: 2
// console.log(counter.decrement()); // Outputs: 1








// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
//   };
  
//   console.log(factorial(7)); 








///////////////////////////////////////////////////////////////////// ARRAYS AND OBJECTS ////////////////////////////////////////////////////////////////


const fruits = ["Apple", "Banana", "Mango","Avagdro","Dragon","Chiku"];



// *****************************************1*****************************************
// const result = fruits.pop();
// const output = fruits.shift();
// const res2 = fruits.push("Pineapple");
// const res3 = fruits.splice(1,1,"orange");
// console.log(result);
// console.log(fruits);
// console.log(output);
// console.log(fruits);
// console.log(res3);
// console.log(fruits);


//******************************************2******************************************
// const output = fruits.map((item,index)=>{
// 	return item.length;
// }).filter((item) => item > 4 )
// console.log(output);


// ***********************************************3******************************
// const num = [1,5,3,7,82,90,34,22,67,44];
// const result = fruits.sort();
// const out = num.sort((a,b) => a - b);
// console.log(result);
// const output = fruits.reverse();
// console.log(out)
// console.log(output);

// **************************************************4***************************************
// const res = fruits.find((item,index) =>{
// 	 console.log(item,index)
// return item.includes('g') })
// console.log(res);
// const out = fruits.indexOf("Mango");
// console.log(out);


// ***********************************************************5***************************************
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const output = numbers.map((item)=>{
// 	return item**2;
// }).filter((item) => item%2 === 0 )
// console.log(output);


// *************************************6**************************************************
const expenses = [ { amount: 50, category: 'Groceries' }, 
	{ amount: 20, category: 'Transportation' }, 
	{ amount: 100, category: 'Entertainment' }, 
	{ amount: 80, category: 'Groceries' }, 
	{ amount: 30, category: 'Transportation' } ];

	// ***************************************************2b**********************

	// function calculateTotalAmountSpent(expenses) {
		
	// 	let totalAmount = 0;
	
	// 	for (const expense of expenses) {
			
	// 		totalAmount += expense.amount;
	// 	}
	
	// 	return totalAmount;
	// }
	// const totalSpent = calculateTotalAmountSpent(expenses);
	// console.log(totalSpent); 



	// ***************************************!1*********************************
	// function calculateTotalExpensesByCategory(expenses) {
	
	// 	const totalsByCategory = {};
	
	// 	for (const expense of expenses) {
			
	// 		const { amount, category } = expense;
	
		
	// 		if (totalsByCategory[category]) {
	// 			totalsByCategory[category] += amount;
	// 		} else {
	// 			totalsByCategory[category] = amount;
	// 		}
	// 	}
	
	// 	return totalsByCategory;
	// }
	
	// const result = calculateTotalExpensesByCategory(expenses);
	// console.log(result);
	
	

	// *********************************7************************
	// const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];
	// const result =  nestedArray.flat(3);
	// console.log(result)



	// ******************************8***************************
	// const car = {
	// 	make:"tata",
	// 	model:"harrier",
	// 	year: 2022
	// }
// console.log(car.make);
// console.log(car.year);
// car.model =  "Camry"
// console.log(car)
// car.color = "blue";
// console.log(car);

// for (const key in car) {
//     if (car.hasOwnProperty(key)) {
//         console.log(`${key}: ${car[key]}`);
//     }
// }


// ********************************9*******************************
// const person = {
// 	firstName:"venkatesh",
// 	lastName:"jakkam",
// 	address:{
// 		street:'s nagar',
// 		city:'guntur',
// 		zipcode:522124
// 	}
// }
// console.log(person.address.city);



// **********************************10***********************************************
// const students = [{
// 	name:"venkatesh",
// 	grade:"A"
// },{
// 	name:"jakkam",
// 	grade:"C"
// },{
// 	name:"rahul",
// 	grade:"B"
// },{
// 	name:"david",
// 	grade:"E"
// },
// ]
// students.forEach((item) => {
// 	console.log(item.name)
// 	console.log(item.grade)
// })



// ****************************11******************************
// const car = {
// 		make:"tata",
// 		model:"harrier",
// 		year: 2022
// 	}

// 	const {make:mk , model:mo, year:yr} = car;
// 	console.log(mo,mk,yr);


// ******************************12*****************************************
// const obj1 = {
// 	a:1,
// 	b:2
// }

// const obj2 = {
// 	c:4,
// 	d:5
// }

// const obj3 = {...obj1, ...obj2};

// console.log(obj3);