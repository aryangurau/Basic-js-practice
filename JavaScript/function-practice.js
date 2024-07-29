//Write a js function that reverses a number.
// Example x= 32243; expected output: 34223

//method 1 (using loop)

const reverser = (num) => {
  const text = String(num);
  const len = text.length; //5     .length is the method of js
  let newNum = "";
  for (let i = len - 1; i >= 0; i--) {
    newNum += text[i];
  }
  return newNum;
};
console.log(reverser(32243)); //output: 34223

//method 2 ( using methods  split and join   ..mdn webdocs)

const reverserNew = (num) => {
  const text = String(num);
  const splitData = text.split(""); //["3","2","2","4","3"]
  const reversedData = splitData.reverse(); //["3","4","2","2","3"]
  const joinData = reversedData.join("");
  return joinData;
};
console.log(reverserNew(32243));

//method 3  function chaining ( using implicit function)
const reverserNewV2 = (num) => String(num).split("").reverse().join("");
console.log(reverserNewV2(32243));
console.log(reverserNewV2("32243"));

// 2. write a js function that accepts a string as a parameter and counts the number of vowel within the string. Note: As the letter 'y' can be regarded as both a vowel and a consonant, we donot count 'y' as vowel here. Example string:" The quick brown fox " Expected output:5

const countsVowel = (sentence) => {
  const texts = sentence.toLowerCase();
  const length = texts.length;
  let vowelCount = 0;
  for (i = 1; i <= length - 1; i++) {
    if (
      texts[i] === "a" ||
      texts[i] === "e" ||
      texts[i] === "i" ||
      texts[i] === "o" ||
      texts[i] === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
};
console.log(countsVowel("the QUICK brown fox "));

const countVowel = (dataaa) => {
  const getData = String(dataaa);
  const vowelMatch = getData.match(/[aeiou]/gi).length;
  return vowelMatch;
};
console.log(countVowel("the quick brown fox jumps"));

//using implicit function

const counts = (data) => String(data).match(/[aeiou]/gi).length;
console.log(counts("The quick brown fox"));

//Write a js function to check whether a number is odd or even

const check = (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
console.log(check(11));

//write a js function to check wether a number is prime or not
// const checks = (number) => {
//   let count1 = 0;
//   for (i = 1; i <= number - 1; i++) {
//     if (number % i === 0) {
//       count1++;

//       if (count1 === 2) {
//         return "prime";
//       } else {
//         return "not prime";
//       }
//     }
//   }
// };
// console.log(checks(11));

//write a js function to get the number of occurence of each letter in a specified string

/* 1. length of word
   2. take out each letter using loop
   3. check the repitition/occurence
   4. count the letter
 */
// const countLetter = (word) => {
//   const textt = word.toLowerCase();
//   const size = textt.length;

//   for (i = 0; i <= size - 1; i++) {}
// };

// console.log(countLetter("aryan"));
