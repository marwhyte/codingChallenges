// //rules are
// //1. when closing opening bracket should be last on the stack
const checkBrackets = (bracketString) => {
  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];
  let openings = Object.keys(brackets);
  for (const bracket of bracketString) {
    if (openings.includes(bracket)) {
      stack.push(bracket);
    } else {
      let compare = stack.pop();
      if (bracket !== brackets[compare]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const testsTrue = ["()", "{}", "[]", "(){}[]", "((){}[])", "([{}])"];
const testsFalse = [")", "{", "][", "{)", ")("];
const tester = () => {
  for (const test of testsTrue) {
    if (!checkBrackets(test)) {
      return false;
    }
  }
  for (const test of testsFalse) {
    if (checkBrackets(test)) {
      return false;
    }
  }
  return true;
};

console.log(tester());
// function amountOfEdits(finalWord, editWord) {
//   if (editWord.length === finalWord.length) {
//     return checkReplacement(finalWord, editWord);
//   } else if (editWord.length - 1 === finalWord.length) {
//     return checkInsert(finalWord, editWord);
//   } else if (editWord.length === finalWord.length - 1) {
//     return checkInsert(editWord, finalWord);
//   }
//   return false;
// }

// function checkReplacement(finalWord, editWord) {
//   var counter = 0;
//   for (var i = 0; i < finalWord.length; i++) {
//     if (finalWord[i] !== editWord[i]) {
//       counter++;
//     }
//   }
//   if (counter <= 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function checkInsert(word1, word2) {
//   var index1 = 0;
//   var index2 = 0;
//   while (index2 < word2.length && index1 < word1.length) {
//     if (word1[index1] !== word2[index2]) {
//       if (index1 != index2) {
//         return false;
//       }
//       index2++;
//     } else {
//       index1++;
//       index2++;
//     }
//   }
//   return true;
// }

// console.log(amountOfEdits("d", ""));

// checkReplacement("helo", "hello");

// let obj = {
//   hello: "sir",
//   why: "you",
//   looking: "tho",
// };
// let doublePrices = Object.fromEntries(
//   // convert to array, map, and then fromEntries gives back the object
//   Object.entries(obj).map(([key, value]) => [key, value * 2])
// );
// console.log(doublePrices);

// Print out all of the strings in the following array in alphabetical order, each on a separate line.
// ['Waltz', 'Tango', 'Viennese Waltz', 'Foxtrot', 'Cha Cha', 'Samba', 'Rumba', 'Paso Doble', 'Jive']

// [0, 4, 2 ,3 ,6]
// The expected output is:
// 'Cha Cha'
// 'Foxtrot'
// 'Jive'
// 'Paso Doble'
// 'Rumba'
// 'Samba'
// 'Tango'
// 'Viennese Waltz'
// 'Waltz'
// You may use whatever programming language you'd like.
// Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.

//for loop of arr str[0]
//
//while loop, item less then the item next to it, push into arr and pop that element, otherwise

// function alphabeticalOrder(arr) {
//   var isTrue = true;

//   while (isTrue) {
//     isTrue = false;
//     for (var i = 0; i < arr.length - 1; i++) {
//       if (arr[i][0] > arr[i + 1][0]) {
//         var placeholder = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = placeholder;
//         isTrue = true;
//       }
//     }
//   }
//   return arr;
// }

// console.log(
//   alphabeticalOrder([
//     "Waltz",
//     "Tango",
//     "Viennese Waltz",
//     "Foxtrot",
//     "Cha Cha",
//     "Samba",
//     "Rumba",
//     "Paso Doble",
//     "Jive",
//   ])
// );

//Check if value i + 1 > value at i
//If it is, increase count by i+1-i
//otherwise go next

// var maxProfit = function (prices) {
//   let valueCount = 0;

//   for (var i = 0; i < prices.length; i++) {
//     if (prices[i + 1] > prices[i]) {
//       valueCount = valueCount + (prices[i + 1] - prices[i]);
//     }
//   }
//   return valueCount;
// };

//ROTATE

//[7,1,5,3,6,4]
//[3, 6, 4, 7, 1 ,5]
//[4,]

// k = 3
// has an arr and k (num of rotations to the right)
// new arr, where all indexes are + k
// if index + 1 > is length of nums - k, we set that index to

//k - i
// var rotate = function (nums, k) {
//   //   for (var i = 0; i < k; i++) {
//   //     var previous = nums[nums.length - 1];
//   //     for (var j = 0; j < nums.length; j++) {
//   //       var placeholder = nums[j];
//   //       nums[j] = previous;
//   //       previous = placeholder;
//   //     }
//   //   }
//   //   console.log(nums);
//   //   n = new Array(k).fill(undefined);
//   //   n[1] = 10;
//   //   console.log(n);
//   //   newNums = new Array(nums.length).fill(0);
//   //   for (var i = 0; i < nums.length; i++) {
//   //     newNums[(i + k) % nums.length] = nums[i];
//   //   }
//   //   nums = [...newNums];
//   //   console.log(nums);
//   const count = k % nums.length;
//   console.log(count);
//   for (var i = 0; i < k; i++) {
//     const end = nums.pop();
//     nums.unshift(end);
//   }
//   console.log(nums);
// };

// rotate([7, 1, 5, 3, 6, 4, 3], 8);

//FIB SEQUENCE

// var cache = {};
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   if (!cache.hasOwnProperty(n)) {
//     cache[n] = fib(n - 1) + fib(n - 2);
//   }
//   return cache[n];
// }

// console.log(fib(50));

// function reverseArr(s) {
//   var left = 0;
//   var right = s.length - 1;
//   while (left < right) {
//     var placeholder = s[left];
//     s[left] = s[right];
//     s[right] = placeholder;
//     left++;
//     right--;
//   }
//   console.log(s);
// }

// reverseArr("hello");

const reverseStr = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

// console.log(reverseStr(-123));

// hello;

// delete nth item backwards linkedlist

var removeNthFromEnd = function (head, n) {
  //Where we set node before deleted node from node.next to to node.next.next
  //count length, if its the first item being deleted, we simply return node.next (even if null)
  var count = 1;
  var node = head;
  while (node.next !== null) {
    node = node.next;
    count++;
  }
  if (n === count) {
    return head.next;
  } else {
    var deletedIndex = count - n - 1;
    var newNode = head;
    for (var i = 0; i < deletedIndex; i++) {
      newNode = newNode.next;
    }
    newNode.next = newNode.next.next;
    return head;
  }
};
const sort = (arr) => {
  var isSorted = true;
  while (isSorted) {
    isSorted = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var placeholder = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = placeholder;
        isSorted = true;
      }
    }
  }
  console.log(arr);
};

// sort([]);

const reverseAStr = (str) => {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

// console.log(reverseAStr("hello"));

var merge = function (nums1, m, nums2, n) {
  let len2 = n - 1,
    len1 = m - 1,
    newLen = m + n - 1;
  while (len2 >= 0) {
    if (len1 >= 0 && nums1[len1] > nums2[len2]) {
      nums1[newLen] = nums1[len1];
      len1--;
    } else {
      nums1[newLen] = nums2[len2];
      len2--;
    }
    newLen--;
  }
  console.log(nums1);
};
// merge([0, 1, 3, 5], 4, [2, 4, 6, 7, 8], 5);

// Given an object/dictionary with keys and values that consist of both strings and integers, design an algorithm to calculate and return the sum of all of the numeric values.
// For example, given the following object/dictionary as input:
// {
//   "cat": "bob",
//   "dog": 23,
//   19: 18,
//   90: "fish"
// }
// Your algorithm should return 41, the sum of the values 23 and 18.
// You may use whatever programming language you'd like.
// Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.

// const addValues = (obj) => {
//   var myValues = Object.values(obj);
//   console.log(myValues);
//   var sum = 0;
//   var keys = Object.keys(obj);
//   console.log(keys);
//   for (value of myValues) {
//     if (typeof value === "number") {
//       sum += value;
//     }
//   }
//   return sum;
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(arr[-1]);
var moveZeroes = function (nums) {
  //have a count, starting at 0.
  //loop through the arr
  //if not equal to 0, swap arr[count] annd arr[i]
  //increment count
  let count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      var placeholder = nums[i];
      nums[i] = nums[count];
      nums[count] = placeholder;
      count++;
    }
  }
  console.log(nums);
};

// moveZeroes([3, 5, 6, 0, 0]);

// function removeDuplicates(strings) {
//   let count = 0;
//   let cache = {};
//   for (var i = 0; i < strings.length; i++) {
//     for (var j = i + 1; j < strings.length; j++) {
//       if (strings[i] === strings[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(
//   removeDuplicates(["bcd", "abd", "jude", "bcd", "oiu", "gzw", "oiu"])
// );

var singleNumber = function (nums) {
  let answer = 0;

  for (let num of nums) {
    answer = answer ^ num;
    console.log(answer);
  }

  console.log(answer);
};

// singleNumber([1, 1, 2, 3, 2, 4, 5, 4, 5]);

var intersect = function (nums1, nums2) {
  let cache = {};
  let arr = [];
  for (var i = 0; i < nums1.length; i++) {
    if (!cache[nums1[i]]) {
      cache[nums1[i]] = 1;
    }
  }
  console.log(cache);
  for (var j = 0; j < nums2.length; j++) {
    if (cache[nums2[j]]) {
      cache[nums2[j]] = 2;
    }
  }
  return Object.keys(cache)
    .filter((key) => cache[key] === 2)
    .map((elem) => Number(elem));
};

// console.log(intersect([1, 2, 3, 2, 1], [2, 2, 3]));

//valid sodoku board

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //check duplicates function
  const checkForDublicates = (arr) => {
    let arrNoDots = arr.filter((item) => item !== ".");
    return [...new Set(arrNoDots)].length !== arrNoDots.length;
  };
  //arr which we fill up with numbers to check, then check duplicates
  let checkDuplicatesArr = [];
  for (let i = 0; i < board.length; i++) {
    checkDuplicatesArr = [...board[i]];
    if (checkForDublicates(checkDuplicatesArr)) {
      return false;
    }
    checkDuplicatesArr = [];
  }
  //start off with row, then col
  let count = 0;
  while (count <= 8) {
    for (let i = 0; i < board.length; i++) {
      checkDuplicatesArr.push(board[i][count]);
    }
    if (checkForDublicates(checkDuplicatesArr)) {
      return false;
    }
    checkDuplicatesArr = [];
    count++;
  }
  //check each 3 by 3 grid
  for (let r = 0; r < board.length; r += 3) {
    for (let c = 0; c < board.length; c += 3) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          checkDuplicatesArr.push(board[r + i][c + j]);
        }
      }
      if (checkForDublicates(checkDuplicatesArr)) {
        return false;
      }
      checkDuplicatesArr = [];
    }
  }
};

