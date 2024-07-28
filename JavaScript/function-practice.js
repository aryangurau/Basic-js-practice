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
