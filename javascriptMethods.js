const arr = ["cda", "dasas", "asd"];
// only for numbers, strings use reverse
arr.sort((a, b) => b - a);
arr.sort().reverse();
// console.log(arr);

// str.slice doesnt affect original string
let str = "02-04-1966";
const month = str.slice(0, 2);
const year = str.slice(-4);
const day = str.slice(3, 5);

// str.replace doesn't affect original string
const replaced0 = str.replace(/0/g, 5);

let caseChanges = "OhOoHoHsasdof";
const caseInsensitive = caseChanges.replace(/o/gi, "P");

let sentence = "I love my Pony pony that has A serious Injory";
let replaceFunction = sentence.replace(/love|pony|ser/gi, (x) =>
  x.toUpperCase()
);
