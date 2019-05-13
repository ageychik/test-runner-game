import 'dotenv/config';

const express = require('express');
const app = express();

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/*', function(req, res) {
    res.sendfile('index.html');
});

app.listen(3400, function () {
    console.log(`Server is listening on port 3400`);
});

module.exports = app;