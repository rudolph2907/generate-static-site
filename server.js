var page = require('webpage').create();
var fs = require('fs');
page.open('http://localhost:3000/faq', function () {    
    fs.write('1.html', page.content, 'w');
    phantom.exit();
});