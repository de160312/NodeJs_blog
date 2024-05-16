const path = require('path')
const express = require('express')
const {engine} = require('express-handlebars')
// import { engine } from 'express-handlebars';
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))//set file tinh~

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => { // có thể thay đổi '/' để định nghĩa url
  res.render('home');
})

app.get('/news', (req, res) => { // có thể thay đổi '/' để định nghĩa url
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})