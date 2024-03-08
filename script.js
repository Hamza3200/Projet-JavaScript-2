// String Manipulation Functions:
// Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    console.log(splitString);
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 console.log(reverseArray);
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    console.log(joinArray);
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString(" Hello world ! ");



// Count Characters: Create a function that counts the number of characters in a string.

var str = " Hello world ! ";
console.log(str.length);



// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeEachWord(string){
    const str_arr = string.split(' ')
    for(i = 0; i < str_arr.length; i++){
        str_arr[i] = str_arr[i][0].toUpperCase() + str_arr[i].slice(1)
    }
    return str_arr.join(' ')
}
let word = 'hello world ! hello world !'
console.log(capitalizeEachWord(word))



// Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

let array = [28, 45, 69, -1, 20, 15,0, 7, 98]; 
let min = array[0], max = array[0]; 
for (let i = 1; i < array.length; i++) { 
   if (array[i] > max) 
      max = array[i]; 
   if (array[i] < min) 
      min = array[i]; 
 } 
 console.log(min);
 console.log(max);



//  Sum of Array: Create a function that calculates the sum of all elements in an array.
// let array = [28, 45, 69, -1, 20, 15,0, 7, 98]; 
let sum = 0;
for (let i = 0; i < array.length; i++ ) {
  sum += array[i];
}
console.log(sum)



// Filter Array: Implement a function that filters out elements from an array based on a given condition.
// let array = [28, 45, 69, -1, 20, 15,0, 7, 98]; 

let result = array.filter(average);
function average(subfifty) {
  return subfifty >= 50;
}
console.log(array.filter(average));



// Mathematical Functions:
// Factorial: Write a function to calculate the factorial of a given number.

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(10));
//   i choose 10 just to test the function factorialize



//   Prime Number Check: Create a function to check if a number is prime or not.



function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(20));



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}



