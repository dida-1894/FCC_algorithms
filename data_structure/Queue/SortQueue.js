// //对于0～99的数字，基数排序将数据集扫描两次，第一次按个位数上的数字进行排序，第二次按十位数上的数字进行排序
const Queue = require('./queue.js')
const distribute = (nums, queue, n, digit) => {
  // nums是随机生成数组， n是数的数量，digit判断是十位还是个位
  for (var i = 0; i < n.length; i++) {
    if (digit == 1) {
      queue[nums[i]%10].enqueue(nums[i])
    } else {
      queue[nums[i]/10].enqueue(nums[i])
    }
  }
}

const collection = (queues, nums) => {
  let i = 0
  for (let digit = 0; i < digit.length; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue()
    }
  }
}

const dispArray = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ")
  }
}


let queues = []
console.log(queues)
for (let i = 0; i < 10; i++) {
  queues[i] = new Queue()
}

var nums = []
for (let i = 0; i < 10; i++) {
  nums[i]=Math.floor(Math.floor(Math.random() * 101))
}

console.log("before radix sort:")
dispArray(nums)
distribute(nums, queues, 10, 1)
collection(queues, nums)
distribute(nums, queues, 10, 10)
collection(queues, nums)
console.log("after sort")
dispArray(nums)
