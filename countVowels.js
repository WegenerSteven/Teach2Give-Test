/**Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2 */
function countVowels(sentence){
    const vowels= ['a','e','i','o','u']; //Defines the vowels
    let count =0;//initializes the count
    sentence=sentence.toLowerCase(); //converts the sentence to lowercase.
    
    //for loop iterates through each character in the sentence to find if vowels exist counts them
    for (let char of sentence){
        if (vowels.includes(char)){
            count++;
    }
}
return count;
}
//examples to test
console.log(countVowels("Hello World")); //returns 3

const sentence= "I am a junior Software Engineer";
const result=countVowels(sentence);
console.log(`Returns ${result}`);