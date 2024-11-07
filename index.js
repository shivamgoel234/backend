require('dotenv').config({ path: './path/to/your/.env' });
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/my', (req, res) => {
    res.send('openweb')
})
app.listen(process.env.PORT,()=> {
    console.log(`Example app listening on port ${port}`)
})
