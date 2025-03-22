//  var x=prompt("enter the number");
// if (x>0){
//     document.write("it is positive number");
// }
// else if(x<0){
//     document.write("it is negative number");
// }
// else{
//     document.write("The number value is zero");
// }
// var num=prompt("enter the number")
// if(num>0){
//     document.write("the number is largest");
// }
// else if(num<0){
//     document.write("the number is medium");
// }
// else{
//     document.write("the number is small");
// }
// var num=prompt("enter the number")
// if(num<=0){
//     document.write("the traffic signal is red");
// }
// else if(num<=10){
//     document.write("the signal is in yellow")
// }
// else{
//     document.write("the signal is in green")
// }
// var num=prompt("enter the number")
// if(num%2==0){
// document.write("the number is even");
// }
// else {
//     document.write("the number is odd");
// }
// var x1=75;

// var x1=prompt("enter the number")
// if(x1<45){
//     document.write("grade is c");
// }
// else if(x1<65){
//     document.write("grade is B");
// }
// else{
//     document.write("grade is A")
// }
// var x=prompt("enter the number")
// if(x%3==0 && x%5==0){
//     document.write("the number is divisible by 3 and 5");
// }
// else{
//     document.write("the number is not divisible with 3 and 5");
// }
// var age=prompt("enter the number")
// if(age<20){
//     document.write("not elgible for the vote")
// }

// else{
//     document.write("Elgible for vote")
// }
// var x=prompt("enter the value")
// if(x==="A"&&"E" &&"I" &&"O" &&"U"){
//     document.write("it is a vowel");
// }
// else{
//     document.write("it is a consonant");

// }
// var x=parseInt(prompt("enter the number"));
// if(x>=10){
//   document.write("the number is highest");
//   console.log("the number is highest");
// }
// else if(x>5){
//   document.write("the number is medium");
//   console.log("the number is medium");
// }
// else{
//   document.write("the number is low");
//   console.log("the number is low");
// }
// var x=prompt("enter the number")
// if(x>10 &&x<=50){
//   document.write("it is in the range");
// }
// else{
//   document.write("it is not in the range");
//  }
// var x1=parseInt(prompt("enter the angle"));
// var x2=parseInt(prompt("enter the angle"));
// var x3=parseInt(prompt("enter the angle"));
// if(x1+x2+x3==180){
//   document.write("this is the triangle")
//   console.log("this is the triangle");
// }
// else{
//   document.write("this is not the triangle");
//   console.log("this is not the triangle");
// }
// var word=prompt("enter the character");
// var letters=word.split("");
// var reverseletters=letters.reverse();
// var reversedword=reverseletters.join("");
// if(word===reversedword){
//   document.write("palindrome");
// }
// else{
//   document.write("not palindrome"); 
// }

// let i;
// for(i=0;i<=5;i++){;
//     document.write(i);
//     document.write("</br>");
// }
// const person={
//     Name :'Ganesh',
//     age :28,
//     address:'hyd'
// }
// for (let key in person){
//     document.write(key+':'+person[key])
//     document.write("</br>");
// }
// let num=[1,2,3,4,5];
// for (let number of num){
//     document.write(number);
//     document.write("</br>");
// }
// let num=20;
// while(num>10){
//     document.write(num);
//     num--;
//     document.write("</br>"); 
// }
// let i=0;
// do{
//     document.write(i);
//     i++;
//     document.write("</br>");
// }while(i<10);
 

// var x=prompt("enter the number");
// for(i=20;i>=x;i--){
// document.write(i+"</br>");
// }
// var x = parseInt(prompt("Enter the number")); // Convert input to a number
// var i = 1; // Initialize the counter variable

