const express = require('express');
const { PORT = 3001, BASE_PATH } = process.env;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/dataSub', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
     // В 6 версии mongoose при использование этих параметров сервер ложится
});

const settingCors = {
    origin: [
        'http://localhost:3000',
        'https://localhost:3000',
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
    credentials: true,
};
app.use('*', cors(settingCors));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/cards', require('./routes/card'))
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