var mergeTwoLists = function (l1, l2) {
  let sortedList = new ListNode(0),
    headValue;

  headValue = sortedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      sortedList.next = l1;
      l1 = l1.next;
    } else {
      sortedList.next = l2;
      l2 = l2.next;
    }
    sortedList = sortedList.next;
  }
  sortedList.next = l1 || l2;
  return headValue.next;
};

const twosums = (nums, target) => {
  let cache = {};

  for (var i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (cache[difference] == undefined) {
      cache[nums[i]] = i;
    } else {
      return [cache[difference], i];
    }
  }
};

// console.log(twosums([2, 7, 11, 15], 9));

let vara = "10-";

// console.log(Number(vara));
// console.log(parseFloat(vara));

// var makeGood = function (s) {
//   let goodStr = "";
//   for (i = 0; i < s.length - 1; i++) {
//     if (s[i].toLowerCase() == s[i + 1].toLowerCase()) {
//       if (
//         (s[i] == s[i].toUpperCase() || s[i + 1] == s[i + 1].toUpperCase()) &&
//         (s[i] == s[i].toLowerCase() || s[i + 1] == s[i + 1].toLowerCase())
//       ) {
//         continue;
//       } else {
//         goodStr = goodStr += s[i];
//       }
//     } else {
//       goodStr += s[i];
//     }
//   }
//   goodStr = goodStr + s[s.length - 1];

