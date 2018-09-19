const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (map.has(diff)) return [map.get(diff), i]
    map.set(nums[i], i)
  }
}

let nums = [2,4,6,8,7,7], target = 14

console.log(twoSum(nums, target))
