/*Question 2: Fibonacci Sequence
Write a program to generate the Fibonacci sequence up to 100.*/
let x=0, y=1,nextValue=1;
console.log(x);
console.log(y); 
nextValue = x + y;//printing first value of fibonacci series i.e., 0
while (nextValue<=100) {
    x = y;
    y = nextValue;
    console.log(nextValue);// printing next value of fibonacci series
    nextValue = x + y;
}
/**Fibonacci sequence
 * This is a series of numbers in which each number is the sum of the two preceding ones,
 * usually starting with 0 and 1.
 */