//   if (makeGood(goodStr) !== goodStr) {
//     return makeGood(goodStr);
//   } else {
//     return goodStr;
//   }
// };

// console.log(makeGood("leEeetcode"));

var isHappy = function (n, counter) {
  let result = false;
  let split = n
      .toString()
      .split("")
      .map((num) => num * num),
    sum = 0;
  if (counter === undefined) {
    counter = 1;
  } else {
    counter++;
  }
  split.reduce((acc, curr) => acc + curr, 0);
  if (sum === 1) {
    result = true;
  } else if (counter >= 10) {
    result = false;
  } else {
    isHappy(sum, counter);
  }

  return result;
};

// isHappy(19);

var backspaceCompare = function (S, T) {
  // two pointers one for S and T
  // while S.includes #
  //if S[spointer] is a # then remove previous element
  //same for t and compare

  let findIndex;

  while (S.includes("#")) {
    findIndex = S.indexOf("#");
    if (findIndex) S = S.slice(findIndex - 1, findIndex + 1);
  }
  while (T.includes("#")) {
    findIndex = T.indexOf("#");
    if (findIndex) T.slice(findIndex - 1, findIndex + 1);
  }
  if (T === S) {
    return true;
  } else {
    return false;
  }
};

// console.log(backspaceCompare("ab#c", "ad#c"));

// let str = "hello hello";
// str = str.slice(3, 5);
// console.log(str);
function tripleThreat(a) {
  //loop through all of a to a - 3.
  // check if arr[i] === arr[i+1] +1 === arr[i+2] + 2

  for (let i = 0; i < a.length - 2; i++) {
    if ((a[i] === a[i + 1] - 1) === a[i + 2] - 2) {
      return 1;
    }
  }
  return 0;
}

// tripleThreat([3, 1, 2, 3]);

function is_valid(stale, latest, otjson) {
  // this is the part you will write!
  const operations = JSON.parse(otjson);
  let newStr = "";
  let currIndex = 0;
  // 3 operations, delete, skip, and insert
  for (const op of operations) {
    if (op.op === "skip") {
      currIndex = currIndex + op.count;
    } else if (op.op === "delete") {
      let arr = stale.split("");
      let removed = arr.splice(currIndex, op.count);
      stale = arr.join("");
    } else if (op.op === "insert") {
      stale = stale.slice(0, currIndex) + op.chars + stale.slice(currIndex);

      currIndex = currIndex + op.chars.length;
    }
  }
  if (stale === latest) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// is_valid(
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "Repl.it uses operational transformations.",
//   '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
// ); // true

// is_valid(
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "Repl.it uses operational transformations.",
//   '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
// ); // false, delete past end

// is_valid(
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "Repl.it uses operational transformations.",
//   '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
// ), // false, skip past end
//   is_valid(
//     "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//     "We use operational transformations to keep everyone in a multiplayer repl in sync.",
//     '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
//   ); // true

// is_valid(
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
//   "[]"
// ); //true
