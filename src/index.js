const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
// import { engine } from 'express-handlebars';
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //set file tinh~

app.use(
    express.urlencoded({
        extended: true,
    }),
); //middlewarew
app.use(express.json()); // gửi code js lên

app.use(methodOverride('_method'));

//HTTP logger
// app.use(morgan('combined'))

//template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);
//Action ---> Dispatcher ---> Funtion handler (Controller)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
