// Simple primitives slide
// 1. Write the program to greet a person given their first and last name
let firstName = "Eshan";
let lastName = "Sharma";
console.log(`Hello, ${firstName} ${lastName}`);
// 2. Write a program that greets a person based on their gender. (If else)
let gender = "male";
if(gender == "male"){
    console.log(`Awesome! You are a ${gender}`);
}else{
    console.log(`You rule! You are a ${gender}`);
}
// 3. Write a program that counts from 0 - 1000 and prints (for loop)
for (let i = 0; i <= 1000; i++) {
    console.log(i);
}

// Complex primitives
// 1. Write a program prints all the even numbers in an array
let arr = [1,2,3,4,5,6,7,8,10]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2==0){
        console.log("Even is: "+arr[i]);
    } 
}
// 2. Write a program to print the biggest number in an array
let max = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]>=max){
        max = arr[i];
    }
}
console.log("Max value is: "+ max);
// 3. Write a program that prints all the male people’s first name given a complex object
let allUser = [{firstName:"Eshan", gender:"male"},{firstName:"Priya",gender:"female"},{firstName:"Barath", gender:"male"}];
allUser.forEach(element => {
    if(element.gender=="male"){
        console.log(element.firstName);
    }  
});
// 4. Write a program that reverses all the elements of an array
console.log("Array is: "+arr);
console.log("Reverse array is: "+arr.reverse());


//Functions

// Let’s write some code -
// 1. Write a function that finds the sum of two numbers
function sum(a,b){
    // console.log(a+b);
    return a+b;
}
sum(9,6);
// 2. Write another function that displays this result in a pretty format
console.log("Sum is: "+ sum(3,4));
// 3. Write another function that takes this sum and prints it in passive tense function 
function arithmetic(a,b,func){
    let noob = func(a,b);
    return noob;
}
function subs(a,b){
    // console.log(a-b);
    return a-b;
}
function mul(a,b) {
    // console.log(a*b);
    return a*b;
}
console.log("Arithmetic subs: "+arithmetic(3,4,subs));
console.log("Arithmetic sum: "+arithmetic(3,4,sum));
console.log("Arithmetic mul: "+arithmetic(3,4,mul));
//Till slide 30 week 1.2
