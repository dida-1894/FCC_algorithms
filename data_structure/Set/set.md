#Set 数据结构
- Set是一个构造函数
```js
const s = new Set()
```
- Set是类似数组，但是成员是唯一 向Set结构通过add方法加入成员， Set不会添加重复的值
##操作方法（操作数据）
- add(val): 返回Set结构本身
- delete(val): 删除某个值， 返回布尔值
- has(val): 返回布尔值
- clear(): 没有return
##遍历方法（遍历成员）
- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员
