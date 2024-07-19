// const arr = ["HTML","CSS","JavaScript","React"];
// const obj1 = {
//     name:"venkatesh",
//     city:"guntur",
//     gender:"male",
//     getIntro :  function () {
//         console.log(`Hai i am ${this.name} and i am from ${this.city}`)
//         console.log(this)
//     }

// }

// obj1.getIntro();

// const obj2 = {
//     job:'Application Developer',
//     location:"Hyderabad",
//     workType:"Work Form Home",
//     city:"Chennai",
//     getDetails: function (){
//         console.log(`Hai i am ${obj1.name} and i am from ${obj1.city} , I am currently working as ${this.job} at ${this.location} mode of work is ${this.workType}`)
//     }
// }

// obj2.getDetails();

// *********************old_Method*****************************//
// obj2.__proto__ = obj1;

// const name = "Venkatesh";

// const city = ["hyderabad","chennai", "pune"]

// const user = {
//     name:"pavan",
//     job:"Developer",
//     city:"Hyderabad",
//     getDetails: function (){
//         console.log(`Hai i am ${this.name} my role is ${this.role} at ${this.city}`)
//     }
// }

// const partTime = {
//     role:"marketing",
//     place:"Noida",
//     qualification:"M.Tech",
//     salary:700000,
//     getNewDetails: function (){
//         console.log(`Hai I am Having Part Time Job ${this.role} and fullTime job ${this.job} at ${this.city}  `)
//     },

//     __proto__:user
// }

// partTime.getNewDetails();

// ********************************************OBJECT_Prototype Method *************************************************8888888//

// Object.prototype.getIntro = function () {
//     console.log("i am calling the user", this.name )
// }
// // user.getDetails();

// // user.getIntro();

// ****************************************** Array_ProtpType*********************************************//
// Array.prototype.getLocal = function () {
//     console.log("i am calling from Array function" );
// }

// city.getLocal();

//******************************************* */ STRINGS****************************************//

// String.prototype.spaceLength = function () {
//     console.log(`the true length is ${this.trim().length}`)
// }

// name.spaceLength();

const user = {
  name: "pavan",
  job: "Developer",
  city: "Hyderabad",
  getDetails: function () {
    console.log(
      `Hai i am ${this.name} my role is ${this.role} at ${this.city} ${this.salary}`
    );
  },
};

// user.getDetails();

const partTime = {
  role: "marketing",
  place: "Noida",
  qualification: "M.Tech",
  salary: 700000,
  getNewDetails: function () {
    console.log(
      `Hai I am Having Part Time Job ${this.role} and fullTime job ${this.job} at ${this.city}  `
    );
  },
};
// Object.setPrototypeOf(partTime, user);
Object.setPrototypeOf(user,partTime);
user.getDetails();
partTime.getNewDetails();

// Object.setPrototypeOf(partTime, user);
