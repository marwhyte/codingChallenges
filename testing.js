let str = "hello";

let removed = str.slice(3, 4);

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    let max1 = stones[0],
      max2 = stones[1];
    stones = stones.splice(2);
    if (max1 > max2) {
      stones.unshift(max1 - max2);
    }
  }
  return stones[0];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let returnArr = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      returnArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      returnArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return returnArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

// console.log(mergeSort([43, 234, 1231, 32, 123, 123, 4, 3, 2, 1]));

const binarySearch = (arr, target) => {
  let bottom = 0,
    top = arr.length - 1;

  while (bottom <= top) {
    const middle = Math.floor((top + bottom) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      top = middle - 1;
    } else {
      bottom = middle + 1;
    }
  }
};
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 10], 5));
