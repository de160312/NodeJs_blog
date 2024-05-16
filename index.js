const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // có thể thay đổi '/' để định nghĩa url
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})