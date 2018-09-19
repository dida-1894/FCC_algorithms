function twoSum(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
      var diff = target - nums[i];
      if (diff in map) return [map[diff], i]
      map[nums[i]] = i
    }
}
var nums = [2, 7, 11, 15,], target = 9
 console.log(twoSum(nums, target));


// map结构用键值对来存储数组的index和相应的值， 但es5的对象结构不能用数字作为键值，所以改用数组存储
// 每次循环遍历，将数组里的值和index以键值对的形式存入 Map结构
// diff表示数组里每个数的差值， 判断diff是否等于map里的键 即可返回出map里的键值与i