// do {
//     document.write(i + "<br>"); // Write the value of i
//     i++; // Increment i
// } while (i <= x);  
//  var i;)
//  for(i=200;i>=100;i-=10){
//   document.write(i);
//   document.write("</br>");
//  }
// var i;
// for(i=1;i<=10;i+=1){
//     document.write(i);
//    document.write("</br>");
// }
// var i;
// for(i=1;i<=10;i+=1){
//     document.write(i);
//    document.write("</br>");
// }
// var i;
// for(i=1;i<=20;i++){
//    if(i% 2===0) {
//     document.write(i+"</br>");
//    }
// }
// var n=parseInt(prompt("enter the number n:"));
// var sum=0
// for(i=1;i<=n;i++){
//     sum +=i
// }
// document.write(sum);
// var x=prompt("enter the number");
// var number=x.split("");

// var reversednumber=number.reverse();
//     reversednumber=reversednumber.join("");
// document.write(reversednumber);


// var num=parseInt(prompt("enter the number:"));
// var isprime=true;
// for(var i=2;i<num;i++){
//     if(num % i==0){
//         var isprime=false;
//         break;
//     }
//     else{
//         document.write("it is a prime"+"</br>");
//     }

// for (var num = 2; num < 100; num++) {
//     var isPrime = true; 

    
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false; 
//         }
//     }

//     if (isPrime) {
//         document.write(num + " is a prime number.<br>");
//     }
// }
// var x=prompt("enter the number");
// for(var s=1;s<=10;s++){
//     document.write(x+" * "+s+"  = "+x*s+"</br>");
// }
// var x=prompt("enter the number");
// var j=1;
// for(i=1; i<=x;i++){
//     j=j*i;
// }
// document.write(x+"="+j);
// var x = parseInt(prompt("enter number"));
// var  a=2,b=4;
// for(var i=1;i<=x;i++){
//     document.write(a +"<br/>");
//     var nextTerm = a + b;
//     a = b;
//     b = nextTerm;
//  }
// var rows=6;
// for(i=1; i<=6;i++){
// for(j=1;j<=i;j++){
//     document.write("*");
// } 
// document.write("</br>");   
// }
// var rows = 5;
// for (var i = rows; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("</br>");   
// }
// 
// var i;
// for(var i=1;i<=10;i++){
//     document.write("Multiplication Table for " + i+"</br>");
//     for(var j=1;j<=10;j++){
//         document.write(i + " x "+ j + " = " + (i * j)+"</br>");
//     }
//     document.write(''+"</br>");
// }
// var s;
// for(s=1;s<=20;s++){
//     document.write("Multiplication Table for " + s+"</br>");
//     for(k=1;k<=10;k++){
//         document.write(s + " x "+ k + " = " + (s * k)+"</br>");   
//     }
//     document.write(''+"</br>");
// }

