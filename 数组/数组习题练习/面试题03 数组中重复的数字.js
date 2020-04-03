/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
    continue
  }
  if (nums[nums[i]] === nums[i]) {
    return nums[i]
  }
  [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]]
  }
  return -1
};