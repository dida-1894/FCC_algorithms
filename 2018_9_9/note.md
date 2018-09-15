### nowCode JavaScript专项练习题

 - while只是在函数局部环境或者全局环境运行， 并不会改变作用域链
##### 作用域链
 -
try catch （红宝书第四章） 执行环境分为 全局和局部， 但可以用其他方法来延长作用域，例如在作用域的前端临时怎加一个变量对象，该变量会在代码执行后被移除。具体来说，当执行流进入下列任何一个语句时，作用域链就会得到加强
- try catch语句的catch模块
- 别用with eval

 - let 与 var不同，let存在块级作用域，在for循环中声明，循环之外销毁 所以i not defind
 - const声明一个无法修改的常量，尝试重新赋值，TypeError， 重新声明，报错， let报错，
```js
const a={
  x: 1
};
console.log(a.x) //1
a.x = 5;
console.log(a.x) //5 这里的a是一个对象，x为a的属性值，如果const一个对象， 属性值可修改。重写对象会报错。
const MY_FAV = 7;
// 注意块范围的性质很重要
if (MY_FAV === 7) {
    // 没问题，并且创建了一个块作用域变量 MY_FAV
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV = 20;

    // MY_FAV 现在为 20
    console.log('my favorite number is ' + MY_FAV);

    // 这被提升到全局上下文并引发错误
    var MY_FAV = 20;
}
console.log(MY_FAV)//7
const MY_ARRAY = [];
MY_ARRAY.push('A')//可以填充数据
MY_ARRAY= ['b'];//将一个新数组赋给变量会引发错误
```

##### 常见的请求头和响应头
###### 请求头
  - GET（请求方式） /newcoder/hello.html（请求的目标资源） HTTP/1.1（请求协议的版本号）
  - Accept */* （客户端能接受的资源类型）
  - Accept-Language （客户端接收的语言类型）
  - Conenction：Keep-alive （维护客户端和服务端的连接关系）
  - Host：localhost：8080（连接的目标主机和端口号）
  - Referer （告诉服务器我来自哪里）
  - User-Agent： Mozilla/4.0 （客户端版本号的名字）
  - Accept-Encoding：gzip（客户端能接受的压缩数据类型）
  - If-Modified-Since： Tuesday，11 Jul 2000 18：23：22 GMT （缓存时间）
  - cookie （客户端暂存服务端信息）
  - Date：Tuesday，11 Jul 2000 18：23：22 GMT （客户端请求服务端时间）
##### 响应头
  - HTTP/1.1（响应采取的协议和版本号） 200（状态码）OK（描述信息）
  - Location：http://www.baodu.com （服务端需要客户端访问的页面路径）
  - Server： apache tomcat（服务端的Web服务端名）
  - Content-Encoding： gzip（服务端能够发送压缩编码的类型）
  - Conent-Length： 80（。。。压缩数据的长度）
  - Content-Language： zh-ch （语言类型）
  - Content-Type： text/html; charset=GB2312 （服务端发送的类型及采用的编码方式）
  - Last-Modified：Tue， 11 Jui 2000 18：23：13 GMT（服务端对该资源的最后修改时间）
  - Refresh：1； url=http://www.it315.org（服务端请求客户端1秒，刷新，然后访问指定的页面路径）
  - Content-Dispsition： attachment； filename=aaa.zip（服务端要求客户端已下载文件的方式打开该文件）
  - Transfer-Encoding：chunked（分块传递数据到客户端）
  - Set-Cookie：SS=Q0=5Lb ；path=/search （服务端发送到客户端的暂存数据）
  - Expires：-1//3种（服务端禁止客户端缓存页面数据）
  - Cache-Control：no-cacher（服务端禁止客户端缓存
  - Pragma：no-cache
  - Connection：close(1.0)/(1.1)Keep-Alive（维护客户端和服务端的连接关系）
  - Date： Tue， 11 Jul 2000 18：23：51 GMT （服务端响应客户端的时间）
* 在服务器响应客户端的时候， 带上Access-Control-Allow-Origing头信息，解决跨域的一种方法。

- Noscript 标签： 用来定义在脚本未被执行时的替代内容。
- RegExp对象有三个方法
  - test() 用来检测一个字符串是否匹配某个正则表达式，如果匹配成功， 返回true， 否则返回false。
  - exec() 用来检索字符床中与正则表达式匹配的值。 exec() 返回一个数组放入匹配结果。如果没有找到匹配的值，返回null。
  - compile() 在脚本执行过程中编译正则表达式，也可以改变已有的正则表达式。
- match() 是支持正则表达式的String对象方法。
