// const CC = require("currency-converter-lt");

const curr = {
  from: "fromCurrency",
  to: "toCurrency",
  amount: "amountToConvert",
};
console.log(curr.from);

const intoSeconds = (min) => {
  return min * 60;
};
const askTime = Number(prompt("enter minute to convert"));
console.log(intoSeconds(askTime));
