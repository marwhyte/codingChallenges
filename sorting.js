//bubble sort
// time is 0(n^2) space is 0(1)
let arr = [4, 2, 3, 5, 6, 8, 6, 20, -50, 30, 20, 10];

const bubbleSort = (arr) => {
  let isSorting = true;
  while (isSorting) {
    isSorting = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const placeholder = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = placeholder;
        isSorting = true;
      }
    }
  }
  return arr;
};

//insertion sort
// time is O(n^2) is stable meaning it can skip values that are already in correct spot. space is O(1)
//skip first, arr of 1 is sorted

const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    let currValue = arr[i];
    let compareIndex = i - 1;
    while (i >= 0 && arr[compareIndex] > currValue) {
      arr[compareIndex + 1] = arr[compareIndex];
      compareIndex--;
    }
    arr[compareIndex + 1] = currValue;
  }
  return arr;
};

// console.log(insertionSort(arr));
// console.log(bubbleSort(arr));

// merge sort
// divide and conqure, will devide bigger problems into smaller problems, solving smaller problems to solve bigger problem
// uses reccursion
// Splits large task of sorting, into lots of smaller tasks, solving the problem in a o(nlogn) time instead of having to continueally loop through arr until sorted
// memory is n (we recurse causing n memory)

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

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

// console.log(mergeSort(arr));

//quick sort
