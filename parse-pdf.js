const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('My Resume.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error parsing PDF:", err);
});