// var rows=5;
// for(var i=rows;i>=1;i--){
//     for(var j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("</br>")
// }
// var rows=5;
// for(var i=1;i<=rows;i++){
//     var str=''
//     for(var j=0;j<=rows-1-i;j++){
//       str +=' '  
//     }
//     for(var j=0;j<i;j++){
//         str +='* &nbsp;&nbsp'
//     }
//     document.write(str+"</br>");
// }
// var num=prompt("enter the number");
// var flag=0;
// for(var i=2;i<num;i++){
//     if(num%2==0){
//         flag=1;
//         break;
//     }
// }
// if(flag==0){
//     document.write("The number is prime");
// }
// else{
//     document.write("The number is not prime");
// }
// var a = 5;
// for (var b=1;b<=a;b++){
//     star="";  
//     for (var c=b;c<=a;c++){
//         star+="* &nbsp;&nbsp";
//     }
// document.write(star +"<br/>");
// }
// var i,j,k;
// for(i=1;i<=5;i++){    
// for(k=1;k<=(5-i);k++){
//     document.write("&nbsp")
// }
// for(j=1;j<=i;j++){
//     document.write("*   &nbsp;&nbsp")
// }
//    document.write("</br>")
// }
//
// var rows=5; 
// for(var i=1;i<=rows;i++){
//     star=''
//     for(var j=0;j<=rows-1-i;j++){
//         star +=' '    
//     }
//     for(var j=0;j<i;j++){
//         star +='*'
//     }
//     console.log(star);   
// }
// var movies=['RRR','johnwick','daaku_maharaj','devara','Game_Changer']
// // console.log(movies)
// movies[5]='Acharya'
// // console.log(movies)
// movies[6]=67
// console.log(movies)
// movies.push('maharshi')
// console.log(movies.pop())
// console.log(movies)
// movies.unshift('maharshi')
// console.log(movies)
// var mov=movies.shift()
// console.log("removed element is:"+mov)
// console.log(movies)
// console.log("index of rrr:"+movies.indexOf("RRR"))
// console.log(movies.slice(0,3))
// var Add =function sum(num1,num2){
//     var result=num1+num2
//     return result;
// }
// console.log(Add(5,6))
// document.write(Add(9,7)+"<br>")
// document.write("sum of 50,70:"+"<br>"+Add(50,70)+"<br>")
// var cinemas=Add(40,70)
// document.write(cinemas+"<br>")
// product =(num1,num2)=>{
//     var result=num1*num2
//     document.write(result)
// }
// product(8,7)
// var a=10;
// function b(){
//     x=10;
// }
// console.log(window.a);
// console.log(this.a);
// var number=[10,20,30,40,50,60];
// number.forEach(function(item,index){
//     document.write(index+1+" . "+item+"<br>")
// })
// var person={
//     name:"ram",age:30,address:"hyd"
// }
// for(var key in person){
//     console.log(key+':'+person[key])
// }
// var arr=[11,13,15,18,20]
// var output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(output)
// function func1(x,cbf){
//     console.log("i am an enginner");
//     console.log(x);
//     cbf();
// }
// function func2(){
//     console.log("i am the mechanical student");
// }
// // func1('hello',func2);
// setTimeout(func2,5000)
// function outer(num1){
//     var x=10

    
//     function inner(num2){
//       console.log(num1+num2*x)
      
//     }

// return inner
    
// }

// var res=outer(15)
// res(12)
    // var x=[10,20,30,40,50];
    // x.forEach(function(item,index){
    //       document.write(index+1+" . "+item+"<br>")
    //  })
//     var student={
//         name:"Raja",age:24,sex:"male",address:"Hyderabad",mail:"rajaram118@gmail.com"
//     }
//    for(var key in student){
//     document.write(key+':'+student[key]+"<br>")
//    }
// console.log('welcome');

// var register=(movies)=>{
//     setTimeout(() => {
//         console.log('please register');
//         movies()
//     }, 5000);
// }
// register(function() {
//  console.log('i love movies')
// })
// let x=10;

// function movies(){
//     let x=30;
// }
// console.log(x);
// var y=20;
// console.log(y);
// console.log(x);
// var c=10;

// function fname(){
//     let c=40;
//     c=30;
//     console.log(c);
// }
// console.log(c);
// var c=20;
// console.log(c);
// fname();
// let x=5;
// y=x++;
// console.log(x);
// function isAnagramSort(str1, str2) {
//     // Convert to lowercase and remove spaces
//     str1 = str1.toLowerCase().replace(/\s/g, '');
//     str2 = str2.toLowerCase().replace(/\s/g, '');

//     // If lengths are different, not an anagram
//     if (str1.length !== str2.length) return false;

//     // Sort the letters and compare
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// // Test cases
// console.log(isAnagramSort("listen", "silent")); // true
// console.log(isAnagramSort("hello", "world"));   // false
// console.log(isAnagramSort("rail safety", "fairy tales")); // true

// // function hello(){
//     alert("hello welcome to the events");
// }
// hello();
// var a=[1,2];
// console.log(a);
// console.log('1'- -'1');
 x=  [1,2];
console.log(x);