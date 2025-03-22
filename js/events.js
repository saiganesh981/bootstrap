// document.addEventListener("DOMContentLoaded", function () {
//     let fn = document.getElementById("Name");
    
//     if (fn) {  // Check if the element exists
//         fn.addEventListener('keyup', function (Event) {
//             console.log(Event)
//             if(Event.key=='a'){
//                 alert("a is not allowed");
//             }
//                 else{
//                     alert("its a valid character");
//             }
//             fn.style.backgroundColor = "pink";
//         });
//     }
// });
// let str = "hello world JavaScript is awesome";

// // Step 1: Split the string into an array of words
// let wordsArray = str.split(" "); 

// // Step 2: Rearrange the words (e.g., reverse them)
// let rearrangedArray = wordsArray.reverse(); 

// // Step 3: Join the array back into a string
// let newStr = rearrangedArray.join(" "); 

// console.log(newStr);
// // Output: "awesome is JavaScript world hello"
// const numbers[4];
// const numbers=[1,2,3,4] ;
// numbers[1]="20";
// numbers.push(5);
// console.log(numbers);
const numbers=[1,2, ,4];
numbers.forEach(num=>console.log(num * 2));
const doubled =numbers.map(num=>num * 2);

console.log(doubled)