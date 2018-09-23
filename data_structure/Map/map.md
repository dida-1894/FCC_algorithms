# Map
- JS的对象，键值对的集合（Hash结构）， js只能用字符串但作键
- ES6的Map数据结构，可以用各种类型的值（包括对象作为键值）
```js
const m = new Map()
const o = {p: 'hello'}
m.set(o, 'content')
m.get(o) // "content"
