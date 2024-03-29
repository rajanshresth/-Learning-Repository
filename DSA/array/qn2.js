// Q2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps.
// k is an non-negative integer.

// Input: nums = [1,2,3,4,5,6,7], k = 3 --->> Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2 --->> Output: [3,99,-1,-100]

function rotateArray(nums, k) {
  let size = nums.length;
  if (size > k) {
    k = k % size;
  }
  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);
  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));


function rotatedArrayOptimised(nums, k) {
  let size = nums.length;
  if (size > k) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}
function reverse(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotatedArrayOptimised([1, 2, 3, 4, 5, 6, 7], 3));