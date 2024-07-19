// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");
// const div3 = document.getElementById("div3");
// const div4 = document.getElementById("div4");


// div1.addEventListener("click",demo)
// function demo(event) {
//     console.log("You are at the eventProp APP ", event)
//     console.log("current Evnent = " + event.currentTarget.tagName,
//         "evnet as a target",
//         event.target.tagName,
//         "This tagName",
//         this.tagName
//     )
// }

// document.body.addEventListener("click", ()=>{
//     console.log("You are at Body Div5");
// })

// div1.addEventListener("click", () => {
//     console.log("Your are at DIV1");
// });

// div2.addEventListener("click", () => {
//     console.log("Your are at DIV2");
// });


// div3.addEventListener("click", () => {
//     console.log("Your are at DIV3");
// },true)

// div4.addEventListener("click", () => {
//     console.log("Your are at DIV4");
// })



// document.body.addEventListener("click", ()=>{
//     console.log("You are at Body Div5");
// },true)

// div1.addEventListener("click", () => {
//     console.log("Your are at DIV1");
// },true);

// div2.addEventListener("click", () => {
//     console.log("Your are at DIV2");
// },true);


// div3.addEventListener("click", (event) => {
//     event.stopPropagation()
//     console.log("Your are at DIV3");
// },true)

// div4.addEventListener("click", () => {
//     console.log("Your are at DIV4");
// },true)




//************************************************ */ Event Deligation***********************************//

// const container = document.querySelector(".container");

// container.addEventListener("click", (event) => {
//     console.log(event);
//     console.log("Container", event.target.tagName);

//     if(event.target.tagName === "SPAN"){
//         window.location.href += "/" + event.target.className
//     }
// });


// **************************************Question**************************************//



// const container = document.getElementById("container");
// const main = document.getElementById("main");
// const button = document.getElementById("button");


// container.addEventListener("click", () => {
//     console.log("You are at the container")
// },true);

// main.addEventListener("click", () => {
//     console.log("You are at the main")
// });



// button.addEventListener("click", () => {
//     console.log("You are at the button")
// });



const modalContainer  = document.querySelector(".modalContainer");
const  modalButton = document.querySelector(".modalButton");


modalButton.addEventListener("click", () => {
   toggleEvent(true);
});

function toggleEvent(toggle) {
    modalContainer.style.display = toggle ? "flex" : "none";
}


modalContainer.addEventListener("click", (e) => {
    if (e.target.className === "modalContainer") toggleEvent(false);
 });

 