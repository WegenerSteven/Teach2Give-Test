/**Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19. */
function reverseNumber(input) {
    let reversed = 0;
    let isNegative = input < 0;
    if (isNegative) {
      input = -input;
    }
    while (input !== 0) {
      if (reversed > (Math.pow(2, 31) - 1) / 10 || reversed < -Math.pow(2, 31) / 10) {
        return isNegative ? -1 * Math.pow(2, 31) : Math.pow(2, 31) - 1;
      }
      reversed = reversed * 10 + (input % 10);
      input = Math.floor(input / 10);
    }
    return isNegative ? -1 * reversed : reversed;
  }
 console.log(reverseNumber(500));// returns 5
console.log(reverseNumber(-56));
console.log(reverseNumber(-90));
console.log(reverseNumber(91));