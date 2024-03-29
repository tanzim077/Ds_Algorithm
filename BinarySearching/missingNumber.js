/*
 * File           : missingNumber.js
 * Project        : tanzim
 * Created Date   : Th 08 Jun 2023 11:13:58
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Thu Jun 08 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
/**
 * 268. Missing Number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 * 
 */

// Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// Output: 8;

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const missingNumber = function (nums) {
  const n = nums.length;
  const expectedSummation = (n * (n + 1)) / 2; // the rules of summation of n numbers is n(n+1)/2
  let currentSummation = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSummation = currentSummation + nums[i];
  }
  // the missing number is the difference between the expected sum and the actual sum
  return expectedSummation - currentSummation;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
