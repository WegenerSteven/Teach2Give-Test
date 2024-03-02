/*Question 3: Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.
Examples:
8=> returns true
6=> returns false*/

function powerOfTwo(n){
    //check if number  is positive
    if (n <= 0) return false;
  
    //keep dividing the number by 2 until it becomes 1 or less than 1
    while (n > 1) {
        //if at any point n becomes  1, then it's not a power of two
        if ((n % 2) == 0) {
            n = Math.floor(n / 2);
        } else {
            return false;
        }
    }
    return true;
}
console.log(powerOfTwo(8));//returns true
console.log(powerOfTwo(6));//returns false
console.log(powerOfTwo(9));//returns false
console.log(powerOfTwo(-4));//returns false
console.log(powerOfTwo(0));//returns false
console.log(powerOfTwo(16));//returns true

