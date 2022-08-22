const express = require('express');
const Routes = require('./Routes/Routes');

require('dotenv').config();

const host = process.env.ServerHost || 'localhost'
const port = process.env.ServerPort || '3005'

const app = express();

app.use(Routes);

app.listen(port, () => {
    console.log(`Server Is Running On http://${host}:${port} Use Ctrl + C To Stop The Server.`)
})