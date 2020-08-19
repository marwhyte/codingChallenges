// traditional searches have o(n) time, however we can lower this with a binary search to(log(n))

const binarySearch = (arr, value) => {
  let bottom = 0,
    top = arr.length - 1;

  while (bottom <= top) {
    const middle = Math.floor((top + bottom) / 2);
    if (arr[middle] === value) {
      return middle;
    }
    if (arr[middle] < value) {
      bottom = middle + 1;
    } else {
      top = middle - 1;
    }
  }
  return null;
};

console.log(binarySearch([1, 2, 3, 5, 7, 8, 10], 5));
