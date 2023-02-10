## 同源
协议/域名/端口号 三者相同则为同源，缺一不可

## 同源策略限制
当前域下 js 脚本不能访问其他域下的cookie/localStorage/indexDB 
当前域下 js 脚本不能操作其他域下的 DOM
ajax 不能发送跨域请求

## 实现跨域
- jsonp
- cors
- postMessage
- document.domain
- window.name
- location.hash
- http-proxy
- nginx
- websocket 