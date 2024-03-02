/**Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the string, 
and then returns the result string.
Examples:
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming" */
function capitalizeWords(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  console.log(capitalizeWords("world"));   // Output: "Hi"
 console.log(capitalizeWords("i love programming")); //output: "I Love Programming"
 console.log(capitalizeWords("hello world"));//output: "Hello World"