import 'dotenv/config';
import saySomething from './assets/js/app.js';

const express = require('express');
const app = express();
app.listen(3400, function () {
    console.log(`Server is listening on port 3400`);
});




console.log('Hello Node.js project.');

console.log(process.env.MY_SECRET);

module.exports = app;