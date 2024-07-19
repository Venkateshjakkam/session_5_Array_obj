console.log("start");

//*********************************************Call Back HEll ******************************************/
// function getDetails(details,cb){
//     setTimeout(()=>{
//         cb(`Share the Detaile ${details}`);
//     }, 1000);
// }


// function getIntro(name,cb) {
//     setTimeout(() => {
//         cb(`Hai he is ${name} `)
//     },800)
// }


// function getBio(demo,cb){
//     setTimeout(()=>{
//         cb(`He has all the Qualification to join the role ${demo}`)
//     },1000)
// }


// const message = getIntro("venkatesh", function (message){
//     console.log(message)
//     getDetails("He is a Developer ", function (action){
//         console.log(action);
//         getBio("immediatly",function (action){
//             console.log(action);
//         });
//     });
// });


//********************************************* Promises *************************************//


// 1

// const promise = new Promise((resolve,reject) => {
//     let name =  "venkatesh";
//     if(name === "venkatesh") {
//         resolve("Promise has been resolved SuccessFully");
//     } else {
//         reject("Promise has not resolved ")
//     }
// });

// promise.then((res)=>console.log(res)).catch((err)=>console.log(err))

// console.log(promise);


// console.log (Promise.resolve("Promise has Been Resolved Successfully"))


// 2
// const getpromise = Promise.reject("Promise has Been Resolved re");
// getpromise.then((res) => console.log(res)).catch((err)=>console.log(err))


// *********************************** Avoiding CallBack Hell -- 3  *********************************//



    // function getDetails(details){
    //     return new Promise((resolve,reject) =>{
    //         setTimeout(()=>{
    //             if(true){
    //                 resolve(`Share the Detaile ${name}`);
    //             } else {
    //                 reject(`Shared the Detaile not valied`);
    //             }
    //         }, 1000);
    //     });
    // };
    
    
    // function getIntro(name) {
    //     return new Promise((resolve,reject) =>{
    //         setTimeout(()=>{
    //             if(true){
    //                 resolve(`Share the Detaile ${name}`);
    //             } else {
    //                 reject(`Shared the Detaile not valied`);
    //             }
               
    //         }, 100);
    //     });
    // };
    
    
    // function getBio(demo){
    //     return new Promise((resolve,reject) =>{
    //         setTimeout(()=>{
    //             if(false){
    //                 resolve(`Share the Detaile ${demo}`);
    //             } else {
    //                 reject(`Shared the Detaile not valied`);
    //             }
    //         }, 500);
    //     });
    // };


// ************************************************ calling Promises ************************************//
    // getDetails("venkatesh").then((res)=>{
    //     console.log(res);
    //     getIntro("Verified Successfully").then((res)=>{
    //         console.log(res);
    //         getBio("and Proceed the next Step").then((res)=>{
    //             console.log(res);
    //         });
    //     });
    // }).catch((err)=>console.log(err))


// ************************************************  Promises Chaining  ***************************************//

// getDetails("venkatesh").then((res)=> {
//     console.log(res);
//     return getIntro("Verified Successfully")
// }).then((res) =>{
//     console.log(res);
//     return getBio("and Proceed the next Step")
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// *************combinator******************* Promises.all *****************************************8//
// Promise.all([getDetails("venkatesh"),
//     getIntro("Verified Successfully"),
//     getBio("and Proceed the next Step"),
// ])
// .then((res)=>console.log(res))
// .catch((err)=>console.error("Error has occurred in ",err))




// ******************************** Promises.race *****************************************//
    // Promise.race([getDetails("venkatesh"),
    //     getIntro("Verified Successfully"),
    //     getBio("and Proceed the next Step"),
    // ])
    // .then((res)=>console.log(res))
    // .catch((err)=>console.error("Error has occurred in ",err));


// ******************************** Promises.allSettled *****************************************//
    // Promise.allSettled([getDetails("venkatesh"),
    //     getIntro("Verified Successfully"),
    //     getBio("and Proceed the next Step"),
    // ])
    // .then((res)=>console.log(res))
    // .catch((err)=>console.error("Error has occurred in ",err))


// ******************************** Promises.any *****************************************//

    // Promise.any([
    //     getDetails("venkatesh"),
    //     getIntro("Verified Successfully"),
    //     getBio("and Proceed the next Step"),
    // ])
    // .then((res)=>console.log(res))
    // .catch((err)=>console.error("Error has occurred in ",err));



    //*************************************** Async and Await *****************************************//

    // const result = async () => {

    //    try {
    //     const message1 = await getDetails("venkatesh");
    //     const message2 = await getIntro("Verified Successfully");
    //     const message3 = await getBio("and Proceed the next Step");

    //     console.log({message1,message2,message3})
    //    } catch (error) {
    //         console.error("please check the details",error)
    //    }

    // }

    // result();






    // ****************************************Promise.Finally*********************************//


    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            let result = true;
            if (result) {
                resolve({userName:'venkatesh', gender:"male"});
            } else {
                reject("ERROR: Promise Rejected Successfully");
            }
        },1000);
    });


    promise
    .then((res) => {
        console.log(res);
        return res.userName;
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=> console.log(err))
    .finally(() => console.log("The Promise has been Resolved or Rejected Succcessfully"))

console.log("stop");
