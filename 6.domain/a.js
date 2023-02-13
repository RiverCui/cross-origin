let express = require('express')
let app = express()
app.use(express.static(__dirname))

app.listen(3000)

// 修改 hosts，hosts 文件路径 ===> C:\Windows\System32\drivers\etc
// 添加
// 127.0.0.1 www.river1.cn
// 127.0.0.1 a.river1.cn
// 127.0.0.1 b.river1.cn