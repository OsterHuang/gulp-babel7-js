/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  for (let x = 0; x < nums.length - 1; x++) {
    for (let y = x + 1; y < nums.length; y++) {
        if (nums[x] + nums[y] === target) {
          return [x, y]
        }
      }
  }
};

console.log(twoSum([1, 2, 4, 6, 8, 15, 21], 23), ', expect [1, 6]')
console.log(twoSum([3, 7, 5, 9, 11], 12))
console.log(twoSum([3, 7, 5], 12))
console.log(twoSum([1, 2, 3], 3))

var [a,,b] = [1,2,3];
console.log(a, b)

async function testES6() {
  await new Promise(resolve => { setTimeout(resolve('Finsined Waiting')) })
  console.log('After 3 seconds ....')
}
testES6()
