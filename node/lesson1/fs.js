const fs = require('node:fs');

fs.readFile('./app.js', (err, data) => {
    console.log(data.toString());
})