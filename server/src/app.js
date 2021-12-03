const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// 同步資料庫
const User = require('./models/User') 
User.sync({force:false})

// 把 node 的 port 加回來; 和 rds 的 port 分開
app.listen(8081);
console.log('express is ok!')